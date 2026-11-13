import { ArrowRight, BedDouble, Mail, MapPin, Phone, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Grid, Section } from "@/components/layout";
import { Badge, Heading, IconBox, ImageGallery, StatCard, Text } from "@/components/ui";
import { contact, siteConfig } from "@/config/site";
import { expansionStats } from "@/config/stats";

import {
  contactClosing,
  institutionalInfrastructure,
  newInfrastructure,
  numberedServices,
  projectImages,
  serviceCards,
  servicesIntro,
  stories,
  storiesIntro,
  whoWeAre,
  whoWeAreTabs,
  whoWeAreTiles,
} from "../data/portfolio-home";
import { PortfolioHero } from "./portfolio-hero";

const tileIcons = {
  shield: ShieldCheck,
  trending: TrendingUp,
  bed: BedDouble,
} as const;

export function PortfolioHomePage() {
  return (
    <>
      <PortfolioHero />

      <Section id="quienesSomos" spacing="default" aria-labelledby="who-title">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Heading as="h2" id="who-title" size="xl">
              {whoWeAre.title}
            </Heading>
            <Text size="lead" className="max-w-3xl">
              {whoWeAre.heading}
            </Text>
            <Text tone="muted" className="max-w-3xl">
              {whoWeAre.description}
            </Text>
          </div>

          <nav aria-label="Secciones de presentación" className="flex flex-wrap gap-2">
            {whoWeAreTabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-white px-4 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
              >
                {tab.label}
              </Link>
            ))}
          </nav>

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
        </Container>
      </Section>

      <Section
        id="NuestrosServicios"
        tone="surface"
        spacing="default"
        aria-labelledby="services-title"
      >
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Heading as="h2" id="services-title" size="xl">
              Nuestros servicios
            </Heading>
            <Text tone="muted" className="max-w-3xl">
              {servicesIntro}
            </Text>
          </div>

          <Grid as="ul" cols={4} gap="sm" className="xl:grid-cols-5">
            {numberedServices.map((service) => (
              <li key={service.number}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-navy/90 px-2.5 py-1 font-heading text-xs font-bold text-white">
                      {service.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <h3 className="font-heading text-base font-bold text-navy">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{service.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </Grid>

          <Grid as="ul" cols={4} gap="md">
            {serviceCards.map((card) => (
              <li key={card.href}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="flex items-center justify-between gap-2 font-heading text-lg font-bold text-navy">
                      {card.title}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                      />
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{card.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section spacing="default" aria-labelledby="project-title">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Heading as="h2" id="project-title" size="xl">
              {newInfrastructure.title}
            </Heading>
            <Text tone="muted" className="max-w-3xl">
              {newInfrastructure.description}
            </Text>
          </div>
          <ImageGallery images={projectImages} />
          <div>
            <Link
              href={newInfrastructure.cta.href}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 font-heading font-bold text-white transition-opacity hover:opacity-90"
            >
              {newInfrastructure.cta.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="default" aria-labelledby="institutional-title">
        <Container className="flex flex-col gap-8">
          <Heading as="h2" id="institutional-title" size="xl">
            Infraestructura institucional
          </Heading>
          <Grid as="ul" cols={3} gap="md">
            {institutionalInfrastructure.map((item) => (
              <li
                key={item.caption}
                className="overflow-hidden rounded-card border border-border bg-white shadow-card"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="p-5 font-heading text-lg font-bold text-navy">{item.caption}</p>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="Infraestructura" spacing="default" aria-labelledby="growth-title">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Heading as="h2" id="growth-title" size="xl">
              {newInfrastructure.title}
            </Heading>
            <Text tone="muted" className="max-w-3xl">
              {newInfrastructure.description}
            </Text>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {expansionStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} variant="card" />
            ))}
          </dl>
          <div>
            <Link
              href="/portafolio/infraestructura/"
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              Conoce más sobre el proyecto
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="Historia" tone="surface" spacing="default" aria-labelledby="stories-title">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Heading as="h2" id="stories-title" size="xl">
              Historias que inspiran
            </Heading>
            <Text tone="muted" className="max-w-3xl">
              {storiesIntro}
            </Text>
          </div>
          <Grid as="ul" cols={3} gap="md">
            {stories.map((story) => (
              <li
                key={story.title}
                className="flex flex-col overflow-hidden rounded-card border border-border bg-white shadow-card"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-2 p-5">
                  <Badge tone="primary">{story.tag}</Badge>
                  <h3 className="font-heading text-lg font-bold text-navy">{story.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{story.description}</p>
                </div>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section id="contacto" tone="navy" spacing="default" aria-labelledby="contact-title">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Heading as="h2" id="contact-title" size="xl">
            Contacto
          </Heading>
          <Text size="lead" className="max-w-2xl">
            {contactClosing}
          </Text>
          <address className="flex flex-col gap-3 text-white/85 not-italic">
            <p className="flex items-center justify-center gap-2">
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              {contact.address.full}
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail aria-hidden="true" className="size-4 shrink-0" />
              <a href={contact.email.href} className="hover:underline">
                {contact.email.label}
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone aria-hidden="true" className="size-4 shrink-0" />
              <a href={contact.phone.href} className="hover:underline">
                {contact.phone.label}
              </a>
            </p>
          </address>
          <p className="text-sm text-white/60">
            {siteConfig.name} · {siteConfig.tagline}
          </p>
        </Container>
      </Section>
    </>
  );
}
