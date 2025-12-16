import { useThemeContext } from "./theme";
import { Button } from "./components/button/Button";
import "./App.css";

function App() {
  const { theme, toggleTheme, isDark } = useThemeContext();

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
        minHeight: "100vh",
        padding: "2rem",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="text-3xl font-bold underline">Design System with Theme Support</h1>

        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Theme Controls</h2>
          <Button
            label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
            onClick={toggleTheme}
            primary={true}
            size="medium"
          />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Button Variants</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button label="Primary Button" primary={true} />
            <Button label="Secondary Button" primary={false} />
          </div>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Button Sizes</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Button label="Small" size="small" primary={true} />
            <Button label="Medium" size="medium" primary={true} />
            <Button label="Large" size="large" primary={true} />
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: theme.colors.surface,
            borderRadius: "8px",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Current Theme</h3>
          <p>Mode: {isDark ? "Dark" : "Light"}</p>
          <p style={{ fontSize: "0.875rem", color: theme.colors.textSecondary }}>
            Theme preference is saved to localStorage and will persist across visits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
