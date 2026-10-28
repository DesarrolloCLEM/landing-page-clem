import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Label } from "./label";

export type FormFieldControlProps = {
  id: string;
  required?: boolean;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
};

export type FormFieldProps = {
  /** Explicit id: the hint and error ids derive from it (`<id>-hint`, `<id>-error`). */
  id: string;
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  className?: string;
  /** Renders the control, receiving the props that link it to the label, hint and error. */
  children: (control: FormFieldControlProps) => ReactNode;
};

export function FormField({
  id,
  label,
  hint,
  error,
  required = false,
  className,
  children,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {children({
        id,
        required: required || undefined,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })}
      {hint && (
        <p id={hintId} className="text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm font-semibold text-emergency-strong">
          {error}
        </p>
      )}
    </div>
  );
}
