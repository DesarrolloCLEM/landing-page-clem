import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Visual size is independent from the semantic level.
// leading-* goes after text-* so tailwind-merge does not drop it.
export const headingVariants = cva("text-balance text-heading", {
  variants: {
    size: {
      display: "text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
      xl: "text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl",
      lg: "text-2xl leading-tight font-bold sm:text-3xl",
      md: "text-xl leading-tight font-bold sm:text-2xl",
      sm: "text-lg leading-tight font-bold",
    },
  },
  defaultVariants: { size: "lg" },
});

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as: HeadingLevel;
  };

export function Heading({ as: Component, className, size, ...props }: HeadingProps) {
  return <Component className={cn(headingVariants({ size }), className)} {...props} />;
}
