import { useMemo } from "react";

export const HomePage = () => {
  const cardKeys = useMemo(
    () => Array.from({ length: 100 }, () => crypto.randomUUID()),
    [],
  );

  return (
    <div className="Home w-full flex flex-col gap-4 h-full justify-between">
      <div className="flex flex-col gap-4 w-full">
        {cardKeys.map((key) => (
          <CardExample key={key} />
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
