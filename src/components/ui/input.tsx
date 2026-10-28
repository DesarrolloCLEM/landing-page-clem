import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { formControlClassName } from "./form-control";

export function Input({ className, type = "text", ...props }: ComponentProps<"input">) {
  return <input type={type} className={cn(formControlClassName, className)} {...props} />;
}
