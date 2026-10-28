import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/cn";

export type BreadcrumbItem = {
  label: string;
  /** Omit on the current page. */
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Accessible name of the navigation landmark. */
  label?: string;
  className?: string;
};

export function Breadcrumbs({ items, label = "Migas de pan", className }: BreadcrumbsProps) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-sm text-emphasis underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(isLast && "font-semibold text-foreground")}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight aria-hidden="true" className="size-4 shrink-0" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
