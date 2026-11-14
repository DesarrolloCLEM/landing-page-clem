import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Grid, Section } from "@/components/layout";
import { Eyebrow, Heading, ImageGallery, Text } from "@/components/ui";

import type { PortfolioBlock } from "../types";

/** Blocks that paint their own background and ignore the alternating tone. */
const selfToned = new Set(["banner", "closing"]);

function blockKey(block: PortfolioBlock, index: number) {
  const label = "title" in block ? block.title : undefined;
  return `${index}-${block.kind}-${label ?? ""}`;
}

/** Alternates white and surface backgrounds, skipping the self-toned blocks. */
function resolveTones(blocks: PortfolioBlock[]): ("white" | "surface")[] {
  const tones: ("white" | "surface")[] = [];
  let toneIndex = 0;
  for (const block of blocks) {
    if (selfToned.has(block.kind)) {
      tones.push("white");
      continue;
    }
    tones.push(toneIndex % 2 === 0 ? "white" : "surface");
    toneIndex += 1;
  }
  return tones;
}

export function PortfolioBlocks({ blocks }: { blocks: PortfolioBlock[] }) {
  const tones = resolveTones(blocks);

  return (
    <>
      {blocks.map((block, index) => (
        <PortfolioBlockView
          key={blockKey(block, index)}
          block={block}
          tone={tones[index] ?? "white"}
        />
      ))}
    </>
  );
}

function PortfolioBlockView({ block, tone }: { block: PortfolioBlock; tone: "white" | "surface" }) {
  switch (block.kind) {
    case "banner":
      return (
        <div className="relative aspect-[1024/514] w-full overflow-hidden bg-navy">
          <Image
            src={block.image.src}
            alt={block.image.alt}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      );

    case "intro":
      return (
        <Section tone={tone} spacing="compact">
          <Container className="flex flex-col gap-4">
            <Heading as="h1" size="xl">
              {block.title}
            </Heading>
            {block.subtitle ? (
              <Text size="lead" tone="muted" className="max-w-3xl">
                {block.subtitle}
              </Text>
            ) : null}
            {block.body?.map((paragraph) => (
              <Text key={paragraph.slice(0, 40)} tone="muted" className="max-w-3xl">
                {paragraph}
              </Text>
            ))}
          </Container>
        </Section>
      );

    case "feature":
      return (
        <Section tone={tone} spacing="compact">
          <Container
            className={
              block.image
                ? "grid items-center gap-10 lg:grid-cols-2"
                : "flex flex-col gap-4 lg:max-w-3xl"
            }
          >
            {block.image ? (
              <div
                className={`relative aspect-[3/2] overflow-hidden rounded-card shadow-card ${
                  block.reverse ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="flex flex-col gap-4">
              {block.eyebrow ? <Eyebrow>{block.eyebrow}</Eyebrow> : null}
              {block.title ? (
                <Heading as="h2" size="lg">
                  {block.title}
                </Heading>
              ) : null}
              {block.body?.map((paragraph) => (
                <Text key={paragraph.slice(0, 40)} tone="muted">
                  {paragraph}
                </Text>
              ))}
              {block.cta ? <BlockCta cta={block.cta} /> : null}
            </div>
          </Container>
        </Section>
      );

    case "cards":
      return (
        <Section tone={tone} spacing="compact">
          <Container className="flex flex-col gap-8">
            <BlockHeading title={block.title} body={block.body} />
            <Grid as="ul" cols={block.cols ?? 4} gap="md">
              {block.items.map((item) => {
                const content = (
                  <>
                    <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                    {item.body ? (
                      <p className="text-sm leading-relaxed text-ink-muted">{item.body}</p>
                    ) : null}
                  </>
                );
                return (
                  <li key={item.title}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex h-full flex-col gap-2 rounded-card border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div className="flex h-full flex-col gap-2 rounded-card border border-border bg-white p-5 shadow-card">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </Grid>
          </Container>
        </Section>
      );

    case "bullets":
      return (
        <Section tone={tone} spacing="compact">
          <Container className="flex flex-col gap-6">
            <BlockHeading title={block.title} />
            <ul className="grid gap-3 sm:grid-cols-2">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-muted">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      );

    case "stats":
      return (
        <Section tone={tone} spacing="compact">
          <Container className="flex flex-col gap-8">
            <BlockHeading title={block.title} />
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {block.items.map((item) => (
                <div
                  key={`${item.value}-${item.title ?? ""}`}
                  className="flex flex-col gap-1 rounded-card border border-border bg-white p-6 shadow-card"
                >
                  <dt className="font-heading text-3xl font-extrabold text-navy">{item.value}</dt>
                  <dd className="flex flex-col gap-1">
                    {item.title ? (
                      <span className="font-heading font-bold text-navy">{item.title}</span>
                    ) : null}
                    {item.body ? (
                      <span className="text-sm leading-relaxed text-ink-muted">{item.body}</span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>
      );

    case "groups":
      return (
        <Section tone={tone} spacing="compact">
          <Container className="flex flex-col gap-8">
            <BlockHeading title={block.title} body={block.body} />
            <Grid as="ul" cols={3} gap="md">
              {block.items.map((group) => (
                <li
                  key={group.title}
                  className="flex flex-col gap-2 rounded-card border border-border bg-white p-5 shadow-card"
                >
                  <h3 className="font-heading text-lg font-bold text-navy">
                    {group.href ? (
                      <Link href={group.href} className="hover:text-primary hover:underline">
                        {group.title}
                      </Link>
                    ) : (
                      group.title
                    )}
                  </h3>
                  {group.body ? (
                    <p className="text-sm leading-relaxed text-ink-muted">{group.body}</p>
                  ) : null}
                  {group.items && group.items.length > 0 ? (
                    <ul className="flex flex-col gap-1 text-sm text-ink-muted">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </Grid>
          </Container>
        </Section>
      );

    case "gallery":
      return (
        <Section tone={tone} spacing="compact">
          <Container className="flex flex-col gap-6">
            <BlockHeading title={block.title} body={block.body} />
            <ImageGallery images={block.images} />
          </Container>
        </Section>
      );

    case "closing":
      return (
        <Section tone="navy" spacing="compact">
          <Container className="flex flex-col items-center gap-5 text-center">
            <Heading as="h2" size="xl">
              {block.title}
            </Heading>
            {block.body ? (
              <Text size="lead" className="max-w-2xl text-white/85">
                {block.body}
              </Text>
            ) : null}
            {block.cta ? (
              <Link
                href={block.cta.href}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-heading font-bold text-navy transition-colors hover:bg-brand-50"
              >
                {block.cta.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            ) : null}
          </Container>
        </Section>
      );
  }
}

function BlockHeading({ title, body }: { title?: string; body?: string }) {
  if (!title && !body) return null;
  return (
    <div className="flex flex-col gap-3">
      {title ? (
        <Heading as="h2" size="lg">
          {title}
        </Heading>
      ) : null}
      {body ? (
        <Text tone="muted" className="max-w-3xl">
          {body}
        </Text>
      ) : null}
    </div>
  );
}

function BlockCta({ cta }: { cta: { label: string; href: string } }) {
  return (
    <div>
      <Link
        href={cta.href}
        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
      >
        {cta.label}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </div>
  );
}
