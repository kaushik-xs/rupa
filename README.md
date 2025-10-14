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
npm install rupa-ui
```

## Quick Start

### React Usage

```tsx
import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent } from 'rupa-ui';

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
import { DOMRenderer, RendererFactory } from 'rupa-ui';

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
import { Button } from 'rupa-ui';

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
import { Input } from 'rupa-ui';

<Input placeholder="Enter text..." />
<Input size="sm" placeholder="Small input" />
<Input error placeholder="Error state" />
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'rupa-ui';

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
import { Modal, Button } from 'rupa-ui';

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
import { Alert, AlertTitle, AlertDescription } from 'rupa-ui';

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
import { Badge } from 'rupa-ui';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Success</Badge>
```

## Rendering Engine

Rupa includes a flexible rendering engine that supports multiple targets:

### DOM Renderer

```typescript
import { DOMRenderer, RendererFactory } from 'rupa-ui';

const renderer = RendererFactory.create('dom');
const element = renderer.render(component, { target: 'dom' });
renderer.mount(element, '#app');
```

### React Renderer

```typescript
import { ReactRenderer, RendererFactory } from 'rupa-ui';

const renderer = RendererFactory.create('react');
const element = renderer.render(component, { target: 'react' });
```

## Theming

Customize the appearance with the built-in theme system:

```typescript
import { createTheme } from 'rupa-ui';

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
