import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { CountUp } from "./count-up";

export const statCardVariants = cva("flex flex-col-reverse gap-1", {
  variants: {
    variant: {
      plain: "",
      card: "rounded-card border border-border bg-white p-6 shadow-card [--color-emphasis:var(--color-primary)] [--color-muted:var(--color-ink-muted)]",
    },
    align: {
      start: "text-left",
      center: "items-center text-center",
    },
  },
  defaultVariants: { variant: "plain", align: "start" },
});

export type StatCardProps = Omit<ComponentProps<"div">, "children"> &
  VariantProps<typeof statCardVariants> & {
    value: string;
    label: string;
  };

/** A figure with its label. Place it inside a `<dl>`: it renders the `dt`/`dd` pair. */
export function StatCard({ value, label, variant, align, className, ...props }: StatCardProps) {
  return (
    <div className={cn(statCardVariants({ variant, align }), className)} {...props}>
      <dt className="text-sm font-semibold text-muted sm:text-base">{label}</dt>
      <dd className="font-heading text-4xl leading-none font-extrabold text-emphasis sm:text-5xl">
        <CountUp value={value} />
      </dd>
    </div>
  );
}
