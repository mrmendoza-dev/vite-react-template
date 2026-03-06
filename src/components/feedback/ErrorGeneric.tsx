import { ErrorPage } from "@/components/feedback/ErrorPage";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CircleX } from "lucide-react";

export const ErrorGeneric = () => {
  const navigate = useNavigate();

  // get current path
  const currentPath = useLocation().pathname;

  return (
    <ErrorPage>
      <section className="Error500 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-full">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="error-code mb-4 mx-auto text-7xl tracking-tight font-extrabold lg:text-9xl text-accent-primary">
            <CircleX className="size-24 mx-auto" />
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
            An error occurred.
          </p>
          <p className="mb-0 text-lg font-light text-foreground">
            Please refresh the page.
          </p>
          <p className="mb-4 text-lg font-light text-foreground">
            Contact{" "}
            <Link to="/support" className="text-accent-primary font-semibold">
              mrmendoza.dev@gmail.com
            </Link>{" "}
            if the problem persists.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                navigate("/");
                window.location.reload();
              }}
            >
              Back to Editor
            </Button>
            <Button
              variant="default"
              size="lg"
              // reload and go to current path
              onClick={() => {
                navigate(currentPath);
                window.location.reload();
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </section>
    </ErrorPage>
  );
};
