import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "@/components/feedback/ErrorBoundary";
import { Providers } from "@/contexts/Providers";
import { router } from "./router";
import "./registerSW";
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary label="Root ErrorBoundary">
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </ErrorBoundary>
  </React.StrictMode>,
);
