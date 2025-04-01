import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { PageTransition } from "./PageTransition";

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((m) => ({
    default: m.HomePage,
  }))
);

export const MainContent = () => {
  return (
    <AnimatePresence mode="wait">
      <main className="relative flex-1 overflow-y-auto bg-background">
        <div className="p-4">
          <Routes>
            <Route
              path="/"
              element={<SuspenseRoute element={<HomePage />} />}
            />
          </Routes>
        </div>
      </main>
    </AnimatePresence>
  );
};

const SuspenseRoute = ({ element }: { element: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageTransition className="h-full w-full">{element}</PageTransition>
  </Suspense>
);
