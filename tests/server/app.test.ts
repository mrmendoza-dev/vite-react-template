import { describe, expect, it } from "vitest";
import { createApp } from "../../server/app";

describe("createApp", () => {
  it("serves /api/health", async () => {
    const app = createApp();
    const res = await app.handle(new Request("http://localhost/api/health"));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok" });
  });

  it("serves /api metadata", async () => {
    const app = createApp();
    const res = await app.handle(new Request("http://localhost/api"));
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toMatchObject({
      name: "vite-react-template-api",
      status: "ok",
    });
  });
});
