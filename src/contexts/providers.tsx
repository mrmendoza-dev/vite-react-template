import { QueryClientProvider } from "@tanstack/react-query";
import { ApplicationProvider } from "@/contexts/application-context";
import { ThemeProvider } from "@/contexts/theme-context";
import { queryClient } from "@/lib/query-client";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ApplicationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ApplicationProvider>
  </QueryClientProvider>
);
