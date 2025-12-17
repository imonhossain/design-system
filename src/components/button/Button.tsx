import type { CSSProperties } from "react";
import { useThemeContext } from "../../theme";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use (overrides theme colors) */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Get Tailwind classes for button size
 */
function getSizeClasses(size: ButtonProps["size"]): string {
  const sizes = {
    small: "px-4 py-2.5 text-xs",
    medium: "px-5 py-2.75 text-sm",
    large: "px-6 py-3 text-base",
  };

  return sizes[size || "medium"];
}

/**
 * Get dynamic styles based on theme and variant
 */
function getButtonStyles(
  primary: boolean,
  backgroundColor: string | undefined,
  themeColors: {
    primary: string;
    background: string;
    text: string;
    border: string;
  }
): CSSProperties {
  if (backgroundColor) {
    return { backgroundColor };
  }

  if (primary) {
    return {
      backgroundColor: themeColors.primary,
      color: themeColors.background,
    };
  }

  return {
    backgroundColor: "transparent",
    color: themeColors.text,
    borderColor: themeColors.border,
  };
}

/**
 * Primary UI component for user interaction
 *
 * @example
 * ```tsx
 * <Button label="Click me" primary size="medium" onClick={() => {}} />
 * ```
 */
export function Button({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const { theme } = useThemeContext();

  const baseClasses =
    "inline-block cursor-pointer font-bold leading-none rounded-full transition-all duration-200 ease-in-out hover:opacity-90 active:scale-95";

  const variantClasses = primary ? "border-none" : "border border-solid bg-transparent";

  const sizeClasses = getSizeClasses(size);

  const className = `${baseClasses} ${variantClasses} ${sizeClasses}`;

  const style = getButtonStyles(primary, backgroundColor, theme.colors);

  return (
    <button className={className} style={style} type="button" {...props}>
      {label}
    </button>
  );
}
