import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { Providers } from "@/contexts/Providers";

function App() {
  return (
    <div className="App w-full h-full">
      <Providers>
        <ApplicationShell />
      </Providers>
    </div>
  );
}

export default App;
