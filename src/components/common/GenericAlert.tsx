import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import React from "react";

const alertVariants = cva(
  "w-fit flex items-center gap-2 rounded-lg border p-2",
  {
    variants: {
      variant: {
        warning:
          "bg-warning text-warning-foreground border-warning-foreground/20",
        error:
          "bg-error text-error-foreground border-error-foreground/20",
        success:
          "bg-success text-success-foreground border-success-foreground/20",
        info: "bg-info text-info-foreground border-info-foreground/20",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const icons = {
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle,
  info: Info,
};

interface GenericAlertProps
  extends VariantProps<typeof alertVariants>,
    React.HTMLAttributes<HTMLDivElement> {
  alertMessage: string;
  className?: string;
}

export const GenericAlert = ({
  alertMessage,
  variant,
  className,
  ...props
}: GenericAlertProps) => {
  const Icon = icons[variant ?? "info"];
  return (
    <div
      role="alert"
      className={clsx(alertVariants({ variant }), className)}
      {...props}
    >
      <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <p className="text-xs">{alertMessage}</p>
    </div>
  );
};
