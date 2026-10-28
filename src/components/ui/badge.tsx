import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

// Badges carry their own background, so they use fixed ink colors instead of the
// semantic ones that dark sections redefine.
export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 font-heading text-xs font-bold [&_svg]:size-3.5",
  {
    variants: {
      tone: {
        primary: "bg-brand-50 text-brand-700",
        health: "bg-health-50 text-health-strong",
        emergency: "bg-emergency-50 text-emergency-strong",
        neutral: "bg-surface text-ink",
      },
    },
    defaultVariants: { tone: "primary" },
  },
);

export type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
