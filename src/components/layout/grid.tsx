import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export const gridVariants = cva("motion-stagger grid grid-cols-1", {
  variants: {
    cols: {
      1: "",
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-2 lg:grid-cols-3",
      4: "sm:grid-cols-2 lg:grid-cols-4",
    },
    gap: {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    },
  },
  defaultVariants: { cols: 3, gap: "md" },
});

export type GridProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof gridVariants> & {
    as?: "div" | "ul";
  };

export function Grid({ as: Component = "div", className, cols, gap, ...props }: GridProps) {
  return <Component className={cn(gridVariants({ cols, gap }), className)} {...props} />;
}
