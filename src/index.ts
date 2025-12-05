// Core exports
export * from './types';
export * from './core/theme';
export * from './core/renderer';
export * from './core/layout-renderer';
export * from './core/registry';
// Import register-layouts to auto-register all layouts
import './core/register-layouts';
export * from './core/register-layouts';
export * from './utils/cn';
export * from './utils/tailwind';

// Component exports
export * from './components';

// Re-export React for convenience
export { default as React } from 'react';
