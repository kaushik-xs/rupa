import { ResponsiveValue, SpacingValue } from '../types/layout';

/**
 * Convert spacing value to Tailwind class
 * Supports numeric values (maps to Tailwind spacing scale) or string values
 */
export function spacingToClass(prefix: string, value: SpacingValue | undefined): string {
  if (value === undefined) return '';
  
  if (typeof value === 'number') {
    // Map to Tailwind spacing scale
    return `${prefix}-${value}`;
  }
  
  // If it's already a Tailwind class or custom value, use arbitrary value syntax
  if (typeof value === 'string') {
    // Check if it's already a Tailwind class
    if (value.match(/^-?\d+$/)) {
      return `${prefix}-${value}`;
    }
    // Use arbitrary value for custom spacing
    return `${prefix}-[${value}]`;
  }
  
  return '';
}

/**
 * Convert responsive spacing value to Tailwind classes
 */
export function responsiveSpacingToClass(
  prefix: string,
  value: ResponsiveValue<SpacingValue> | undefined
): string {
  if (value === undefined) return '';
  
  if (typeof value === 'object' && value !== null) {
    const classes: string[] = [];
    
    if (value.default !== undefined) {
      classes.push(spacingToClass(prefix, value.default));
    }
    if (value.sm !== undefined) {
      classes.push(`sm:${spacingToClass(prefix, value.sm)}`);
    }
    if (value.md !== undefined) {
      classes.push(`md:${spacingToClass(prefix, value.md)}`);
    }
    if (value.lg !== undefined) {
      classes.push(`lg:${spacingToClass(prefix, value.lg)}`);
    }
    if (value.xl !== undefined) {
      classes.push(`xl:${spacingToClass(prefix, value.xl)}`);
    }
    if (value['2xl'] !== undefined) {
      classes.push(`2xl:${spacingToClass(prefix, value['2xl'])}`);
    }
    
    return classes.filter(Boolean).join(' ');
  }
  
  return spacingToClass(prefix, value as SpacingValue);
}

/**
 * Convert flex direction to Tailwind class
 */
export function directionToClass(direction?: string): string {
  switch (direction) {
    case 'row':
      return 'flex-row';
    case 'column':
      return 'flex-col';
    case 'row-reverse':
      return 'flex-row-reverse';
    case 'column-reverse':
      return 'flex-col-reverse';
    default:
      return '';
  }
}

/**
 * Convert align items to Tailwind class
 */
export function alignToClass(align?: string): string {
  switch (align) {
    case 'start':
      return 'items-start';
    case 'end':
      return 'items-end';
    case 'center':
      return 'items-center';
    case 'stretch':
      return 'items-stretch';
    case 'baseline':
      return 'items-baseline';
    default:
      return '';
  }
}

/**
 * Convert justify content to Tailwind class
 */
export function justifyToClass(justify?: string): string {
  switch (justify) {
    case 'start':
      return 'justify-start';
    case 'end':
      return 'justify-end';
    case 'center':
      return 'justify-center';
    case 'between':
      return 'justify-between';
    case 'around':
      return 'justify-around';
    case 'evenly':
      return 'justify-evenly';
    default:
      return '';
  }
}

/**
 * Convert wrap to Tailwind class
 */
export function wrapToClass(wrap?: boolean | string): string {
  if (wrap === true || wrap === 'wrap') {
    return 'flex-wrap';
  }
  if (wrap === 'nowrap') {
    return 'flex-nowrap';
  }
  if (wrap === 'wrap-reverse') {
    return 'flex-wrap-reverse';
  }
  return '';
}

/**
 * Convert grid columns to Tailwind class
 */
export function columnsToClass(columns?: ResponsiveValue<number | string>): string {
  if (columns === undefined) return '';
  
  if (typeof columns === 'object' && columns !== null) {
    const classes: string[] = [];
    
    if (columns.default !== undefined) {
      classes.push(`grid-cols-${columns.default}`);
    }
    if (columns.sm !== undefined) {
      classes.push(`sm:grid-cols-${columns.sm}`);
    }
    if (columns.md !== undefined) {
      classes.push(`md:grid-cols-${columns.md}`);
    }
    if (columns.lg !== undefined) {
      classes.push(`lg:grid-cols-${columns.lg}`);
    }
    if (columns.xl !== undefined) {
      classes.push(`xl:grid-cols-${columns.xl}`);
    }
    if (columns['2xl'] !== undefined) {
      classes.push(`2xl:grid-cols-${columns['2xl']}`);
    }
    
    return classes.filter(Boolean).join(' ');
  }
  
  return `grid-cols-${columns}`;
}

/**
 * Convert shadow to Tailwind class
 */
export function shadowToClass(shadow?: boolean | string): string {
  if (shadow === false || shadow === 'none') {
    return '';
  }
  if (shadow === true) {
    return 'shadow';
  }
  if (typeof shadow === 'string') {
    return `shadow-${shadow}`;
  }
  return '';
}

