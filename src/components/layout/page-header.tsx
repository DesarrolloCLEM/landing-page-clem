import Image, { type StaticImageData } from "next/image";
import { ViewTransition } from "react";
import type { ReactNode } from "react";

import { Breadcrumbs, type BreadcrumbItem, Eyebrow, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

import { Container } from "./container";
import { Section } from "./section";

export type PageHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  /** Omit on the home page; internal pages always show their trail. */
  breadcrumbs?: BreadcrumbItem[];
  image?: { src: string | StaticImageData; alt: string; transitionName?: string };
  /** Extra content under the description, such as call-to-action buttons. */
  children?: ReactNode;
  /** Only the catalog renders it as h2; pages keep the default h1. */
  titleAs?: "h1" | "h2";
  titleId?: string;
  className?: string;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  breadcrumbs,
  image,
  children,
  titleAs = "h1",
  titleId = "page-title",
  className,
}: PageHeaderProps) {
  return (
    <Section tone="surface" spacing="compact" aria-labelledby={titleId} className={className}>
      <Container
        className={cn("grid items-center gap-8", image && "lg:grid-cols-[1.1fr_1fr] lg:gap-12")}
      >
        <div className="flex flex-col gap-5">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <div className="flex flex-col gap-3">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading as={titleAs} id={titleId} size="xl">
              {title}
            </Heading>
            {description && (
              <Text size="lead" tone="muted" className="max-w-2xl">
                {description}
              </Text>
            )}
          </div>
          {children}
        </div>
        {image && (
          <ViewTransition name={image.transitionName} share="auto" default="none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-card">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </ViewTransition>
        )}
      </Container>
    </Section>
  );
}
