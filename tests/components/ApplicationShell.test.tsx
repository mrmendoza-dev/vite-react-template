import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { ApplicationShell } from "@/components/layout/ApplicationShell";
import { Providers } from "@/contexts/Providers";

vi.mock("@/lib/api-client", () => ({
  api: {
    api: {
      health: {
        get: async () => ({ data: { status: "ok" as const }, error: null }),
      },
    },
  },
}));

describe("ApplicationShell", () => {
  it("renders navigation, main, and sidebar toggle", () => {
    render(
      <BrowserRouter>
        <Providers>
          <ApplicationShell />
        </Providers>
      </BrowserRouter>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggle sidebar/i }),
    ).toBeInTheDocument();
  });
});
