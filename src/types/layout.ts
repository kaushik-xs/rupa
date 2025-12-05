import * as React from 'react';
import { ComponentNode, ComponentProps } from './index';

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

