# Rupa UI Library

Rūpa (रूप) — form, shape, appearance.
→ Minimal, elegant, and perfectly aligned with UI and rendering.

A modern, flexible UI library with a powerful rendering engine and Tailwind CSS integration.

## Features

- 🎨 **Modern Design System** - Built with Tailwind CSS and customizable themes
- 🔧 **Flexible Rendering Engine** - Support for DOM, React, Vue, and Svelte
- 📦 **Comprehensive Components** - Button, Input, Card, Modal, Alert, Badge, and more
- 🎯 **TypeScript First** - Full TypeScript support with excellent developer experience
- 🚀 **Tree Shakeable** - Optimized bundle size with tree shaking support
- 🎨 **Customizable** - Easy theming and component customization

## Installation

```bash
npm install @kaushik91/rupa
```

For use with [json-render](https://github.com/kaushiksundar/json-render), also install:

```bash
npm install @json-render/core @json-render/react zod
```

## Quick Start

### React Usage

```tsx
import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent } from '@kaushik91/rupa';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Rupa</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

### DOM Usage

```typescript
import { DOMRenderer, RendererFactory } from '@kaushik91/rupa';

const renderer = RendererFactory.create('dom');
const component = {
  type: 'button',
  props: { className: 'rupa-button', children: 'Click me' }
};

const element = renderer.render(component, { target: 'dom' });
renderer.mount(element, '#app');
```

## Components

### Button

```tsx
import { Button } from '@kaushik91/rupa';

// Variants
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Input

```tsx
import { Input } from '@kaushik91/rupa';

<Input placeholder="Enter text..." />
<Input size="sm" placeholder="Small input" />
<Input error placeholder="Error state" />
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@kaushik91/rupa';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Modal

```tsx
import { Modal, Button } from '@kaushik91/rupa';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        size="md"
      >
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from '@kaushik91/rupa';

<Alert>
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an informational alert.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Operation completed successfully.</AlertDescription>
</Alert>
```

### Badge

```tsx
import { Badge } from '@kaushik91/rupa';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Success</Badge>
```

## Rendering Engine

Rupa includes a flexible rendering engine that supports multiple targets:

### DOM Renderer

```typescript
import { DOMRenderer, RendererFactory } from '@kaushik91/rupa';

const renderer = RendererFactory.create('dom');
const element = renderer.render(component, { target: 'dom' });
renderer.mount(element, '#app');
```

### React Renderer

```typescript
import { ReactRenderer, RendererFactory } from '@kaushik91/rupa';

const renderer = RendererFactory.create('react');
const element = renderer.render(component, { target: 'react' });
```

## Example usage with json-render

Rupa is built to work with [json-render](https://json-render.dev/docs) for **generative UI**: AI-generated interfaces that render with your components. You export **definitions** (for the catalog) and **implementations** (for the registry); your app wires them with `defineCatalog` and `defineRegistry`.

### 1. Install dependencies

```bash
npm install @kaushik91/rupa @json-render/core @json-render/react zod
```

### 2. Create the catalog

Use Rupa’s component definitions with the json-render schema so the AI (and validator) know which components exist and their props.

```tsx
// lib/catalog.ts
import { defineCatalog } from '@json-render/core';
import { schema } from '@json-render/react/schema';
import { rupaComponentDefinitions } from '@kaushik91/rupa';

export const catalog = defineCatalog(schema, {
  components: {
    ...rupaComponentDefinitions,
  },
  actions: {},
});
```

**Pick only the components you need:**

```tsx
export const catalog = defineCatalog(schema, {
  components: {
    Card: rupaComponentDefinitions.Card,
    CardHeader: rupaComponentDefinitions.CardHeader,
    CardTitle: rupaComponentDefinitions.CardTitle,
    CardContent: rupaComponentDefinitions.CardContent,
    Stack: rupaComponentDefinitions.Stack,
    Button: rupaComponentDefinitions.Button,
    Input: rupaComponentDefinitions.Input,
  },
  actions: {},
});
```

### 3. Create the registry

Map catalog component names to Rupa’s React implementations.

```tsx
// lib/registry.tsx
import { defineRegistry } from '@json-render/react';
import { rupaComponents } from '@kaushik91/rupa';
import { catalog } from './catalog';

export const { registry, handlers, executeAction } = defineRegistry(catalog, {
  components: {
    ...rupaComponents,
  },
  actions: {},
});
```

**Pick only the components you need:**

```tsx
export const { registry } = defineRegistry(catalog, {
  components: {
    Card: rupaComponents.Card,
    CardHeader: rupaComponents.CardHeader,
    CardTitle: rupaComponents.CardTitle,
    CardContent: rupaComponents.CardContent,
    Stack: rupaComponents.Stack,
    Button: rupaComponents.Button,
    Input: rupaComponents.Input,
  },
  actions: {},
});
```

### 4. Render in your app

Use the json-render `Renderer` with your registry. Wrap with the providers required by your json-render version (e.g. `StateProvider`, `VisibilityProvider`, `ActionProvider`).

```tsx
// app/page.tsx
'use client';

import { Renderer, StateProvider, VisibilityProvider } from '@json-render/react';
import { registry } from '@/lib/registry';

// Example spec (shape depends on your json-render version)
const spec = {
  root: 'card-1',
  elements: {
    'card-1': {
      key: 'card-1',
      type: 'Card',
      props: { className: 'shadow-lg' },
      children: ['card-header-1', 'card-content-1'],
    },
    'card-header-1': {
      key: 'card-header-1',
      type: 'CardHeader',
      props: {},
      children: ['card-title-1'],
    },
    'card-title-1': {
      key: 'card-title-1',
      type: 'CardTitle',
      props: { children: 'Welcome' },
    },
    'card-content-1': {
      key: 'card-content-1',
      type: 'CardContent',
      props: {},
      children: ['btn-1'],
    },
    'btn-1': {
      key: 'btn-1',
      type: 'Button',
      props: { label: 'Get started' },
    },
  },
};

export default function Page() {
  return (
    <StateProvider initialState={{}}>
      <VisibilityProvider>
        <Renderer spec={spec} registry={registry} />
      </VisibilityProvider>
    </StateProvider>
  );
}
```

Check the [json-render docs](https://json-render.dev/docs) for the exact spec shape and provider setup in your version.

### 5. Mix Rupa with other libraries

You can combine Rupa with other json-render-compatible libraries (e.g. shadcn) in one catalog and registry.

```tsx
import { defineCatalog } from '@json-render/core';
import { schema } from '@json-render/react/schema';
import { rupaComponentDefinitions } from '@kaushik91/rupa';
import { shadcnComponentDefinitions } from '@json-render/shadcn/catalog';

const catalog = defineCatalog(schema, {
  components: {
    Card: rupaComponentDefinitions.Card,
    Stack: rupaComponentDefinitions.Stack,
    Button: rupaComponentDefinitions.Button,
    Input: rupaComponentDefinitions.Input,
    Heading: shadcnComponentDefinitions.Heading,
  },
  actions: {},
});
```

```tsx
import { defineRegistry } from '@json-render/react';
import { rupaComponents } from '@kaushik91/rupa';
import { shadcnComponents } from '@json-render/shadcn';
import { catalog } from './catalog';

export const { registry } = defineRegistry(catalog, {
  components: {
    Card: rupaComponents.Card,
    Stack: rupaComponents.Stack,
    Button: rupaComponents.Button,
    Input: rupaComponents.Input,
    Heading: shadcnComponents.Heading,
  },
  actions: {},
});
```

### What Rupa exports for json-render

| Export | Purpose |
|--------|--------|
| **`rupaComponentDefinitions`** | Object of catalog entries: `props` (Zod schema), optional `slots: ['default']`, and AI-friendly `description`. Use with `defineCatalog(schema, { components: rupaComponentDefinitions, actions: {} })`. |
| **`rupaComponents`** | Object of React components that accept `{ props, children?, emit }`. Use with `defineRegistry(catalog, { components: rupaComponents, actions: {} })`. |

Definitions and components are provided for layout primitives (Box, Stack, Flex, Grid, Container, Spacer), buttons, cards, forms, feedback (Alert, Badge, Spinner, Progress), data (Table, Tabs, Accordion), overlays (Modal, Dialog, Tooltip), charts (LineChart, BarChart, PieChart, AreaChart), and layout components (SidebarLayout, HeaderFooterLayout, SplitPane, TabsLayout, AccordionLayout, AutoGridLayout, MasonryLayout, ResponsiveDashboard, CardLayout, SectionLayout, StepperLayout, WizardLayout, PanelLayout, ModalLayout, DragDropLayout). Use the catalog’s `description` fields to build AI context for generative UI.

## Theming

Customize the appearance with the built-in theme system:

```typescript
import { createTheme } from '@kaushik91/rupa';

const customTheme = createTheme({
  colors: {
    primary: '#your-color',
    secondary: '#your-secondary-color',
  },
  spacing: {
    md: '1.5rem',
  },
});
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Build CSS
npm run build:css
```

## License

MIT
