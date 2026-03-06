// setupTests.js

// Extend Vitest's expect with Testing Library's matchers
import "@testing-library/jest-dom";

// (Optional) Add global cleanup (Vitest does this automatically, but you can be explicit)
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

// (Optional) Mock things like fetch if your app uses them
// global.fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Mock window.matchMedia for tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
