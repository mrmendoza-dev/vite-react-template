import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";

export const MainContent = () => {
  return (
    <main className="relative flex-1 overflow-y-auto bg-background">
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </main>
  );
};
