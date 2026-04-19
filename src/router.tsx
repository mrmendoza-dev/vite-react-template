import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { AppShell } from "@/layouts/app-shell";
import { HomePage } from "@/pages/home-page";
import { RouteErrorPage } from "@/pages/route-error-page";

const devOnlyRoutes: RouteObject[] = import.meta.env.DEV
  ? [
      {
        path: "dev/error-boom",
        lazy: async () => {
          const { DevErrorBoom } = await import("@/pages/dev-error-boom");
          return { Component: DevErrorBoom };
        },
      },
    ]
  : [];

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <AppShell />,
    errorElement: <RouteErrorPage />,
    children: [
      ...devOnlyRoutes,
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "chat",
        lazy: async () => {
          const { ChatPage } = await import("@/pages/chat-page");
          return { Component: ChatPage };
        },
      },
      {
        path: "detail/:id",
        lazy: async () => {
          const { DetailPage } = await import("@/pages/detail-page");
          return { Component: DetailPage };
        },
      },
      {
        path: "profile",
        lazy: async () => {
          const { ProfilePage } = await import("@/pages/profile-page");
          return { Component: ProfilePage };
        },
      },
    ],
  },
];

export const router = createBrowserRouter(appRoutes);
