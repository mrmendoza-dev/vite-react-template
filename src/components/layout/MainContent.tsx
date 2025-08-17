import { cn } from "@/lib/utils";
import { HomePage } from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";

export const MainContent = ({ className }: { className?: string }) => {
  return (
    <main className={cn("h-full w-full relative", className)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </main>
  );
};
