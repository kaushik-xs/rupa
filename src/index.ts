// Types
export * from './types';

// Theme
export * from './core/theme';

// For use with defineCatalog(schema, { components: rupaComponentDefinitions, actions: {} })
// and defineRegistry(catalog, { components: rupaComponents }) in your app
export { rupaComponentDefinitions } from './rupa-component-definitions';
export { rupaComponents } from './rupa-components';

// Legacy renderer (DOM / React tree shape)
export * from './core/renderer';

// Utils
export * from './utils/cn';
export * from './utils/tailwind';
export * from './utils/api';
export * from './utils/api-registry';
export * from './core/api-config';

// All UI components (for direct use or with json-render registry)
export * from './components';

export { default as React } from 'react';
