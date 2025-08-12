import { ThemeProvider } from "@/contexts/ThemeContext";
import { ApplicationProvider } from "@/contexts/ApplicationContext";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApplicationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ApplicationProvider>
  );
}
