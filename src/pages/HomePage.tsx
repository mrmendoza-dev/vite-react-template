

export const HomePage = () => {
  return (
    <div className="Home w-full flex flex-col gap-4 h-full justify-between">
      <div className="flex flex-col gap-4 w-full">
        {Array.from({ length: 100 }, (_, index) => (
          <CardExample key={index} />
        ))}
      </div>
    </div>
  );
};

const CardExample = () => {
  return (
    <div className="CardExample p-16 bg-secondary rounded-lg">
      <h1></h1>
    </div>
  );
};
