import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout";
import { CountUp, Heading, Text } from "@/components/ui";

import {
  capacityStats,
  presentationTab,
  whoWeAre,
  whoWeAreTiles,
  whyChooseUs,
  whyChooseUsDescription,
} from "../../data/portfolio-home";

/**
 * "Quiénes somos" in two columns: from 1024px the text column stays pinned (`.cine-pin`) while
 * the other column scrolls the content of the current home tabs, shown in sequence. The
 * "Crecimiento" figures are the same as the new infrastructure ones and appear there.
 */
export function CinematicWhoWeAre() {
  return (
    <section id="quienesSomos" aria-labelledby="cine-who-title" className="bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-20">
        <div className="cine-pin flex flex-col gap-6">
          <Heading as="h2" id="cine-who-title" size="md" className="text-primary">
            {whoWeAre.title}
          </Heading>
          <p className="font-heading text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.1] font-extrabold text-balance text-navy">
            {whoWeAre.subtitle}
          </p>
          <Text tone="muted" className="max-w-prose">
            {whoWeAre.description}
          </Text>
          <ul className="flex flex-wrap gap-2" aria-label="Accesos de Quiénes somos">
            {whoWeAreTiles.map((tile) => (
              <li key={tile.label}>
                <Link
                  href={tile.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
                >
                  {tile.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          <div className="cine-drift-frame relative aspect-square overflow-hidden rounded-card">
            <div className="cine-drift absolute inset-0">
              <Image
                src={whoWeAre.image.src}
                alt={whoWeAre.image.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <Heading as="h3" size="md">
              Presentación
            </Heading>
            <Text tone="muted" className="max-w-prose">
              {presentationTab.description}
            </Text>
            {/* 410 x 280 source: shown at its natural size so it never looks blurry. */}
            <Image
              src={presentationTab.image.src}
              alt={presentationTab.image.alt}
              width={410}
              height={280}
              className="h-auto w-full max-w-[410px] rounded-card"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Heading as="h3" size="md">
              Por qué elegirnos
            </Heading>
            <Text tone="muted" className="max-w-prose">
              {whyChooseUsDescription}
            </Text>
            <ul className="border-t border-border">
              {whyChooseUs.map((item) => (
                <li key={item.title} className="border-b border-border">
                  <Link
                    href={item.href}
                    className="flex min-h-16 items-center py-4 font-heading text-xl font-bold text-navy transition-colors hover:text-primary sm:text-2xl"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Heading as="h3" size="md">
              Capacidad instalada
            </Heading>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
              {capacityStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1 border-t border-border pt-4">
                  <dt className="order-2 text-sm text-ink-muted">{stat.label}</dt>
                  <dd className="order-1 font-heading text-5xl font-extrabold text-navy tabular-nums">
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
