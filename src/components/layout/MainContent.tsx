import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";

export const MainContent = () => {
  return (
    <main className="flex-1 w-0 min-w-0 h-[calc(100vh)] overflow-auto p-2 px-4 bg-background">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};
