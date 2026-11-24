import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

import { numberedServices, serviceCards, servicesIntro } from "../../data/portfolio-home";

const cardName = (index: number) => `--cine-card-${index}`;

/**
 * Services in two movements (see globals.css, `cine-stack` and `cine-hscroll`):
 * - the five numbered units pile up as pinned cards from 768px;
 * - the eight service cards travel sideways while the section is pinned, from 768px.
 * Without those rules (mobile, reduced motion, no scroll timelines) the units are a list and the
 * services a swipeable row on mobile or a grid on larger screens.
 */
export function CinematicServices() {
  const lastIndex = numberedServices.length - 1;

  return (
    <section
      id="NuestrosServicios"
      aria-labelledby="cine-services-title"
      className="bg-surface py-20 lg:py-28"
    >
      <Container className="flex flex-col gap-4">
        <Heading as="h2" id="cine-services-title" size="xl">
          Nuestros servicios
        </Heading>
        <Text size="lead" tone="muted" className="max-w-3xl">
          {servicesIntro}
        </Text>
      </Container>

      <Container className="mt-12">
        <ol
          className="cine-stack flex flex-col gap-6"
          style={
            {
              "--cards": numberedServices.map((_, index) => cardName(index)).join(", "),
            } as CSSProperties
          }
        >
          {numberedServices.map((service, index) => (
            <li
              key={service.number}
              className="cine-stack-item"
              style={{ "--i": index, "--card": cardName(index) } as CSSProperties}
            >
              <Link
                href={service.href}
                className={cn(
                  index < lastIndex && "cine-stack-shrink",
                  "group grid overflow-hidden rounded-card bg-white shadow-card md:h-[min(28rem,calc(100svh-var(--portfolio-header-h)-7rem))] md:grid-cols-2",
                )}
                style={
                  index < lastIndex
                    ? ({ "--next-card": cardName(index + 1) } as CSSProperties)
                    : undefined
                }
              >
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1280px) 40vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 p-6 sm:p-10">
                  <span
                    aria-hidden="true"
                    className="font-heading text-6xl leading-none font-extrabold text-brand-300 tabular-nums"
                  >
                    {service.number}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-heading text-2xl font-extrabold text-navy transition-colors group-hover:text-primary sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="text-ink-muted">{service.summary}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </Container>

      <div
        className="cine-hscroll mt-16 md:mt-24"
        style={{ "--count": serviceCards.length } as CSSProperties}
      >
        <div className="cine-hscroll-viewport mx-auto max-w-7xl">
          <ul
            aria-label="Servicios del portafolio"
            className="cine-hscroll-track motion-carousel flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:scroll-px-6 sm:px-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0 lg:grid-cols-4 lg:px-8"
          >
            {serviceCards.map((card) => (
              <li key={card.href} className="w-[78%] shrink-0 snap-start sm:w-[45%] md:w-auto">
                <Link href={card.href} className="group flex flex-col gap-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 80vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy transition-colors group-hover:text-primary">
                    {card.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
