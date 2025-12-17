# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React component design system built with:
- **React 19** with TypeScript
- **Vite** (using rolldown-vite 7.1.14 for faster builds)
- **Storybook 9** for component development and documentation
- **Biome** for linting and formatting (NOT ESLint)
- **Tailwind CSS 4** with the Vite plugin
- **Vitest 4** with Playwright for component testing

## Development Commands

```bash
# Start Vite dev server
npm run dev

# Build the project (TypeScript compilation + Vite build)
npm run build

# Format code with Biome
npm run lint

# Start Storybook on port 6006
npm run storybook

# Build Storybook for production
npm run build-storybook

# Run Vitest tests (configured to run Storybook tests)
npx vitest

# Preview production build
npm run preview
```

## Code Quality Standards

### Biome Configuration
This project uses **Biome** (not ESLint) with strict rules configured in `biome.json`:

**Formatting:**
- 2-space indentation
- 100 character line width
- Double quotes for JS/TS/JSX
- Semicolons required
- ES5 trailing commas

**File Naming:**
- Use kebab-case for filenames (enforced by Biome)
- ASCII characters only

**Naming Conventions:**
- Functions: camelCase or PascalCase (React components)
- Variables: camelCase, PascalCase, or CONSTANT_CASE
- Types/Interfaces: PascalCase

**Key Linting Rules:**
- No `any` types (enforced as error)
- No unused variables
- No console statements (warning)
- Strict triple equals (`===`) required
- Exhaustive React hook dependencies
- Comprehensive accessibility (a11y) rules enabled
- Security rules enabled (no dangerouslySetInnerHTML)

**Test File Overrides:**
- `*.test.{js,ts,tsx}` and `*.spec.{js,ts,tsx}` files allow `any` and `console`
- Config files (`*.config.{js,ts}`) allow default exports and `any`

## Architecture

### Component Structure
Components follow this organizational pattern:
```
src/components/{component-name}/
  ├── {ComponentName}.tsx          # Main component
  ├── {component-name}.css         # Styles
  └── stories/
      └── {ComponentName}.stories.ts  # Storybook stories
```

Example: `src/components/button/Button.tsx` with `src/components/button/stories/Button.stories.ts`

### Page Components
Page-level components are organized in:
```
src/pages/
  ├── Page.tsx
  ├── page.css
  └── stories/
      └── Page.stories.ts
```

### Storybook Configuration
- **Stories location:** All `**/*.stories.@(js|jsx|mjs|ts|tsx)` and `**/*.mdx` files in `src/`
- **Addons enabled:**
  - `@chromatic-com/storybook` - Visual regression testing
  - `@storybook/addon-docs` - Auto-generated documentation
  - `@storybook/addon-a11y` - Accessibility testing (set to "todo" mode)
  - `@storybook/addon-vitest` - Component testing integration
- **Framework:** `@storybook/react-vite`

### Testing Setup
Tests are configured through Vitest + Storybook integration in `vite.config.ts`:
- Browser testing with Playwright (Chromium)
- Storybook stories are automatically converted to tests
- Headless browser mode enabled for CI
- Setup file: `.storybook/vitest.setup.ts`

To write component tests, create stories and they will be automatically tested.

### TypeScript Configuration
- **Target:** ES2022
- **JSX:** react-jsx (automatic runtime)
- **Module resolution:** bundler mode
- **Strict mode enabled** with additional checks:
  - noUnusedLocals
  - noUnusedParameters
  - noFallthroughCasesInSwitch
  - noUncheckedSideEffectImports
- **Type checking:** `tsc -b` (project references to `tsconfig.app.json` and `tsconfig.node.json`)

## Important Notes

### Vite/Rolldown
This project uses `rolldown-vite` (aliased as `vite`), a faster Vite implementation using Rolldown (Rust-based bundler). The `@vitejs/plugin-react` uses oxc for Fast Refresh when running with rolldown-vite.

### Component Props
Always document component props with JSDoc comments:
```typescript
export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
}
```

### Accessibility
The project has comprehensive a11y rules enabled:
- All interactive elements must be keyboard accessible
- No positive tabindex values
- Images need alt text
- ARIA attributes must be valid
- Semantic HTML elements preferred
- Storybook a11y addon runs checks in "todo" mode

### Styling
Components use a mix of:
- Component-level CSS files (`.css` imports)
- Tailwind CSS 4 utility classes
- Inline styles for dynamic values (e.g., backgroundColor props)

When creating new components, co-locate styles in a `{component-name}.css` file.
