import { ThemeProvider } from "@/contexts/ThemeContext";
import { ApplicationShellProvider } from "@/contexts/ApplicationShellContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ApplicationShellProvider>{children}</ApplicationShellProvider>
    </ThemeProvider>
  );
}
