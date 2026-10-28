import {
  ArrowRight,
  CalendarCheck,
  Check,
  Compass,
  Eye,
  type LucideIcon,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, CtaBand, Grid, PageHeader, Section } from "@/components/layout";
import { Heading, IconBox, SectionHeading, StatCard, Text } from "@/components/ui";
import { institutionStats } from "@/config/stats";

import {
  aboutHeader,
  capacityTitle,
  history,
  mission,
  principles,
  quickLinks,
  subpages,
  values,
  vision,
} from "../data/about";
import type { QuickLink } from "../types";

const quickLinkIcons: Record<QuickLink["icon"], LucideIcon> = {
  contact: MessageCircle,
  appointment: CalendarCheck,
  app: Smartphone,
};

export function AboutPage() {
  return (
    <>
      <PageHeader
        title={aboutHeader.title}
        description={aboutHeader.description}
        image={aboutHeader.image}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: aboutHeader.title }]}
      >
        <nav aria-label="Accesos rápidos">
          <ul className="grid gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = quickLinkIcons[link.icon];
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex h-full items-center gap-3 rounded-card border border-border bg-white p-4 font-heading font-bold text-navy shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <Icon aria-hidden="true" className="size-5 shrink-0 text-primary" />
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </PageHeader>

      <Section spacing="compact" aria-labelledby="capacity-title">
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id="capacity-title" size="md">
            {capacityTitle}
          </Heading>
          <dl className="motion-stagger grid grid-cols-2 gap-4 lg:grid-cols-4">
            {institutionStats.map((stat) => (
              <StatCard key={stat.label} variant="card" value={stat.value} label={stat.label} />
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="history-title">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeading titleId="history-title" eyebrow="Desde 2006" title={history.title} />
            {history.paragraphs.map((paragraph) => (
              <Text key={paragraph.slice(0, 24)} tone="muted">
                {paragraph}
              </Text>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {history.images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-card shadow-card"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="mission-title">
        <Container className="flex flex-col gap-10">
          <h2 id="mission-title" className="sr-only">
            Misión y visión
          </h2>
          <Grid cols={2}>
            {[
              { ...mission, icon: Compass },
              { ...vision, icon: Eye },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-4 rounded-card bg-brand-50 p-8"
              >
                <IconBox tone="primary" size="lg">
                  <item.icon />
                </IconBox>
                <Heading as="h3" size="md">
                  {item.title}
                </Heading>
                <Text tone="muted">{item.text}</Text>
              </article>
            ))}
          </Grid>

          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div className="flex flex-col gap-4">
              <Heading as="h3" size="md">
                {values.title}
              </Heading>
              <ul className="flex flex-wrap gap-2">
                {values.items.map((value) => (
                  <li
                    key={value}
                    className="rounded-full bg-health-50 px-4 py-2 font-semibold text-health-strong"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Heading as="h3" size="md">
                {principles.title}
              </Heading>
              <ul className="grid gap-3 sm:grid-cols-2">
                {principles.items.map((principle) => (
                  <li key={principle} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-health-strong"
                    />
                    <span className="text-muted">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="subpages-title">
        <Container className="flex flex-col gap-8">
          <SectionHeading titleId="subpages-title" title={subpages.title} size="lg" />
          <Grid as="ul" cols={4} gap="sm">
            {subpages.items.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group flex h-full flex-col gap-2 rounded-card border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex items-center justify-between gap-2 font-heading font-bold text-navy">
                    {page.title}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="text-sm text-ink-muted">{page.description}</span>
                </Link>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
