import { Download, FileText } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export type DocumentLinkProps = Omit<ComponentProps<"article">, "title"> & {
  title: string;
  /** Secondary line, such as the period the document covers. */
  subtitle?: string;
  href: string;
  /** File type and size, e.g. "PDF, 662 KB". */
  meta: string;
  actionLabel?: string;
  headingLevel?: "h2" | "h3";
};

/** Downloadable document row. The link's accessible name includes the title and the file size. */
export function DocumentLink({
  title,
  subtitle,
  href,
  meta,
  actionLabel = "Descargar",
  headingLevel: Title = "h3",
  className,
  ...props
}: DocumentLinkProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-card border border-border bg-white p-5 text-ink shadow-card sm:flex-row sm:items-center",
        className,
      )}
      {...props}
    >
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-emergency-50 text-emergency-strong">
        <FileText aria-hidden="true" className="size-6" />
      </span>
      <div className="flex flex-1 flex-col gap-1">
        <Title className="font-heading font-bold text-navy">{title}</Title>
        <p className="text-sm text-ink-muted">
          {subtitle && <span>{subtitle} · </span>}
          {meta}
        </p>
      </div>
      <a
        href={href}
        download
        className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-primary px-5 font-heading font-bold text-white transition-colors hover:bg-primary-dark sm:self-center"
      >
        <Download aria-hidden="true" className="size-5" />
        {actionLabel}
        <span className="sr-only">
          {" "}
          {title} ({meta})
        </span>
      </a>
    </article>
  );
}
