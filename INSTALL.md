# Installation Guide

## Prerequisites

- Node.js 16+ 
- npm or yarn

## Quick Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the library:**
   ```bash
   npm run build
   ```

3. **View the demo:**
   Open `demo.html` in your browser to see the library in action.

## Development

1. **Start TypeScript compilation in watch mode:**
   ```bash
   npm run dev
   ```

2. **Start Tailwind CSS compilation in watch mode:**
   ```bash
   npm run dev:css
   ```

3. **Build everything:**
   ```bash
   npm run build
   ```

## Project Structure

```
rupa/
├── src/
│   ├── components/          # UI Components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Alert.tsx
│   │   ├── Badge.tsx
│   │   └── index.ts
│   ├── core/               # Core functionality
│   │   ├── theme.ts        # Theme system
│   │   └── renderer.ts     # Rendering engine
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── utils/              # Utility functions
│   │   └── cn.ts          # Class name utility
│   ├── styles/             # Tailwind CSS
│   │   └── input.css
│   ├── examples/           # Example components
│   │   ├── App.tsx
│   │   └── index.ts
│   └── index.ts            # Main export file
├── dist/                   # Build output
├── demo.html               # Demo page
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Using the Library

### In a React Project

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from 'rupa-ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### With the Rendering Engine

```typescript
import { DOMRenderer, RendererFactory } from 'rupa-ui';

const renderer = RendererFactory.create('dom');
const component = {
  type: 'button',
  props: { 
    className: 'rupa-button bg-primary text-primary-foreground',
    children: 'Click me' 
  }
};

const element = renderer.render(component, { target: 'dom' });
renderer.mount(element, '#app');
```

## Customization

### Custom Theme

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

### Custom Tailwind Configuration

Edit `tailwind.config.js` to customize the design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
}
```

## Publishing

To publish the library to npm:

```bash
npm run build
npm publish
```

The build process will:
1. Compile TypeScript to JavaScript
2. Generate type definitions
3. Build Tailwind CSS
4. Create a production-ready package
