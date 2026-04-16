import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  let title = "Something went wrong";
  let detail: string | null = null;

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    detail =
      typeof error.data === "string"
        ? error.data
        : error.data != null
          ? JSON.stringify(error.data)
          : null;
  } else if (error instanceof Error) {
    detail = error.message;
  }

  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-6 text-center"
      role="alert"
    >
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      {detail ? (
        <p className="max-w-md text-sm text-muted-foreground">{detail}</p>
      ) : null}
      <Link
        to="/"
        className="text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
};
