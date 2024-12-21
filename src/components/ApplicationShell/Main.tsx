import { Route, Routes, useLocation } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";

export const Main = () => {
  const location = useLocation();

  return (
    <main className="Main w-full h-full flex flex-col overflow-auto p-2">
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </main>
  );
};
