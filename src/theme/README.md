# Theme System

A complete theme system with dark and light modes, localStorage persistence, and React Context integration.

## Features

- 🎨 **Predefined Light & Dark Themes** - Professional color schemes for both modes
- 💾 **localStorage Persistence** - Theme preference saved across visits
- 🔄 **Easy Theme Switching** - Toggle between themes with a single function
- 🎯 **Type-Safe** - Full TypeScript support
- 🪝 **Custom Hook** - Simple `useThemeContext()` hook for accessing theme
- ⚛️ **React Context** - Global theme state management

## Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from "./theme";

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Use theme in components

```tsx
import { useThemeContext } from "./theme";

function MyComponent() {
  const { theme, toggleTheme, isDark } = useThemeContext();

  return (
    <div style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <h1>Current mode: {isDark ? "Dark" : "Light"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

## API Reference

### useThemeContext()

Returns an object with:

- `theme` - Current theme object with colors
- `mode` - Current theme mode ("light" | "dark")
- `toggleTheme()` - Function to toggle between themes
- `setTheme(mode)` - Function to set a specific theme
- `isDark` - Boolean indicating if current theme is dark

### Theme Colors

Both light and dark themes include:

- `primary` - Primary brand color
- `secondary` - Secondary brand color
- `background` - Main background color
- `surface` - Surface/card background color
- `text` - Primary text color
- `textSecondary` - Secondary text color
- `border` - Border color
- `error` - Error state color
- `success` - Success state color
- `warning` - Warning state color

## Components

### ThemeToggle

A pre-built component for toggling themes:

```tsx
import { ThemeToggle } from "./components/theme-toggle/theme-toggle";

<ThemeToggle showLabel={true} size="medium" />
```

Props:
- `showLabel` - Show label text next to icon (default: true)
- `size` - "small" | "medium" | "large" (default: "medium")

## localStorage

Theme preference is automatically saved to localStorage under the key `"app-theme"`.

The system also respects the user's system preference (`prefers-color-scheme`) when no saved preference exists.

## Examples

Check out:
- `src/App.tsx` - Full app example with theme integration
- `src/components/button/Button.tsx` - Component using theme colors
- `src/components/theme-toggle/` - Theme toggle component
