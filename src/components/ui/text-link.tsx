import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export type TextLinkProps = ComponentProps<typeof Link> & {
  withArrow?: boolean;
};

export function TextLink({ className, withArrow = false, children, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-1 font-semibold text-emphasis underline-offset-4 hover:underline focus-visible:underline",
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
