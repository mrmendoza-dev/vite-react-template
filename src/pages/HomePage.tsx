import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

const demoCardIds = ["demo-a", "demo-b"] as const;

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
  });

  return (
    <div className="Home w-full flex flex-col gap-4 h-full justify-between">
      <p
        className="text-muted-foreground text-sm"
        data-testid="api-health-status"
      >
        API:{" "}
        {health.isPending
          ? "…"
          : health.isError
            ? "unreachable"
            : (health.data?.status ?? "—")}
      </p>
      <div className="flex flex-col gap-4 w-full">
        {demoCardIds.map((id) => (
          <CardExample key={id} />
        ))}
      </div>
    </div>
  );
};

const CardExample = () => {
  return (
    <div className="CardExample p-16 bg-secondary rounded-lg">
      <h1 className="sr-only">Example card</h1>
    </div>
  );
};
