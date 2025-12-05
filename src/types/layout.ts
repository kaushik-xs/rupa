import * as React from 'react';
import { ComponentNode, ComponentProps } from './index';
import { ApiActionConfig } from '../utils/api';

/**
 * Tailwind breakpoint keys
 */
export type Breakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Responsive value that can be a single value or breakpoint-specific values
 */
export type ResponsiveValue<T> = T | {
  default?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

/**
 * Spacing value (number maps to Tailwind spacing scale)
 */
export type SpacingValue = number | string;

/**
 * Layout node extending ComponentNode with layout-specific properties
 */
export interface LayoutNode extends ComponentNode {
  type: string;
  props: LayoutProps;
  children?: LayoutNode[];
  id?: string;
  condition?: boolean | ((context: any) => boolean);
  visible?: boolean | ((context: any) => boolean);
  onLoad?: OnLoadConfig;
  dataSource?: DataSourceConfig;
}

/**
 * Layout-specific props with Tailwind-friendly values
 */
export interface LayoutProps extends ComponentProps {
  // Spacing
  gap?: ResponsiveValue<SpacingValue>;
  padding?: ResponsiveValue<SpacingValue>;
  paddingX?: ResponsiveValue<SpacingValue>;
  paddingY?: ResponsiveValue<SpacingValue>;
  margin?: ResponsiveValue<SpacingValue>;
  marginX?: ResponsiveValue<SpacingValue>;
  marginY?: ResponsiveValue<SpacingValue>;
  
  // Flex properties
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse';
  
  // Grid properties
  columns?: ResponsiveValue<number | string>;
  rows?: ResponsiveValue<number | string>;
  autoFit?: boolean;
  autoFill?: boolean;
  
  // Layout-specific
  width?: ResponsiveValue<string | number>;
  height?: ResponsiveValue<string | number>;
  maxWidth?: ResponsiveValue<string | number>;
  minWidth?: ResponsiveValue<string | number>;
  maxHeight?: ResponsiveValue<string | number>;
  minHeight?: ResponsiveValue<string | number>;
  
  // Background and borders
  background?: string;
  border?: boolean | string;
  borderRadius?: string | number;
  shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  
  // Component reference
  component?: string;
  componentProps?: Record<string, any>;
  
  // Custom className (can include Tailwind classes)
  className?: string;
  
  // API action for buttons and interactive components
  apiAction?: ApiActionConfig;
  
  // Additional props
  [key: string]: any;
}

/**
 * Component node for rendering custom components
 */
export interface ComponentLayoutNode extends LayoutNode {
  type: 'component';
  component: string;
  props: LayoutProps & {
    component: string;
    componentProps?: Record<string, any>;
  };
}

/**
 * Layout configuration (JSON schema)
 */
export type LayoutConfig = LayoutNode;

/**
 * Registry entry for layout components
 */
export interface LayoutRegistryEntry {
  component: React.ComponentType<any>;
  defaultProps?: Partial<LayoutProps>;
}

/**
 * Registry entry for widget components
 */
export interface WidgetRegistryEntry {
  component: React.ComponentType<any>;
  defaultProps?: Record<string, any>;
}

/**
 * Data Source Configuration for sections
 */
export interface DataSourceConfig {
  api?: ApiActionConfig;
  polling?: {
    interval: number; // milliseconds
    enabled?: boolean | ((context: LayoutContext) => boolean);
  };
  refreshOn?: string[]; // Context keys to watch for changes
}

/**
 * Page-level onLoad configuration
 */
export interface OnLoadConfig {
  /**
   * Array of API calls to execute on page load
   */
  apis: OnLoadApiCall[];
  
  /**
   * Execution strategy: 'parallel' (default) or 'sequential'
   */
  strategy?: 'parallel' | 'sequential';
  
  /**
   * Global loading state key in context
   */
  loadingState?: string;
  
  /**
   * Global error state key in context
   */
  errorState?: string;
  
  /**
   * Callback after all APIs complete (success or failure)
   */
  onComplete?: (results: OnLoadResult[], context: LayoutContext) => void | Promise<void>;
  
  /**
   * Callback when all APIs succeed
   */
  onAllSuccess?: (results: OnLoadResult[], context: LayoutContext) => void | Promise<void>;
  
  /**
   * Callback when any API fails
   */
  onAnyError?: (errors: OnLoadError[], context: LayoutContext) => void | Promise<void>;
}

/**
 * Individual API call in onLoad configuration
 */
export interface OnLoadApiCall extends ApiActionConfig {
  /**
   * Unique identifier for this API call
   */
  id: string;
  
  /**
   * Dependencies: IDs of other API calls that must complete first
   * Only used when strategy is 'sequential'
   */
  dependsOn?: string[];
  
  /**
   * Whether this API call is required (fails entire onLoad if it fails)
   */
  required?: boolean;
  
  /**
   * Retry configuration
   */
  retry?: {
    attempts: number;
    delay?: number; // milliseconds between retries
  };
}

/**
 * Result of an onLoad API call
 */
export interface OnLoadResult {
  id: string;
  success: boolean;
  data?: any;
  error?: any;
  status?: number;
}

/**
 * Error from an onLoad API call
 */
export interface OnLoadError {
  id: string;
  error: any;
  status?: number;
}

/**
 * Context for layout rendering
 */
export interface LayoutContext {
  [key: string]: any;
}

