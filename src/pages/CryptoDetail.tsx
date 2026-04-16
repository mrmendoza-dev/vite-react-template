import { useParams } from "react-router-dom";

export const CryptoDetail = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-2" data-testid="crypto-detail">
      <h1 className="text-lg font-semibold">CryptoVania</h1>
      <p className="text-sm text-muted-foreground">
        Asset ID: <span className="font-mono text-foreground">{id ?? "—"}</span>
      </p>
    </div>
  );
};
