import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { formControlClassName } from "./form-control";

export function Select({ className, ...props }: ComponentProps<"select">) {
  return (
    <div className="relative">
      <select className={cn(formControlClassName, "appearance-none pr-11", className)} {...props} />
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-ink-muted"
      />
    </div>
  );
}
