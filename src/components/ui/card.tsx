import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

import { Heading, type HeadingProps } from "./heading";

// Cards are always white, so they reset the semantic colors a dark section may have redefined.
const resetColors =
  "[--color-emphasis:var(--color-primary)] [--color-foreground:var(--color-ink)] [--color-heading:var(--color-navy)] [--color-muted:var(--color-ink-muted)]";

export const cardVariants = cva(
  cn(
    "flex flex-col overflow-hidden rounded-card border border-border bg-white pb-6 text-foreground shadow-card",
    resetColors,
  ),
  {
    variants: {
      interactive: {
        true: "transition-shadow hover:shadow-card-hover has-[a:focus-visible]:shadow-card-hover has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-primary",
        false: "",
      },
    },
    defaultVariants: { interactive: false },
  },
);

export type CardProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof cardVariants> & {
    as?: "article" | "div" | "li";
  };

export function Card({ as: Component = "article", className, interactive, ...props }: CardProps) {
  return <Component className={cn(cardVariants({ interactive }), className)} {...props} />;
}

/** Full-bleed media area; place a `next/image` with `fill` inside. */
export function CardMedia({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("relative aspect-video w-full overflow-hidden bg-surface", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-3 px-6 pt-6", className)} {...props} />;
}

export type CardTitleProps = Omit<HeadingProps, "as"> & { as?: HeadingProps["as"] };

export function CardTitle({ as = "h3", size = "sm", ...props }: CardTitleProps) {
  return <Heading as={as} size={size} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-base leading-relaxed text-muted", className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex-1 px-6 pt-4", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-auto flex flex-wrap items-center gap-3 px-6 pt-4", className)}
      {...props}
    />
  );
}
