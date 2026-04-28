import { ThemeProvider } from "@/contexts/ThemeContext";
import { ApplicationProvider } from "@/contexts/ApplicationContext";
import { queryClient } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ApplicationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ApplicationProvider>
  </QueryClientProvider>
);
