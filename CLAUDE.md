# MDS UI

React component library for the Mod Design System (MDS). The design source is the Figma file **MDS.Components.Web** (file key `feMlcOYj2Tp2NX7c477S6V`).

Stack: React 18, TypeScript, SCSS (BEM), Vite library mode, `clsx` via `cn()` in [src/utils/cn.ts](src/utils/cn.ts).

## Commands

- `npm run build` runs `tsc` and then `vite build`. Run it after every change; it must pass.
- `npm run typecheck` runs `tsc --noEmit`.
- `npx figma connect parse` checks the Code Connect files.
- `npx figma connect publish` publishes the mappings to Figma. Run it only when asked.

## Component structure

Each component has its own folder in `src/components/<Name>/`:

```
<Name>/
  <Name>.tsx         # component(s), React.forwardRef + displayName
  <Name>.types.ts    # props interfaces with JSDoc, including @default
  <Name>.scss        # BEM styles, imported by <Name>.tsx
  <Name>.figma.ts    # Figma Code Connect mapping (required)
  index.ts           # named exports of components and types
```

- Export each new component from [src/components/index.ts](src/components/index.ts) (`export * from './<Name>'`).
- Props extend the native HTML attributes of the root element and pass the rest through with `...props`.
- Merge `className` with `cn()`.
- Use named exports only, no default exports (except in `.figma.ts` files).
- Make components interactive and accessible: native `<button>` triggers, `aria-*` attributes, `:focus-visible` styles.
- Stateful components support both controlled use (`open` plus `onOpenChange`) and uncontrolled use (`defaultOpen`).

## Code Connect (`<Name>.figma.ts`)

Every component that maps to a Figma component needs one. Follow the format used in [Button.figma.ts](src/components/Button/Button.figma.ts) and [Accordion.figma.ts](src/components/Accordion/Accordion.figma.ts):

```ts
// url=https://www.figma.com/design/feMlcOYj2Tp2NX7c477S6V/MDS.Components.Web?node-id=<id>
// source=https://github.com/terencepdevine/mds_ui/blob/master/src/components/<Name>/<Name>.tsx
// component=<ComponentName>

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const flag = figma.selectedInstance.getBoolean("Show Icon")
const state = figma.selectedInstance.getEnum("State", { Active: true, Inactive: false })

export default {
  id: "<ComponentName>",
  imports: ['import { <ComponentName> } from "./<Name>"'],
  example: figma.code`<<ComponentName>${figma.helpers.react.renderProp("prop", flag)}>
      ${figma.helpers.react.renderChildren(label)}
    </<ComponentName>>`,
  metadata: { nestable: true },
}
```

- Point `url` at the **component or component set** node, not at a page or frame. Check with `get_metadata` or `get_context_for_code_connect`.
- Use Figma property names without their `#id` suffix (`"Headline"`, not `"Headline#94:2"`).
- Map Figma variants that only show a state (such as `State=Active`) to `default*` props, not controlled props.
- The types for the `figma` module come from [src/types/figma.d.ts](src/types/figma.d.ts), which references `@figma/code-connect/figma-types-no-require`. Don't exclude `*.figma.ts` from `tsconfig.json`; that hides the types in the editor. They are kept out of the published types by the `dts({ exclude })` setting in [vite.config.ts](vite.config.ts).

## Implementing designs from Figma

- Load the `figma-design-to-code` guidance before calling `get_design_context`.
- Figma's generated React and Tailwind code is only a reference. Convert it to SCSS with BEM and the conventions above. Never add Tailwind.
- Download every asset into `src/assets/` (icons go in `src/assets/icons/<kebab-name>.svg`) and import it. Never leave temporary `figma.com/api/mcp/asset` URLs in code. Don't edit downloaded SVGs.
- Replace the absolute positioning in generated code with flex or grid layout.

## Styling and tokens

- BEM class names: `.block`, `.block__element`, `.block--modifier`. Nest them with `&` in SCSS.
- Name tokens after the Figma variables, with `/` replaced by `-`. For example, `content/primary` becomes `--content-primary`. Define them in `src/styles/tokens/_*.scss`.
- Always give `var()` a fallback that matches the Figma value: `var(--content-primary, #161619)`.
- Don't define the Figma spacing tokens (`--spacing-*`) yet. Figma's `spacing/3` is 8px, but Button assumes `--spacing-3` is 12px. Until the token names are settled, write spacing as plain values with a comment, e.g. `8px; // Figma: spacing/3`.
- Note each Figma text style above its SCSS block (e.g. `// Heading/M`). The library does not load fonts (Rubik, Nunito Sans); the app using it must.

## Git

- Commit messages are a single short line, e.g. `Add Accordion component`. No body, and no `Co-Authored-By` or other Claude attribution.
- Never commit straight to `master`. Work on a `feature/<name>` branch and push it with `-u`.
- Commit or push only when asked.
- Code Connect `source=` links point to `master`, so they only work after the branch is merged.
