import type { ReactNode } from "react";

type ErrorPageProps = { children: ReactNode };

export const ErrorPage = ({ children }: ErrorPageProps) => {
  return (
    <div className="ErrorPage w-full h-full flex flex-col relative justify-center items-center">
      <div className="flex-grow h-full">
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
};
