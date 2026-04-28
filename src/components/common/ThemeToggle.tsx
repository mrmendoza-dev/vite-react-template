import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      id="theme-toggle"
      type="button"
      size="icon"
      variant="ghost"
      className="text-foreground hover:text-foreground"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};
