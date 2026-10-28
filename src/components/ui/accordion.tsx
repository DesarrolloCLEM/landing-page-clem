import { ChevronDown } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type AccordionItemProps = Omit<ComponentProps<"details">, "title"> & {
  /** Anchor id: a URL with this hash can open the item. */
  id: string;
  title: ReactNode;
  children: ReactNode;
};

/**
 * Disclosure built on the native <details> element: works without JavaScript, announces its
 * expanded state and keeps the answer in the HTML for search engines.
 */
export function AccordionItem({ id, title, children, className, ...props }: AccordionItemProps) {
  return (
    <details
      id={id}
      className={cn(
        "group scroll-mt-28 rounded-card border border-border bg-white text-ink shadow-card open:shadow-card-hover",
        className,
      )}
      {...props}
    >
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-card px-5 py-4 font-heading text-base font-bold text-navy hover:text-primary sm:text-lg [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown
          aria-hidden="true"
          className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180 motion-reduce:transition-none"
        />
      </summary>
      <div className="flex flex-col gap-3 border-t border-border px-5 py-4 leading-relaxed text-ink-muted">
        {children}
      </div>
    </details>
  );
}

export function Accordion({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-3", className)} {...props} />;
}
