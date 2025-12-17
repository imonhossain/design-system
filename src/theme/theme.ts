export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
  };
}

export const lightTheme: Theme = {
  mode: "light",
  colors: {
    primary: "#555ab9",
    secondary: "#6366f1",
    background: "#ffffff",
    surface: "#f5f5f5",
    text: "#333333",
    textSecondary: "#666666",
    border: "#e0e0e0",
    error: "#ef4444",
    success: "#10b981",
    warning: "#f59e0b",
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    primary: "#818cf8",
    secondary: "#a78bfa",
    background: "#1a1a1a",
    surface: "#2d2d2d",
    text: "#f5f5f5",
    textSecondary: "#a0a0a0",
    border: "#404040",
    error: "#f87171",
    success: "#34d399",
    warning: "#fbbf24",
  },
};

export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
