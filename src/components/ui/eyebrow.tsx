import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "font-heading text-sm font-bold tracking-widest text-emphasis uppercase",
        className,
      )}
      {...props}
    />
  );
}
