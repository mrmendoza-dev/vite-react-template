export const ErrorPage = ({ children }: any) => {
  return (
    <div className="ErrorPage w-full h-full flex flex-col relative justify-center items-center">
      <div className="flex-grow h-full">
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
};
