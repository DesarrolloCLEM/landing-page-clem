"use client";

import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

import { ExternalLink } from "./external-link";

// Client island: the third-party map is mounted only when the block enters the viewport.
// Native `loading="lazy"` preloads iframes well before they are visible, which still
// downloads the whole Google Maps bundle on short pages.

export type MapEmbedProps = {
  /** Embed URL of the map provider. */
  src: string;
  /** Accessible title of the iframe. */
  title: string;
  /** Link that works without loading the map. */
  link: { href: string; label: string };
  className?: string;
};

export function MapEmbed({ src, title, link, className }: MapEmbedProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div
        ref={frameRef}
        className="relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-surface shadow-card sm:aspect-video"
      >
        {visible && (
          <iframe
            src={src}
            title={title}
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        )}
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
