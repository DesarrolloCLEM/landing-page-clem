import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CheckboxProps = Omit<ComponentProps<"input">, "type" | "children"> & {
  id: string;
  /** Visible label; it may contain links. */
  label: ReactNode;
  error?: ReactNode;
};

export function Checkbox({ id, label, error, required, className, ...props }: CheckboxProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className="mt-0.5 size-6 shrink-0 cursor-pointer rounded border-border-strong accent-primary aria-invalid:outline-2 aria-invalid:outline-emergency-strong"
          {...props}
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-foreground">
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-emergency-strong">
              *
            </span>
          )}
        </label>
      </div>
      {error && (
        <p id={errorId} className="text-sm font-semibold text-emergency-strong">
          {error}
        </p>
      )}
    </div>
  );
}
