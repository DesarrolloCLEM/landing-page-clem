"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Deep import: the @/components/layout barrel pulls in the footer's "use cache",
// which a Client Component cannot include.
import { Container } from "@/components/layout/container";
import { Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

import { heroLinks, heroSlides } from "../data/portfolio-home";

// Client island: switching slides is the only interactive part of the hero.
export function PortfolioHero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  return (
    <section aria-label="Presentación" className="relative isolate overflow-hidden bg-navy">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {heroSlides.map((item, itemIndex) => (
          <Image
            key={item.image.src}
            src={item.image.src}
            alt=""
            fill
            priority={itemIndex === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-700 motion-reduce:transition-none",
              itemIndex === index ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-navy/95 via-navy/80 to-navy/45" />
      </div>

      <Container className="flex min-h-[30rem] flex-col justify-center gap-6 py-20 lg:min-h-[34rem]">
        <Heading as="h1" size="display" className="max-w-3xl text-white">
          {slide.heading}
        </Heading>
        {slide.description && (
          <Text size="lead" className="max-w-2xl text-white/85">
            {slide.description}
          </Text>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={slide.cta.href}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-heading font-bold text-navy transition-colors hover:bg-brand-50"
          >
            {slide.cta.label}
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

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
        {heroSlides.map((item, itemIndex) => (
          <button
            key={item.image.src}
            type="button"
            aria-current={itemIndex === index ? "true" : undefined}
            onClick={() => setIndex(itemIndex)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              itemIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70",
            )}
          >
            <span className="sr-only">Ver diapositiva {itemIndex + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
