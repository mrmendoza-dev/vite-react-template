import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Emulators from "../pages/Emulators";
import GameSearch from "../pages/GameSearch";

function Main() {
  return (
    <div className="Main">
      <main className="p-4 md:ml-64 h-auto pt-20">
        <Routes>
          <Route path="/" element={<GameSearch />} />
          <Route path="/search" element={<GameSearch />} />
          <Route path="/emulators" element={<Emulators />} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default Main;
