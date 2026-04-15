import type { ComponentType } from "react";
import { Route, Routes } from "react-router-dom";
import { cn } from "@/lib/utils";
import { HomePage } from "@/pages/HomePage";

export type MainContentProps = {
  className?: string;
  contentClassName?: string;
  /** Swap the routed home view (e.g. lightweight stub in tests). */
  homePage?: ComponentType;
};

export const MainContent = ({
  className,
  contentClassName,
  homePage: HomePageSlot = HomePage,
}: MainContentProps) => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={cn("h-full w-full relative", className)}
    >
      <div className={cn("min-h-full", contentClassName)}>
        <Routes>
          <Route path="/" element={<HomePageSlot />} />
          <Route path="*" element={<HomePageSlot />} />
        </Routes>
      </div>
    </main>
  );
};
