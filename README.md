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

## Component definitions and Rupa components (json-render)

Rupa ships two artifacts for use with [json-render](https://github.com/kaushiksundar/json-render):

- **`rupaComponentDefinitions`** — Zod-based **definitions** (props schema, slots, description) for each component. Used with `defineCatalog` from `@json-render/core` so the renderer knows how to validate and describe components.
- **`rupaComponents`** — **React implementations** for those components. Each receives `{ props, children?, emit }` from the json-render runtime. Used with `defineRegistry` from `@json-render/react` to map component names to actual React components.

### Definitions (`rupaComponentDefinitions`)

Defined in `rupa-component-definitions.ts`. Each entry has:

- **`props`** — A Zod schema for the component’s props (e.g. `label`, `variant`, `className`).
- **`slots`** — Optional list of slot names (e.g. `['default']`) for children.
- **`description`** — Short description for tooling or AI.

Included definitions cover layout (Box, Stack, Flex, Grid, Container, Spacer), buttons (Button, ButtonGroup), cards (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter), forms (Input, Label, Textarea, Checkbox, Switch, Slider, Select, RadioGroup), feedback (Badge, Alert, Spinner, Skeleton, Progress), data (Table, Tabs, Accordion), overlays (Modal, Dialog, Tooltip), charts (LineChart, BarChart, PieChart, AreaChart), and layouts (SidebarLayout, HeaderFooterLayout, SplitPane, TabsLayout, AccordionLayout, AutoGridLayout, MasonryLayout, ResponsiveDashboard, CardLayout, SectionLayout, StepperLayout, WizardLayout, PanelLayout, ModalLayout, DragDropLayout).

### Rupa components (`rupaComponents`)

Defined in `rupa-components.tsx`. These are React components that accept the context shape `{ props, children?, emit }` and render the corresponding Rupa UI component. Use them with `defineRegistry` so json-render can render by component name.

### Using Rupa with json-render

1. **Create a catalog** with the json-render schema and Rupa’s definitions:

```tsx
import { defineCatalog } from '@json-render/core';
import { schema } from '@json-render/react/schema';
import { rupaComponentDefinitions } from '@kaushik91/rupa';

const catalog = defineCatalog(schema, {
  components: {
    ...rupaComponentDefinitions,
    // Or pick only what you need: Card: rupaComponentDefinitions.Card, Button: rupaComponentDefinitions.Button, ...
  },
  actions: {},
});
```

2. **Create a registry** with that catalog and Rupa’s components:

```tsx
import { defineRegistry } from '@json-render/react';
import { rupaComponents } from '@kaushik91/rupa';
import { catalog } from './catalog';

const { registry } = defineRegistry(catalog, {
  components: {
    ...rupaComponents,
    // Or pick: Card: rupaComponents.Card, Button: rupaComponents.Button, ...
  },
  actions: {},
});
```

3. **Render** your JSON config with the json-render `Renderer`:

```tsx
import { Renderer } from '@json-render/react';
import { registry } from './registry';

const config = {
  type: 'Card',
  props: { className: 'shadow-lg' },
  children: [
    {
      type: 'CardHeader',
      props: {},
      children: [{ type: 'CardTitle', props: { children: 'Hello' } }],
    },
    {
      type: 'CardContent',
      props: {},
      children: [{ type: 'Button', props: { label: 'Submit' } }],
    },
  ],
};

function App() {
  return <Renderer registry={registry} config={config} />;
}
```

You can use Rupa components directly in React (see Quick Start and Components above) or drive them from JSON via json-render using this catalog and registry.

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
