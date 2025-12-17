import { useCallback, useEffect, useState } from "react";
import type { Theme, ThemeMode } from "./theme";
import { themes } from "./theme";

const THEME_STORAGE_KEY = "app-theme";

/**
 * Get the system's preferred color scheme
 */
function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Get the stored theme from localStorage or fall back to system preference
 */
function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch (error) {
    console.warn("Failed to read theme from localStorage:", error);
  }

  return getSystemTheme();
}

/**
 * Save theme to localStorage
 */
function saveTheme(mode: ThemeMode): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch (error) {
    console.warn("Failed to save theme to localStorage:", error);
  }
}

export interface UseThemeReturn {
  /** Current theme object */
  theme: Theme;
  /** Current theme mode */
  mode: ThemeMode;
  /** Toggle between light and dark themes */
  toggleTheme: () => void;
  /** Set a specific theme mode */
  setTheme: (mode: ThemeMode) => void;
  /** Check if current theme is dark */
  isDark: boolean;
}

/**
 * Hook to manage theme state with localStorage persistence
 *
 * @example
 * ```tsx
 * function App() {
 *   const { theme, mode, toggleTheme, isDark } = useTheme();
 *
 *   return (
 *     <div style={{ backgroundColor: theme.colors.background }}>
 *       <button onClick={toggleTheme}>
 *         Switch to {isDark ? 'light' : 'dark'} mode
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useTheme(): UseThemeReturn {
  const [mode, setMode] = useState<ThemeMode>(getStoredTheme);

  const theme = themes[mode];

  const setTheme = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
    saveTheme(newMode);
  }, []);

  const toggleTheme = useCallback(() => {
    const newMode = mode === "light" ? "dark" : "light";
    setTheme(newMode);
  }, [mode, setTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (!stored) {
        setMode(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return {
    theme,
    mode,
    toggleTheme,
    setTheme,
    isDark: mode === "dark",
  };
}
