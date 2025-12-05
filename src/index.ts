// Core exports
export * from './types';
export * from './core/theme';
export * from './core/renderer';
export * from './core/layout-renderer';
export * from './core/registry';
// Import register-layouts to auto-register all layouts
import './core/register-layouts';
export * from './core/register-layouts';
// Import register-components to auto-register all components
import './core/register-components';
export * from './core/register-components';
export * from './utils/cn';
export * from './utils/tailwind';
export * from './utils/api';
export * from './utils/api-registry';
export * from './core/api-config';

// Component exports
export * from './components';

// Re-export React for convenience
export { default as React } from 'react';
