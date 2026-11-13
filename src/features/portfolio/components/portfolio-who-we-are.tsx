import { ArrowRight, BedDouble, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Grid, Section } from "@/components/layout";
import { Eyebrow, Heading, IconBox, StatCard, Tabs, Text, type TabItem } from "@/components/ui";
import { installedCapacity } from "@/config/stats";

import {
  growthStats,
  presentationTab,
  whoWeAre,
  whoWeAreTiles,
  whyChooseUs,
  whyChooseUsIntro,
} from "../data/portfolio-home";

const tileIcons = {
  shield: ShieldCheck,
  trending: TrendingUp,
  bed: BedDouble,
} as const;

function PresentationPanel() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-card">
        <Image
          src={presentationTab.image.src}
          alt={presentationTab.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <Text tone="muted">{presentationTab.description}</Text>
    </div>
  );
}

function WhyChooseUsPanel() {
  return (
    <div className="flex flex-col gap-6">
      <Text tone="muted">{whyChooseUsIntro}</Text>
      <Grid as="ul" cols={2} gap="md">
        {whyChooseUs.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="group flex h-full items-start gap-4 rounded-card border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <IconBox>
                <ArrowRight />
              </IconBox>
              <span className="flex flex-col gap-1">
                <span className="font-heading text-lg font-bold text-navy">{item.title}</span>
                <span className="text-sm leading-relaxed text-ink-muted">{item.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </Grid>
    </div>
  );
}

function CapacityPanel() {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {installedCapacity.map((stat) => (
        <StatCard key={stat.label} value={stat.value} label={stat.label} variant="card" />
      ))}
    </dl>
  );
}

function GrowthPanel() {
  return (
    <ul className="grid gap-6 sm:grid-cols-3">
      {growthStats.map((stat) => (
        <li
          key={stat.caption}
          className="flex flex-col items-center gap-1 rounded-card border border-border bg-white p-6 text-center shadow-card"
        >
          <p className="font-heading text-sm font-bold tracking-wide text-primary uppercase">
            {stat.caption}
          </p>
          <p className="font-heading text-4xl font-extrabold text-navy">{stat.value}</p>
          <p className="text-sm text-ink-muted">{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}

const tabs: TabItem[] = [
  { id: "presentacion", label: "Presentación", content: <PresentationPanel /> },
  { id: "por-que-elegirnos", label: "Por qué elegirnos", content: <WhyChooseUsPanel /> },
  { id: "capacidad-instalada", label: "Capacidad instalada", content: <CapacityPanel /> },
  { id: "crecimiento", label: "Crecimiento", content: <GrowthPanel /> },
];

export function PortfolioWhoWeAre() {
  return (
    <Section id="quienesSomos" spacing="default" aria-labelledby="who-title">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Eyebrow>{whoWeAre.title}</Eyebrow>
          <Heading as="h2" id="who-title" size="xl">
            {whoWeAre.title}
          </Heading>
          <Text size="lead" tone="muted" className="max-w-3xl">
            {whoWeAre.description}
          </Text>
        </div>

        <Grid as="ul" cols={3} gap="md">
          {whoWeAreTiles.map((tile) => {
            const Icon = tileIcons[tile.icon];
            return (
              <li key={tile.label}>
                <Link
                  href={tile.href}
                  className="group flex h-full flex-col gap-3 rounded-card border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <IconBox size="lg">
                    <Icon />
                  </IconBox>
                  <h3 className="flex items-center justify-between gap-2 font-heading text-lg font-bold text-navy">
                    {tile.label}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    />
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{tile.description}</p>
                </Link>
              </li>
            );
          })}
        </Grid>

        <Tabs items={tabs} label="Secciones de ¿Quiénes somos?" />
      </Container>
    </Section>
  );
}
