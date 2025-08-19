import { cn } from "@/lib/utils";
import { HomePage } from "@/pages/HomePage";
import { Route, Routes } from "react-router-dom";

export const MainContent = ({
  className,
}: {
  className?: string;
  contentClassName?: string;
}) => {
  return (
    <main className={cn("h-full w-full relative", className)}>
      <div className={cn("min-h-full")}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </main>
  );
};
