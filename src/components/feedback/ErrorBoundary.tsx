import { ErrorGeneric } from "@/components/feedback/ErrorGeneric";
// import * as Sentry from "@sentry/react";
import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  label?: string;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean; error: Error | null; errorInfo?: ErrorInfo }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.info(this.props.label);

    // Sentry.captureException(error, {
    //   extra: {
    //     componentStack: errorInfo.componentStack,
    //     message: error.message,
    //     name: error.name,
    //     stack: error.stack,
    //     url: window.location.href,
    //   },
    // });
    this.setState({ hasError: true, error, errorInfo });
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      return <ErrorGeneric />;
    }

    return this.props.children;
  }
}
