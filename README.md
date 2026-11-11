# @mds/ui

React component library for the Mod Design System (MDS).

## Features

- 🎨 **Design System First** - Built from Figma design tokens
- 🎯 **TypeScript** - Fully typed components and APIs
- 💅 **SCSS + CSS Variables** - Themeable with CSS custom properties
- 🏗️ **BEM Methodology** - Consistent, scalable styling architecture
- 📦 **Tree Shakeable** - Import only what you need
- ⚡ **Vite Powered** - Fast builds and development

## Installation

```bash
npm install @mds/ui
```

## Usage

### Basic Import

```tsx
import { Button } from '@mds/ui';
import '@mds/ui/styles';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

### Theming

The library uses CSS custom properties for theming. Override them in your global styles:

```css
:root {
  --color-primary: #0ea5e9;
  --color-secondary: #a855f7;
  --spacing-1: 4px;
  --spacing-2: 8px;
  --font-size-base: 16px;
  /* ... more tokens ... */
}
```

## Components

### Button

A flexible button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Primary Button
</Button>

<Button variant="secondary" size="lg" isLoading>
  Loading...
</Button>

<Button variant="ghost" size="sm" disabled>
  Disabled
</Button>
```

**Props:**
- `variant` - `'primary' | 'secondary' | 'ghost' | 'danger'` (default: `'primary'`)
- `size` - `'sm' | 'md' | 'lg'` (default: `'md'`)
- `isLoading` - `boolean` (default: `false`)
- `className` - `string` - Additional CSS classes
- All standard button HTML attributes

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

## Design Tokens

This library is designed to be populated with design tokens from your Figma design system. Update the following files with your design tokens:

- `src/styles/tokens/_colors.scss` - Color palette
- `src/styles/tokens/_spacing.scss` - Spacing scale
- `src/styles/tokens/_typography.scss` - Font sizes, weights, families
- `src/styles/tokens/_shadows.scss` - Shadow definitions

## Architecture

Inspired by [shadcn/ui](https://ui.shadcn.com), this library follows these principles:

- **Owned Components** - Published as an npm package, but designed for easy customization
- **Unstyled Primitives** - Minimal structural styling, maximum flexibility
- **Design System Integration** - Built to reflect your Figma variables
- **Type Safety** - Full TypeScript support throughout

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx         # Component implementation
│   │   ├── Button.scss        # Component styles (BEM)
│   │   ├── Button.types.ts    # TypeScript types
│   │   └── index.ts           # Public exports
│   └── index.ts
├── styles/
│   ├── tokens/                # Design tokens
│   │   ├── _colors.scss
│   │   ├── _spacing.scss
│   │   ├── _typography.scss
│   │   └── _shadows.scss
│   ├── _reset.scss            # CSS reset
│   └── index.scss             # Main styles entry
├── utils/
│   ├── cn.ts                  # Classname utility
│   └── index.ts
└── index.ts                   # Library entry point
```

## License

MIT
