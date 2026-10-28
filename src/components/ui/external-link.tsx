import type { ComponentProps } from "react";

export type ExternalLinkProps = Omit<ComponentProps<"a">, "target" | "rel"> & {
  /** Hidden text announced by screen readers after the link content. */
  newTabLabel?: string;
};

/** Link that leaves the site: opens a new tab and tells assistive technology about it. */
export function ExternalLink({
  children,
  newTabLabel = "(abre en una pestaña nueva)",
  ...props
}: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> {newTabLabel}</span>
    </a>
  );
}
