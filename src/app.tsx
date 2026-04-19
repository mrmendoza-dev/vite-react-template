import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "@/components/feedback/error-boundary";
import { Providers } from "@/contexts/providers";
import { router } from "@/router";

export const App = () => {
  return (
    <ErrorBoundary label="Root ErrorBoundary">
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </ErrorBoundary>
  );
};
