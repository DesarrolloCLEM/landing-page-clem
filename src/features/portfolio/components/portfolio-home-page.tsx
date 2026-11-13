import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Grid, Section } from "@/components/layout";
import { Heading, StatCard, Text } from "@/components/ui";
import { expansionStats } from "@/config/stats";
import { contact, siteConfig } from "@/config/site";

import {
  heroSlogan,
  heroSubtitle,
  quickLinks,
  serviceCards,
  stories,
  whoWeAre,
} from "../data/portfolio-home";

export function PortfolioHomePage() {
  return (
    <>
      {/* Hero */}
      <Section tone="navy" spacing="default" aria-label="Presentación">
        <Container className="flex flex-col items-center gap-6 text-center text-white">
          <Heading as="h1" size="display">
            {heroSlogan}
          </Heading>
          <Text size="lead" className="max-w-2xl text-white/80">
            {heroSubtitle}
          </Text>
        </Container>
      </Section>

      {/* Quiénes somos */}
      <Section spacing="compact" aria-labelledby="who-title">
        <Container className="flex flex-col gap-6">
          <Heading as="h2" id="who-title" size="lg">
            {whoWeAre.title}
          </Heading>
          <Text size="lead" tone="muted" className="max-w-3xl">
            {whoWeAre.heading}
          </Text>
          <Text tone="muted" className="max-w-3xl">
            {whoWeAre.description}
          </Text>
          <nav aria-label="Accesos rápidos" className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-primary hover:bg-brand-50"
              >
                {link.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            ))}
          </nav>
        </Container>
      </Section>

      {/* Servicios */}
      <Section id="servicios" tone="surface" spacing="compact" aria-labelledby="services-title">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Heading as="h2" id="services-title" size="lg">
              Nuestros servicios
            </Heading>
            <Text tone="muted" className="max-w-2xl">
              Oferta asistencial de mediana y alta complejidad, estructurada para responder de
              manera integral a las necesidades de nuestros pacientes.
            </Text>
          </div>
          <Grid as="ul" cols={3} gap="md">
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
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <h3 className="font-heading text-lg font-bold text-navy">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{card.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Infraestructura */}
      <Section id="infraestructura" spacing="compact" aria-labelledby="infra-title">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Heading as="h2" id="infra-title" size="lg">
              Nueva infraestructura
            </Heading>
            <Text tone="muted" className="max-w-2xl">
              Construimos el futuro de la atención en salud a través de un proyecto de expansión que
              fortalecerá nuestra capacidad instalada.
            </Text>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {expansionStats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} variant="card" />
            ))}
          </dl>
          <Link
            href="/portafolio/infraestructura/"
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            Conoce más sobre el proyecto
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Container>
      </Section>

      {/* Historias que inspiran */}
      <Section tone="surface" spacing="compact" aria-labelledby="stories-title">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Heading as="h2" id="stories-title" size="lg">
              Historias que inspiran
            </Heading>
            <Text tone="muted">
              Cada historia refleja el compromiso de nuestro equipo con una atención centrada en las
              personas.
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
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="font-heading text-lg font-bold text-navy">{story.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{story.description}</p>
                </div>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Contacto */}
      <Section tone="navy" spacing="compact" aria-labelledby="contact-title">
        <Container className="flex flex-col items-center gap-6 text-center text-white">
          <Heading as="h2" id="contact-title" size="lg">
            Comprometidos con la salud, preparados para el futuro
          </Heading>
          <address className="flex flex-col gap-3 text-white/80 not-italic">
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
