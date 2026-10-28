import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { ExternalLink, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

import type { ContentItem, ContentSection } from "../types";

function ItemTitle({ item, className }: { item: ContentItem; className?: string }) {
  if (!item.href) return <span className={className}>{item.title}</span>;
  const linkClassName = cn(
    "inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline",
    className,
  );
  return item.external ? (
    <ExternalLink href={item.href} className={linkClassName}>
      {item.title}
    </ExternalLink>
  ) : (
    <Link href={item.href} className={linkClassName}>
      {item.title}
      <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
    </Link>
  );
}

function Items({ section }: { section: ContentSection }) {
  const items = section.items ?? [];

  switch (section.layout) {
    case "stats":
      return (
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title + item.description}
              className="flex flex-col-reverse gap-2 rounded-card border border-border bg-white p-6 shadow-card"
            >
              <dt className="text-sm leading-relaxed text-ink-muted">{item.description}</dt>
              <dd className="font-heading text-4xl font-extrabold text-primary">{item.title}</dd>
            </div>
          ))}
        </dl>
      );
    case "checklist":
      return (
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.title} className="flex gap-3">
              <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-health-strong" />
              <span>
                <ItemTitle item={item} className="font-semibold" />
                {item.description && <span className="text-muted"> — {item.description}</span>}
              </span>
            </li>
          ))}
        </ul>
      );
    case "list":
      return (
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-1 rounded-full border border-brand-200 bg-white px-4 font-semibold text-brand-700 transition-colors hover:border-primary hover:bg-brand-50"
                >
                  {item.title}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              ) : (
                <span className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 font-semibold text-ink-muted">
                  {item.title}
                </span>
              )}
              {item.description && <span className="sr-only">: {item.description}</span>}
            </li>
          ))}
        </ul>
      );
    case "tags":
      return (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-3 rounded-card border border-border bg-white p-5 text-ink shadow-card"
            >
              <h3 className="font-heading text-lg font-bold text-navy">
                <ItemTitle item={item} />
              </h3>
              {item.description && (
                <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
              )}
              {item.tags && (
                <ul className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-2 rounded-card border border-border bg-white p-5 text-ink shadow-card"
            >
              <h3 className="font-heading text-lg font-bold text-navy">
                <ItemTitle item={item} />
              </h3>
              {item.description && (
                <p className="leading-relaxed text-ink-muted">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      );
  }
}

/** Renders the content sections of a service, alternating backgrounds. */
export function ContentSections({
  sections,
  startTone = 0,
}: {
  sections: ContentSection[];
  startTone?: number;
}) {
  return sections.map((section, index) => {
    const titleId = `${section.id}-title`;
    return (
      <Section
        key={section.id}
        id={section.id}
        tone={(index + startTone) % 2 === 0 ? "white" : "surface"}
        spacing="compact"
        aria-labelledby={titleId}
      >
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id={titleId} size="lg">
            {section.title}
          </Heading>
          {section.intro?.map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} size="lead" tone="muted" className="max-w-3xl">
              {paragraph}
            </Text>
          ))}
          {section.items && <Items section={section} />}
          {section.outro?.map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} tone="muted" className="max-w-3xl">
              {paragraph}
            </Text>
          ))}
        </Container>
      </Section>
    );
  });
}
