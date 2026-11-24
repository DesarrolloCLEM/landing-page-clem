import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";

import { Container } from "@/components/layout";
import { Text } from "@/components/ui";

import { hero, heroLinks } from "../../data/portfolio-home";
import { CinematicHeroVideo } from "./cinematic-hero-video";

/**
 * Full-height hero. The headline is the only text with an entrance: its words rise inside a
 * mask (`.cine-word`, CSS only). Screen readers get the sentence once from the sr-only copy.
 */
export function CinematicHero() {
  const words = hero.heading.split(" ");

  return (
    <section
      aria-labelledby="cine-hero-title"
      className="relative isolate flex min-h-[calc(100svh-var(--portfolio-header-h))] overflow-hidden bg-navy text-white"
    >
      <CinematicHeroVideo src={hero.videoSrc} poster={hero.poster.src} />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-navy via-navy/70 to-navy/20"
      />

      <Container className="cine-hero-content flex flex-col justify-end gap-6 pt-24 pb-20 sm:pb-24">
        <h1
          id="cine-hero-title"
          className="max-w-5xl font-heading text-[clamp(2.75rem,7.5vw,6.75rem)] leading-[0.95] font-extrabold tracking-[-0.02em] text-balance text-white"
        >
          <span className="sr-only">{hero.heading}</span>
          <span aria-hidden="true">
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                {/* The padding keeps descenders (the "j" of "juntos") inside the mask. */}
                <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <span
                    className="cine-word inline-block"
                    style={{ "--i": index } as CSSProperties}
                  >
                    {word}
                  </span>
                </span>{" "}
              </span>
            ))}
          </span>
        </h1>

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

        <nav aria-label="Accesos del portafolio" className="flex flex-wrap gap-2">
          {heroLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
