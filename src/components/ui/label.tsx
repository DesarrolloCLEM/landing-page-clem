import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export type LabelProps = ComponentProps<"label"> & {
  required?: boolean;
};

export function Label({ className, required = false, children, ...props }: LabelProps) {
  return (
    <label className={cn("font-heading text-sm font-bold text-foreground", className)} {...props}>
      {children}
      {required && (
        <span aria-hidden="true" className="ml-0.5 text-emergency-strong">
          *
        </span>
      )}
    </label>
  );
}
