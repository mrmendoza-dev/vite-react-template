import { ErrorBoundary } from "@/components/feedback/ErrorBoundary";
import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { Providers } from "@/contexts/Providers";

function App() {
  return (
    <ErrorBoundary label="App ErrorBoundary">
      <div className="App w-full h-full">
        <Providers>
          <ApplicationShell />
        </Providers>
      </div>
    </ErrorBoundary>
  );
}

export default App;
