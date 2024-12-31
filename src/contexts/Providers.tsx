import { ThemeProvider } from "@/contexts/ThemeContext";
import { ApplicationShellProvider } from "@/contexts/ApplicationShellContext";
import { ToastProvider } from "@/contexts/ToastContext";




export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ApplicationShellProvider>
        <ToastProvider>{children}</ToastProvider>
      </ApplicationShellProvider>
    </ThemeProvider>
  );
}
