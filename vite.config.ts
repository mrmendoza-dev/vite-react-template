import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const serverPort = env.SERVER_PORT || env.PORT;
  const viteApiUrl = env.VITE_API_URL?.trim();
  /** When `VITE_API_URL` is unset, the app uses same-origin `/api`; proxy to the Bun server (default port matches server/env.ts). */
  const apiProxyTarget =
    viteApiUrl && viteApiUrl.length > 0
      ? viteApiUrl.replace(/\/$/, "")
      : `http://127.0.0.1:${serverPort || "3030"}`;

  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: "auto",
        pwaAssets: { disabled: true },
        includeAssets: [
          "favicon/favicon.ico",
          "favicon/apple-touch-icon.png",
          "favicon/masked-icon.svg",
        ],
        manifest: {
          name: "Vite_React_Template",
          short_name: "Vite_React_Template",
          description: "Vite_React_Template",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          icons: [
            {
              src: "favicon/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "favicon/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "favicon/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup-tests.ts",
      include: ["tests/**/*.test.{ts,tsx}"],
      // Optimized for Bun's native test runner if needed
      exclude: ["node_modules", "dist", "**/*.bun.test.ts"],
    },
    server: {
      host: true,
      port: 3000,
      proxy: {
        "/api": {
          target: apiProxyTarget,
          changeOrigin: true,
        },
      },
      // Security: Restrict allowed hosts to your specific workflow
      allowedHosts: [".ngrok-free.app", "localhost", "127.0.0.1"],
      // 2026 Feature: Forward browser logs to your terminal
      forwardConsole: true,
    },
    build: {
      // Rolldown (Vite 8) is 10-30x faster.
      // We keep this thin to let the new Rust engine do the work.
      target: "esnext",
    },
    resolve: {
      tsconfigPaths: true,
    },
  };
});
