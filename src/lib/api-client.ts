import { treaty } from "@elysiajs/eden";
import type { App } from "@server/app";

/**
 * Public origin of the Elysia server (no trailing path; Eden uses `/api/...`).
 * - If `VITE_API_URL` is set → call that host directly.
 * - Otherwise in the browser → same origin (Vite dev server proxies `/api` — see vite.config).
 */
export const getApiOrigin = (): string => {
  const fromEnv = import.meta.env.VITE_API_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
};

/** Eden Treaty client — routes and response types come from `App` (use `api.api.…` for the `/api` group). */
export const api = treaty<App>(getApiOrigin());
