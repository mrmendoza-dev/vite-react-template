import { ErrorBoundary } from "@/components/feedback/ErrorBoundary";
import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { Providers } from "@/contexts/Providers";

export const App = () => (
  <ErrorBoundary label="App ErrorBoundary">
    <div className="App w-full h-full">
      <Providers>
        <ApplicationShell />
      </Providers>
    </div>
  </ErrorBoundary>
);
