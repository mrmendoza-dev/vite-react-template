import { Route, Routes, useLocation } from "react-router-dom";

import Home from "@/pages/Home";

function Main() {
  const location = useLocation();

  return (
    <main className="Main w-full h-full flex flex-col overflow-auto p-2">
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </main>
  );
}

export default Main;
