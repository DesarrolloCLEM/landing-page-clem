import { MapPin } from "lucide-react";

import { cn } from "@/lib/cn";

import { ExternalLink } from "./external-link";

export type MapEmbedProps = {
  /** Embed URL of the map provider. */
  src: string;
  /** Accessible title of the iframe. */
  title: string;
  /** Link that works without loading the map. */
  link: { href: string; label: string };
  className?: string;
};

/** Third-party map that only loads when it gets close to the viewport. */
export function MapEmbed({ src, title, link, className }: MapEmbedProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-surface shadow-card sm:aspect-video">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <ExternalLink
        href={link.href}
        className="inline-flex items-center gap-2 self-start font-semibold text-emphasis underline-offset-4 hover:underline"
      >
        <MapPin aria-hidden="true" className="size-4" />
        {link.label}
      </ExternalLink>
    </div>
  );
}
