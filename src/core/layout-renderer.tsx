import * as React from 'react';
import { LayoutNode, LayoutProps, OnLoadConfig, OnLoadApiCall, OnLoadResult, OnLoadError, LayoutContext as LayoutContextType } from '../types/layout';
import { layoutRegistry, widgetRegistry } from './registry';
import { executeApiAction, ApiActionConfig } from '../utils/api';
import { cn } from '../utils/cn';
import {
  responsiveSpacingToClass,
  directionToClass,
  alignToClass,
  justifyToClass,
  wrapToClass,
  columnsToClass,
  shadowToClass,
} from '../utils/tailwind';

/**
 * Context for layout rendering with state management
 */
export interface LayoutContext extends LayoutContextType {
  setContext?: (key: string, value: any) => void;
  updateContext?: (updates: Record<string, any>) => void;
}

/**
 * Props for RenderNode component
 */
interface RenderNodeProps {
  node: LayoutNode;
  context?: LayoutContext;
}

/**
 * Execute onLoad API calls
 */
async function executeOnLoad(
  onLoad: OnLoadConfig,
  context: LayoutContext,
  setContext: (key: string, value: any) => void
): Promise<{ results: OnLoadResult[]; errors: OnLoadError[] }> {
  const { apis, strategy = 'parallel' } = onLoad;
  const results: OnLoadResult[] = [];
  const errors: OnLoadError[] = [];

  // Set global loading state
  const loadingKey = onLoad.loadingState || 'pageLoading';
  const errorKey = onLoad.errorState || 'pageError';
  setContext(loadingKey, true);
  setContext(errorKey, null);

  // Helper to execute a single API call with retry
  const executeApiWithRetry = async (apiCall: OnLoadApiCall): Promise<OnLoadResult> => {
    const { id, retry, ...apiConfig } = apiCall;
    const maxAttempts = retry?.attempts || 1;
    const delay = retry?.delay || 1000;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const response = await executeApiAction(apiConfig, context);
        
        // Store result in context with the API call ID
        setContext(`${id}_data`, response.data);
        setContext(`${id}_status`, response.status);
        setContext(`${id}_error`, null);

        return {
          id,
          success: true,
          data: response.data,
          status: response.status,
        };
      } catch (error: any) {
        const lastAttempt = attempt === maxAttempts;
        
        if (lastAttempt) {
          setContext(`${id}_error`, error);
          setContext(`${id}_data`, null);
          
          return {
            id,
            success: false,
            error,
            status: error.status,
          };
        }
        
        // Wait before retry
        if (delay > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    // Should never reach here, but TypeScript needs it
    return {
      id,
      success: false,
      error: new Error('Max retries exceeded'),
    };
  };

  try {
    if (strategy === 'parallel') {
      // Execute all APIs in parallel
      const promises = apis.map(apiCall => executeApiWithRetry(apiCall));
      const apiResults = await Promise.allSettled(promises);
      
      apiResults.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          results.push(result.value);
          if (!result.value.success) {
            errors.push({
              id: apis[index].id,
              error: result.value.error,
              status: result.value.status,
            });
          }
        } else {
          const apiCall = apis[index];
          const errorResult: OnLoadResult = {
            id: apiCall.id,
            success: false,
            error: result.reason,
          };
          results.push(errorResult);
          errors.push({
            id: apiCall.id,
            error: result.reason,
          });
        }
      });
    } else {
      // Execute APIs sequentially, respecting dependencies
      const executed = new Set<string>();
      const pending = new Map<string, OnLoadApiCall>();
      
      // Initialize pending map
      apis.forEach(api => {
        pending.set(api.id, api);
      });

      // Execute APIs in dependency order
      while (pending.size > 0) {
        const readyApis = Array.from(pending.values()).filter(api => {
          if (!api.dependsOn || api.dependsOn.length === 0) {
            return true;
          }
          return api.dependsOn.every(depId => executed.has(depId));
        });

        if (readyApis.length === 0) {
          // Circular dependency or missing dependency
          const remaining = Array.from(pending.keys());
          console.error('Circular or missing dependencies detected:', remaining);
          break;
        }

        // Execute ready APIs (can be parallel within the batch)
        const batchResults = await Promise.allSettled(
          readyApis.map(api => executeApiWithRetry(api))
        );

        batchResults.forEach((result, index) => {
          const apiCall = readyApis[index];
          pending.delete(apiCall.id);
          executed.add(apiCall.id);

          if (result.status === 'fulfilled') {
            results.push(result.value);
            if (!result.value.success) {
              errors.push({
                id: apiCall.id,
                error: result.value.error,
                status: result.value.status,
              });
            }
          } else {
            const errorResult: OnLoadResult = {
              id: apiCall.id,
              success: false,
              error: result.reason,
            };
            results.push(errorResult);
            errors.push({
              id: apiCall.id,
              error: result.reason,
            });
          }
        });
      }
    }

    // Check if any required API failed
    const requiredFailed = results.some((result, index) => {
      const apiCall = apis[index];
      return apiCall.required && !result.success;
    });

    // Update global states
    setContext(loadingKey, false);
    
    if (errors.length > 0) {
      setContext(errorKey, errors);
    }

    // Execute callbacks
    if (onLoad.onComplete) {
      await onLoad.onComplete(results, context);
    }

    if (errors.length === 0 && onLoad.onAllSuccess) {
      await onLoad.onAllSuccess(results, context);
    } else if (errors.length > 0 && onLoad.onAnyError) {
      await onLoad.onAnyError(errors, context);
    }

    return { results, errors };
  } catch (error) {
    setContext(loadingKey, false);
    setContext(errorKey, error);
    throw error;
  }
}

/**
 * Get value from context using a path (e.g., "user_data.name" or "posts_data[0].title")
 */
function getContextValue(path: string, context: LayoutContext): any {
  const keys = path.trim().split(/[.\[\]]/).filter(Boolean);
  let result: any = context;
  
  for (const key of keys) {
    if (result === null || result === undefined) {
      return undefined;
    }
    // Handle array indices
    const numKey = /^\d+$/.test(key) ? parseInt(key, 10) : key;
    result = result[numKey];
  }
  
  return result;
}

/**
 * Replace template variables in a value using context
 * Supports nested property access: {{user_data.name}} or {{user_data.items[0].title}}
 * Also supports direct data binding: {{posts_data}} returns the actual object/array
 */
function substituteTemplateVariables(
  value: any,
  context: LayoutContext
): any {
  // If value is a function, call it with context
  if (typeof value === 'function') {
    return value(context);
  }
  
  if (typeof value === 'string') {
    // Check if the entire string is a single template variable (direct data binding)
    const directMatch = value.match(/^\{\{([^}]+)\}\}$/);
    if (directMatch) {
      const result = getContextValue(directMatch[1], context);
      // Return the actual value (object/array/primitive) for direct binding
      return result !== undefined ? result : '';
    }
    
    // Handle template variables within strings: "Hello {{user_data.name}}!"
    return value.replace(/\{\{([^}]+)\}\}/g, (_, path) => {
      const result = getContextValue(path, context);
      
      // Return the value, or empty string if not found
      if (result === null || result === undefined) {
        return '';
      }
      // For objects/arrays within strings, stringify them; for primitives, convert to string
      if (typeof result === 'object') {
        return JSON.stringify(result);
      }
      return String(result);
    });
  }
  
  if (Array.isArray(value)) {
    return value.map(item => substituteTemplateVariables(item, context));
  }
  
  if (value && typeof value === 'object') {
    const result: any = {};
    for (const [key, val] of Object.entries(value)) {
      // Skip internal functions
      if (key === 'setContext' || key === 'updateContext') {
        result[key] = val;
        continue;
      }
      result[key] = substituteTemplateVariables(val, context);
    }
    return result;
  }
  
  return value;
}

/**
 * Recursive component for rendering layout nodes
 */
export const RenderNode: React.FC<RenderNodeProps> = ({ node, context = {} }) => {
  const [localState, setLocalState] = React.useState<Record<string, any>>({});
  
  // Enhanced context with state management
  const enhancedContext: LayoutContext = React.useMemo(() => {
    const setContext = (key: string, value: any) => {
      setLocalState(prev => ({ ...prev, [key]: value }));
    };

    const updateContext = (updates: Record<string, any>) => {
      setLocalState(prev => ({ ...prev, ...updates }));
    };

    return {
      ...context,
      ...localState,
      setContext,
      updateContext,
    };
  }, [context, localState]);

  // Handle data source loading
  React.useEffect(() => {
    const dataSource = node.dataSource;
    const api = dataSource?.api;
    if (api) {
      const loadData = async () => {
        const loadingKey = api.loadingState || `${node.id}_loading`;
        const dataKey = api.dataState || `${node.id}_data`;
        const errorKey = api.errorState || `${node.id}_error`;

        try {
          enhancedContext.setContext?.(loadingKey, true);
          enhancedContext.setContext?.(errorKey, null);

          const response = await executeApiAction(api, enhancedContext);
          
          enhancedContext.setContext?.(dataKey, response.data);
          enhancedContext.setContext?.(loadingKey, false);

          // Call onSuccess callback
          if (api.onSuccess) {
            await api.onSuccess(response.data, enhancedContext);
          }
        } catch (error) {
          enhancedContext.setContext?.(loadingKey, false);
          enhancedContext.setContext?.(errorKey, error);

          // Call onError callback
          if (api.onError) {
            await api.onError(error, enhancedContext);
          }
        }
      };

      loadData();

      // Handle polling
      if (dataSource.polling) {
        const interval = dataSource.polling.interval;
        const isEnabled = typeof dataSource.polling.enabled === 'function'
          ? dataSource.polling.enabled(enhancedContext)
          : dataSource.polling.enabled !== false;

        if (isEnabled) {
          const pollInterval = setInterval(loadData, interval);
          return () => clearInterval(pollInterval);
        }
      }

      // Handle refreshOn dependencies
      if (dataSource.refreshOn && dataSource.refreshOn.length > 0) {
        // This will be handled by the dependency array in useEffect
      }
    }
  }, [
    node.dataSource?.api?.url,
    node.dataSource?.polling?.enabled,
    ...(node.dataSource?.refreshOn || []).map(key => enhancedContext[key]),
  ]);

  if (!node) return null;

  // Handle conditional rendering
  if (node.condition !== undefined) {
    const shouldRender = typeof node.condition === 'function'
      ? node.condition(enhancedContext)
      : node.condition;
    if (!shouldRender) return null;
  }

  // Handle visibility
  if (node.visible !== undefined) {
    const isVisible = typeof node.visible === 'function'
      ? node.visible(enhancedContext)
      : node.visible;
    if (!isVisible) return null;
  }

  // Handle component type
  if (node.type === 'component') {
    const componentName = node.props.component;
    if (!componentName) {
      console.warn('Component type specified but no component name provided');
      return null;
    }

    const widgetEntry = widgetRegistry.get(componentName);
    if (!widgetEntry) {
      console.warn(`Component "${componentName}" not found in widget registry`);
      return null;
    }

    const Component = widgetEntry.component;
    let componentProps = {
      ...widgetEntry.defaultProps,
      ...node.props.componentProps,
      ...node.props,
    };
    delete componentProps.component;
    delete componentProps.componentProps;

    // Apply template variable substitution to all props
    componentProps = substituteTemplateVariables(componentProps, enhancedContext);

    // Handle API actions for buttons and interactive components
    if (componentProps.apiAction) {
      const action = componentProps.apiAction as ApiActionConfig;
      const originalOnClick = componentProps.onClick;
      const loadingKey = action.loadingState || `${node.id}_action_loading`;
      const errorKey = action.errorState || `${node.id}_action_error`;

      componentProps.onClick = async (e: React.MouseEvent) => {
        // Call original onClick if exists
        if (originalOnClick) {
          originalOnClick(e);
        }

        try {
          enhancedContext.setContext?.(loadingKey, true);
          enhancedContext.setContext?.(errorKey, null);

          const response = await executeApiAction(action, enhancedContext);
          
          enhancedContext.setContext?.(loadingKey, false);

          // Call onSuccess callback
          if (action.onSuccess) {
            await action.onSuccess(response.data, enhancedContext);
          }
        } catch (error) {
          enhancedContext.setContext?.(loadingKey, false);
          enhancedContext.setContext?.(errorKey, error);

          // Call onError callback
          if (action.onError) {
            await action.onError(error, enhancedContext);
          }
        }
      };

      // Disable button while loading
      if (componentName === 'Button' && enhancedContext[loadingKey]) {
        componentProps.disabled = true;
      }
    }

    // Handle children: support both nested LayoutNode children and componentProps.children
    let children: React.ReactNode = undefined;
    
    // If node.children exists, render them recursively
    if (node.children && node.children.length > 0) {
      const renderedChildren = node.children.map((child, index) => (
        <RenderNode key={child.id || `child-${index}`} node={child} context={enhancedContext} />
      ));
      
      // If componentProps.children also exists, combine them
      if (componentProps.children !== undefined) {
        // componentProps.children has already been processed by substituteTemplateVariables
        // so it may be a string, React node, array, or any other value
        if (typeof componentProps.children === 'string') {
          children = [componentProps.children, ...renderedChildren];
        } else if (Array.isArray(componentProps.children)) {
          children = [...componentProps.children, ...renderedChildren];
        } else {
          // Otherwise, combine React nodes
          children = [componentProps.children, ...renderedChildren];
        }
      } else {
        children = renderedChildren;
      }
    } else if (componentProps.children !== undefined) {
      // Only componentProps.children exists (already processed by substituteTemplateVariables)
      children = componentProps.children;
    }

    // Remove children from props if we're handling it separately
    if (node.children && node.children.length > 0) {
      delete componentProps.children;
    }

    return <Component {...componentProps}>{children}</Component>;
  }

  // Handle layout components
  const layoutEntry = layoutRegistry.get(node.type);
  if (!layoutEntry) {
    console.warn(`Layout type "${node.type}" not found in layout registry`);
    return <div>Unknown layout: {node.type}</div>;
  }

  const LayoutComponent = layoutEntry.component;
  let layoutProps = {
    ...layoutEntry.defaultProps,
    ...node.props,
  };
  
  // Apply template variable substitution to layout props
  layoutProps = substituteTemplateVariables(layoutProps, enhancedContext);

  // Render children recursively
  const children = node.children?.map((child, index) => (
    <RenderNode key={child.id || `child-${index}`} node={child} context={enhancedContext} />
  ));

  return (
    <LayoutComponent {...layoutProps}>
      {children}
    </LayoutComponent>
  );
};

/**
 * Main layout renderer component with onLoad support
 */
export interface LayoutRendererProps {
  config: LayoutNode;
  context?: LayoutContext;
  /**
   * Initial context values (merged with provided context)
   */
  initialContext?: Record<string, any>;
}

export const LayoutRenderer: React.FC<LayoutRendererProps> = ({ 
  config, 
  context: externalContext = {},
  initialContext = {},
}) => {
  // Internal state management
  const [internalState, setInternalState] = React.useState<Record<string, any>>({
    ...initialContext,
  });

  // Enhanced context with state management
  const context: LayoutContext = React.useMemo(() => {
    const setContext = (key: string, value: any) => {
      setInternalState(prev => ({ ...prev, [key]: value }));
    };

    const updateContext = (updates: Record<string, any>) => {
      setInternalState(prev => ({ ...prev, ...updates }));
    };

    return {
      ...externalContext,
      ...internalState,
      setContext,
      updateContext,
    };
  }, [externalContext, internalState]);

  // Handle onLoad API calls
  React.useEffect(() => {
    if (config.onLoad) {
      executeOnLoad(config.onLoad, context, context.setContext!);
    }
  }, []); // Only run on mount

  return <RenderNode node={config} context={context} />;
};

/**
 * Hook for using layout renderer
 */
export function useLayoutRenderer(config: LayoutNode, context?: LayoutContext) {
  return React.useMemo(
    () => <LayoutRenderer config={config} context={context} />,
    [config, context]
  );
}

