import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

const ThemeToggle = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={className}
    >
      <span aria-hidden="true">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
};

export default ThemeToggle;
