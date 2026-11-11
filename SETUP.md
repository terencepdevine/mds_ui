# Setup Guide for @mds/ui

## ✅ Initial Setup Complete

The library structure has been created and successfully builds. Here's what's been set up:

### 📁 Directory Structure

```
mds/
├── src/
│   ├── components/
│   │   └── Button/          ✅ Example component (Button)
│   ├── styles/
│   │   ├── tokens/          📝 Ready for Figma variables
│   │   └── index.scss
│   ├── utils/
│   │   └── cn.ts            ✅ Classname utility
│   └── index.ts
├── package.json             ✅
├── tsconfig.json            ✅
├── vite.config.ts           ✅
└── README.md                ✅
```

## Next Steps

### 1. Initialize Git Repository

```bash
cd /c/Users/tdev3/Development/mds
git init
git add .
git commit -m "Initial commit: MDS (Mod Design System) component library setup"
```

### 2. Create GitHub Repository

Create a new repository on GitHub, then:

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### 3. Populate Design Tokens from Figma

Once your Figma variables are ready, update these files:

- `src/styles/tokens/_colors.scss` - Color variables
- `src/styles/tokens/_spacing.scss` - Spacing scale
- `src/styles/tokens/_typography.scss` - Font definitions
- `src/styles/tokens/_shadows.scss` - Shadow values

**Example format:**
```scss
// _colors.scss
:root {
  --color-primary-500: #0ea5e9;
  --color-secondary-500: #a855f7;
  // ... more colors
}
```

### 4. Test Locally in Client Applications

To use the library locally during development:

```bash
# In mds directory
npm link

# In your client app directory
npm link @mds/ui
```

**Then in your client app:**
```tsx
import { Button } from '@mds/ui';
import '@mds/ui/styles';

function MyComponent() {
  return <Button variant="primary">Click me</Button>;
}
```

### 5. Publish to npm (when ready)

**Option A: Public npm registry**
```bash
npm publish --access public
```

**Option B: GitHub Packages (private)**

Add to `package.json`:
```json
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
}
```

Then:
```bash
npm publish
```

### 6. Add More Components

Follow the Button component pattern:

```bash
# Create component directory
mkdir -p src/components/Input

# Create files
touch src/components/Input/Input.tsx
touch src/components/Input/Input.scss
touch src/components/Input/Input.types.ts
touch src/components/Input/index.ts
```

**Component structure:**
- `ComponentName.tsx` - React component with forwardRef
- `ComponentName.scss` - BEM-style SCSS using CSS variables
- `ComponentName.types.ts` - TypeScript interfaces
- `index.ts` - Public exports

### 7. Optional: Add Storybook

For component development and documentation:

```bash
npx storybook@latest init
```

## Development Workflow

```bash
# Install dependencies
npm install

# Build library
npm run build

# Type check
npm run typecheck

# Lint code
npm run lint
```

## Integration with Client Applications

### Install in your client app:

```bash
# From npm (after publishing)
npm install @mds/ui

# Or use local link for development
npm link @mds/ui
```

### Import components:

```tsx
import { Button } from '@mds/ui';
import '@mds/ui/styles';
```

### Override theme variables in your global CSS:

```css
/* your-app/src/index.scss */
:root {
  --color-primary: #your-brand-color;
  --spacing-4: 16px;
  /* Override any design tokens */
}
```

## Build Output

The library builds to:
- `dist/index.js` - ESM bundle
- `dist/index.cjs` - CommonJS bundle
- `dist/index.d.ts` - TypeScript definitions
- `dist/style.css` - Compiled styles

## Current Components

- ✅ **Button** - Variants: primary, secondary, ghost, danger | Sizes: sm, md, lg

## TODO

- [ ] Populate design tokens from Figma
- [ ] Add Input component
- [ ] Add Modal component
- [ ] Add more primitive components
- [ ] Set up Storybook (optional)
- [ ] Publish to npm registry
- [ ] Integrate with client applications
