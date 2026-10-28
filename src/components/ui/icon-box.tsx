import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const iconBoxVariants = cva("inline-flex shrink-0 items-center justify-center rounded-2xl", {
  variants: {
    tone: {
      primary: "bg-brand-50 text-primary",
      health: "bg-health-50 text-health",
      emergency: "bg-emergency-50 text-emergency",
      accent: "bg-sky-accent text-navy",
    },
    size: {
      md: "size-12 [&_svg]:size-6",
      lg: "size-16 [&_svg]:size-8",
    },
  },
  defaultVariants: { tone: "primary", size: "md" },
});

export type IconBoxProps = Omit<ComponentProps<"span">, "aria-hidden"> &
  VariantProps<typeof iconBoxVariants>;

/** Decorative icon container: always hidden from assistive technologies. */
export function IconBox({ className, tone, size, ...props }: IconBoxProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(iconBoxVariants({ tone, size }), className)}
      {...props}
    />
  );
}
