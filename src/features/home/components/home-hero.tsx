import { CalendarCheck, FileSearch, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout";
import { buttonVariants, ExternalLink } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

import { hero } from "../data/home";

const outlineInverse =
  "bg-transparent text-white ring-2 ring-white/70 ring-inset hover:bg-white/10";

export function HomeHero() {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden bg-navy">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      {/* Keeps white text above 4.5:1 over any part of the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-navy/80 lg:bg-transparent lg:bg-linear-to-r lg:from-navy/95 lg:via-navy/80 lg:to-navy/20"
      />
      <Container className="flex min-h-[32rem] flex-col justify-center gap-6 py-16 sm:min-h-[36rem] lg:py-24">
        <p className="font-heading text-sm font-bold tracking-widest text-sky-accent uppercase">
          {siteConfig.tagline}
        </p>
        <h1
          id="page-title"
          className="max-w-2xl font-heading text-4xl leading-tight font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
        >
          {hero.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl">
          {hero.subtitle}
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
          <Link
            href={hero.actions.appointment.href}
            className={buttonVariants({ variant: "inverse", size: "lg" })}
          >
            <CalendarCheck aria-hidden="true" />
            {hero.actions.appointment.label}
          </Link>
          <Link
            href={hero.actions.app.href}
            className={cn(buttonVariants({ size: "lg" }), outlineInverse)}
          >
            <Smartphone aria-hidden="true" />
            {hero.actions.app.label}
          </Link>
          <ExternalLink
            href={hero.actions.results.href}
            className={cn(buttonVariants({ size: "lg" }), outlineInverse)}
          >
            <FileSearch aria-hidden="true" />
            {hero.actions.results.label}
          </ExternalLink>
        </div>
      </Container>
    </section>
  );
}
