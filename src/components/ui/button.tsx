import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-heading font-bold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
        secondary: "bg-white text-primary ring-1 ring-primary ring-inset hover:bg-brand-50",
        ghost: "text-primary hover:bg-brand-50",
        emergency: "bg-emergency-strong text-white hover:bg-emergency-strong/90",
        inverse: "bg-white text-primary hover:bg-brand-50",
      },
      size: {
        sm: "px-4 text-sm",
        md: "px-6 text-base",
        lg: "px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
