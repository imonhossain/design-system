import { useThemeContext } from "../../theme";
import "./theme-toggle.css";

export interface ThemeToggleProps {
  /** Show label text next to the toggle */
  showLabel?: boolean;
  /** Size of the toggle */
  size?: "small" | "medium" | "large";
}

/**
 * ThemeToggle component for switching between light and dark themes
 */
export function ThemeToggle({ showLabel = true, size = "medium" }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <button
      className={`theme-toggle theme-toggle--${size}`}
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle__icon">{isDark ? "☀️" : "🌙"}</span>
      {showLabel ? (
        <span className="theme-toggle__label">{isDark ? "Light" : "Dark"} Mode</span>
      ) : null}
    </button>
  );
}
