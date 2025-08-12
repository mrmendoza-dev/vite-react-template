
export const HomePage = () => {
  return (
    <div className="Home h-full w-full">

      <div className="flex flex-col gap-4 h-full w-full">


      {Array.from({ length: 50 }, (_, index) => (
        <CardExample key={index} />
      ))}
      </div>
    </div>
  );
};


const CardExample = () => {
  return (
    <div className="CardExample p-16 h-full w-full bg-secondary rounded-lg">
      <h1></h1>
    </div>
  );
};