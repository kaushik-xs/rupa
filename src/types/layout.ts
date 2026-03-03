import { ComponentProps } from './index';
import { ApiActionConfig } from '../utils/api';

/**
 * Tailwind breakpoint keys
 */
export type Breakpoint = 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Responsive value that can be a single value or breakpoint-specific values
 */
export type ResponsiveValue<T> =
  | T
  | {
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
 * Layout-specific props with Tailwind-friendly values.
 * Used by layout primitives (Box, Flex, Stack, Grid, etc.).
 */
export interface LayoutProps extends ComponentProps {
  gap?: ResponsiveValue<SpacingValue>;
  padding?: ResponsiveValue<SpacingValue>;
  paddingX?: ResponsiveValue<SpacingValue>;
  paddingY?: ResponsiveValue<SpacingValue>;
  margin?: ResponsiveValue<SpacingValue>;
  marginX?: ResponsiveValue<SpacingValue>;
  marginY?: ResponsiveValue<SpacingValue>;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse';
  columns?: ResponsiveValue<number | string>;
  rows?: ResponsiveValue<number | string>;
  autoFit?: boolean;
  autoFill?: boolean;
  width?: ResponsiveValue<string | number>;
  height?: ResponsiveValue<string | number>;
  maxWidth?: ResponsiveValue<string | number>;
  minWidth?: ResponsiveValue<string | number>;
  maxHeight?: ResponsiveValue<string | number>;
  minHeight?: ResponsiveValue<string | number>;
  background?: string;
  border?: boolean | string;
  borderRadius?: string | number;
  shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  component?: string;
  componentProps?: Record<string, any>;
  className?: string;
  apiAction?: ApiActionConfig;
  [key: string]: any;
}
