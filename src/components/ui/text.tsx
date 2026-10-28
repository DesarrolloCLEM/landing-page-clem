import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export const textVariants = cva("text-pretty", {
  variants: {
    size: {
      lead: "text-lg leading-relaxed sm:text-xl",
      body: "text-base leading-relaxed",
      small: "text-sm leading-relaxed",
    },
    tone: {
      default: "",
      muted: "text-muted",
    },
  },
  defaultVariants: { size: "body", tone: "default" },
});

export type TextProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div";
  };

export function Text({ as: Component = "p", className, size, tone, ...props }: TextProps) {
  return <Component className={cn(textVariants({ size, tone }), className)} {...props} />;
}
