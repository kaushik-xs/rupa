import * as React from 'react';
import { LayoutNode, LayoutProps } from '../types/layout';
import { layoutRegistry, widgetRegistry } from './registry';
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
 * Context for layout rendering (can be used for conditional rendering)
 */
export interface LayoutContext {
  [key: string]: any;
}

/**
 * Props for RenderNode component
 */
interface RenderNodeProps {
  node: LayoutNode;
  context?: LayoutContext;
}

/**
 * Recursive component for rendering layout nodes
 */
export const RenderNode: React.FC<RenderNodeProps> = ({ node, context = {} }) => {
  if (!node) return null;

  // Handle conditional rendering
  if (node.condition !== undefined) {
    const shouldRender = typeof node.condition === 'function'
      ? node.condition(context)
      : node.condition;
    if (!shouldRender) return null;
  }

  // Handle visibility
  if (node.visible !== undefined) {
    const isVisible = typeof node.visible === 'function'
      ? node.visible(context)
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
    const componentProps = {
      ...widgetEntry.defaultProps,
      ...node.props.componentProps,
      ...node.props,
    };
    delete componentProps.component;
    delete componentProps.componentProps;

    return <Component {...componentProps} />;
  }

  // Handle layout components
  const layoutEntry = layoutRegistry.get(node.type);
  if (!layoutEntry) {
    console.warn(`Layout type "${node.type}" not found in layout registry`);
    return <div>Unknown layout: {node.type}</div>;
  }

  const LayoutComponent = layoutEntry.component;
  const layoutProps = {
    ...layoutEntry.defaultProps,
    ...node.props,
  };

  // Render children recursively
  const children = node.children?.map((child, index) => (
    <RenderNode key={child.id || `child-${index}`} node={child} context={context} />
  ));

  return (
    <LayoutComponent {...layoutProps}>
      {children}
    </LayoutComponent>
  );
};

/**
 * Main layout renderer component
 */
export interface LayoutRendererProps {
  config: LayoutNode;
  context?: LayoutContext;
}

export const LayoutRenderer: React.FC<LayoutRendererProps> = ({ config, context }) => {
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

