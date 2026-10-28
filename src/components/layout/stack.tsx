import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export const stackVariants = cva("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row flex-wrap",
    },
    gap: {
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: { direction: "vertical", gap: "md" },
});

export type StackProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof stackVariants> & {
    as?: "div" | "ul";
  };

export function Stack({
  as: Component = "div",
  className,
  direction,
  gap,
  align,
  justify,
  ...props
}: StackProps) {
  return (
    <Component
      className={cn(stackVariants({ direction, gap, align, justify }), className)}
      {...props}
    />
  );
}
