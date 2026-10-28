import { Quote } from "lucide-react";
import Image from "next/image";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { ExternalLink } from "./external-link";

export type TestimonialCardProps = Omit<ComponentProps<"article">, "children"> & {
  name: string;
  procedure: string;
  summary: string;
  image: { src: string; alt: string; width: number; height: number };
  link?: { href: string; label: string };
  headingLevel?: "h3" | "h4";
};

export function TestimonialCard({
  name,
  procedure,
  summary,
  image,
  link,
  headingLevel: Title = "h3",
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-card border border-border bg-white text-ink shadow-card",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-[4/3] bg-surface">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 85vw"
          className="object-cover object-top grayscale"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Quote aria-hidden="true" className="size-8 text-sky-accent" />
        <div>
          <Title className="font-heading text-lg font-bold text-navy">{name}</Title>
          <p className="text-sm font-semibold text-brand-700">{procedure}</p>
        </div>
        <p className="flex-1 leading-relaxed text-ink-muted">{summary}</p>
        {link && (
          <ExternalLink
            href={link.href}
            className="mt-2 inline-flex font-semibold text-primary underline-offset-4 hover:underline"
          >
            {link.label}
            <span className="sr-only">: {name}</span>
          </ExternalLink>
        )}
      </div>
    </article>
  );
}
