import ApplicationShell from "@/components/ApplicationShell/ApplicationShell";
import { Providers } from "@/contexts/Providers";

function App() {
  return (
    <div className="App">
      <Providers>
        <ApplicationShell />
      </Providers>
    </div>
  );
}

export default App;
