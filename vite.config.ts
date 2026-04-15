import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      pwaAssets: { disabled: false, config: true },
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
    setupFiles: "./tests/setupTests.ts",
    include: ["tests/**/*.test.{ts,tsx}"],
    // Optimized for Bun's native test runner if needed
    exclude: ["node_modules", "dist", "**/*.bun.test.ts"],
  },
  server: {
    host: true,
    port: 3000,
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
});
