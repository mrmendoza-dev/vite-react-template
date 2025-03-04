import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { Providers } from "@/contexts/Providers";
import "@/styles/App.css";

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
