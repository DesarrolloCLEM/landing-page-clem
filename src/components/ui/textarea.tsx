import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { formControlClassName } from "./form-control";

export function Textarea({ className, rows = 5, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      rows={rows}
      className={cn(formControlClassName, "min-h-32 resize-y", className)}
      {...props}
    />
  );
}
