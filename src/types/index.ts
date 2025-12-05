export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    muted: string;
    accent: string;
    destructive: string;
    border: string;
    input: string;
    ring: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
  };
}

export interface RendererConfig {
  target: 'dom' | 'react' | 'vue' | 'svelte';
  theme?: Partial<Theme>;
  prefix?: string;
  context?: Record<string, any>;
}

export interface Renderer {
  render(component: ComponentNode, config: RendererConfig): any;
  mount(element: any, container: HTMLElement | string): void;
  unmount(element: any): void;
}

export interface ComponentNode {
  type: string;
  props: ComponentProps;
  children?: ComponentNode[];
}

export type ComponentVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ComponentSize = 'sm' | 'md' | 'lg';

// Layout types
// Export all layout types except LayoutContext (exported from layout-renderer with extensions)
export type {
  Breakpoint,
  ResponsiveValue,
  SpacingValue,
  LayoutNode,
  LayoutProps,
  ComponentLayoutNode,
  LayoutConfig,
  LayoutRegistryEntry,
  WidgetRegistryEntry,
  DataSourceConfig,
  OnLoadConfig,
  OnLoadApiCall,
  OnLoadResult,
  OnLoadError,
} from './layout';
