import { treaty } from "@elysiajs/eden";
import type { App } from "@server/app";

const defaultDevOrigin = "http://localhost:3030";

/** Public origin of the Elysia server (no trailing path; Eden adds `/api`, etc.). */
export const getApiOrigin = (): string => {
  const fromEnv = import.meta.env.VITE_API_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return defaultDevOrigin;
};

/** Eden Treaty client — routes and response types come from `App` (use `api.api.…` for the `/api` group). */
export const api = treaty<App>(getApiOrigin());
