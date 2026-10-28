import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

// Dark tones redefine the semantic text colors on the section itself,
// so headings, body text and muted text inside adapt without extra classes.
const onDark =
  "[--color-heading:white] [--color-foreground:white] [--color-muted:var(--color-brand-100)]";

export const sectionVariants = cva("text-foreground", {
  variants: {
    tone: {
      white: "bg-white",
      surface: "bg-surface",
      primary: cn("bg-primary", onDark),
      navy: cn("bg-navy", onDark),
    },
    spacing: {
      default: "py-16 lg:py-24",
      compact: "py-10 lg:py-14",
    },
  },
  defaultVariants: { tone: "white", spacing: "default" },
});

export type SectionProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & {
    as?: "section" | "div";
  };

export function Section({
  as: Component = "section",
  className,
  tone,
  spacing,
  ...props
}: SectionProps) {
  return <Component className={cn(sectionVariants({ tone, spacing }), className)} {...props} />;
}
