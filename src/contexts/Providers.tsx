import { ApplicationProvider } from "@/contexts/ApplicationContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApplicationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ApplicationProvider>
  );
}
