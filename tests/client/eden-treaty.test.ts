import { treaty } from "@elysiajs/eden";
import { describe, expect, it } from "vitest";
import type { App } from "../../server/app";
import { createApp } from "../../server/app";

describe("Eden treaty + createApp", () => {
  it("infers /api and /api/health without binding a port", async () => {
    const app = createApp();
    const client = treaty<App>("http://eden.test", {
      fetcher: (input, init) => app.handle(new Request(input, init)),
    });

    const root = await client.api.get();
    expect(root.error).toBeNull();
    expect(root.data).toMatchObject({
      name: "vite-react-template-api",
      status: "ok",
    });

    const health = await client.api.health.get();
    expect(health.error).toBeNull();
    expect(health.data).toEqual({ status: "ok" });
  });
});
