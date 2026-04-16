import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

export const HomePage = () => {
  const health = useQuery({
    queryKey: ["api", "health"],
    queryFn: async () => {
      const { data, error } = await api.api.health.get();
      if (error) {
        throw new Error("API health check failed");
      }
      return data;
    },
    refetchInterval: 5_000,
  });

  const examples = useQuery({
    queryKey: ["api", "examples"],
    queryFn: async () => {
      const { data, error } = await api.api.examples.get();
      if (error) {
        throw new Error("Failed to load examples");
      }
      return data ?? [];
    },
    refetchInterval: 5_000,
  });

  return (
    <div className="space-y-8 p-4">
      <header className="border-b pb-4">
        <h1 className="text-4xl font-extrabold tracking-tighter">
          BOILERPLATE_V2
        </h1>
        <p className="text-muted-foreground">
          Vite + Bun + React 19 + Tailwind v4
        </p>
      </header>

      <section
        className="rounded-xl border bg-card text-card-foreground shadow p-6 space-y-4"
        aria-labelledby="server-heading"
      >
        <h2 id="server-heading" className="text-xl font-semibold">
          Server (Elysia + Drizzle)
        </h2>
        <p className="text-sm text-muted-foreground">
          Live data from <code className="text-foreground">GET /api/health</code>{" "}
          and <code className="text-foreground">GET /api/examples</code>. Refreshes
          every 5s. Run the Bun server and ensure{" "}
          <code className="text-foreground">SERVER_PORT</code> matches your env (or
          set <code className="text-foreground">VITE_API_URL</code>).
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-background p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Health
            </h3>
            <p
              className="text-sm font-mono"
              data-testid="api-health-status"
            >
              API:{" "}
              {health.isPending
                ? "…"
                : health.isError
                  ? "unreachable"
                  : (health.data?.status ?? "—")}
            </p>
          </div>

          <div className="rounded-lg border bg-background p-4 sm:col-span-2">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              Examples table
            </h3>
            {examples.isPending ? (
              <p className="text-sm text-muted-foreground">Loading rows…</p>
            ) : examples.isError ? (
              <p className="text-sm text-destructive">
                Could not load examples (is the API running?)
              </p>
            ) : examples.data.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No rows yet. Seed{" "}
                <code className="text-foreground">examples</code> in SQLite or
                insert via Drizzle.
              </p>
            ) : (
              <ul
                className="text-sm space-y-1 font-mono"
                data-testid="server-examples-list"
              >
                {examples.data.map((row) => (
                  <li key={row.id}>
                    <span className="text-muted-foreground">#{row.id}</span>{" "}
                    {row.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border bg-card text-card-foreground shadow"
          >
            <h3 className="font-semibold mb-2">Module_0{i + 1}</h3>
            <div className="h-24 w-full bg-muted rounded-md animate-pulse" />
          </div>
        ))}
      </section>

      <section className="max-w-2xl space-y-4">
        <h2 className="text-2xl font-bold">Scroll & Typography Check</h2>
        {Array.from({ length: 3 }).map((_, i) => (
          <p key={i} className="leading-7 text-muted-foreground">
            This is a placeholder paragraph to test typography and vertical
            scrolling. If the sidebar and navbar stay in place while this moves,
            your layout overflow is configured correctly.
          </p>
        ))}
      </section>

      <footer className="pt-8 flex gap-4">
        <button
          type="button"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Primary Action
        </button>
        <button type="button" className="px-4 py-2 border rounded-md">
          Secondary Action
        </button>
      </footer>
    </div>
  );
};
