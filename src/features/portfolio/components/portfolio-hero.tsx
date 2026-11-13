import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

import { hero, heroLinks } from "../data/portfolio-home";

export function PortfolioHero() {
  return (
    <section aria-label="Presentación" className="relative isolate overflow-hidden bg-navy">
      <video
        // Decorative background: muted and looping, so it needs no controls or captions.
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={hero.poster.src}
        src={hero.videoSrc}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-navy/95 via-navy/80 to-navy/45"
      />

      <Container className="flex min-h-[30rem] flex-col justify-center gap-6 py-20 lg:min-h-[34rem]">
        <Heading as="h1" size="display" className="max-w-3xl text-white">
          {hero.heading}
        </Heading>
        <Text size="lead" className="max-w-2xl text-white/85">
          {hero.description}
        </Text>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={hero.cta.href}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-heading font-bold text-navy transition-colors hover:bg-brand-50"
          >
            {hero.cta.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <nav aria-label="Accesos del portafolio" className="mt-4 flex flex-wrap gap-2">
          {heroLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {link.label}
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
