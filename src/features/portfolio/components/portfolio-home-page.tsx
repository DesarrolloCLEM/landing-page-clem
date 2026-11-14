import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Grid, Section } from "@/components/layout";
import { Badge, Heading, ImageGallery, Text } from "@/components/ui";
import { contact, siteConfig } from "@/config/site";

import {
  contactClosing,
  expansionHighlights,
  institutionalInfrastructure,
  newInfrastructure,
  numberedServices,
  projectImages,
  serviceCards,
  servicesIntro,
  stories,
  storiesIntro,
} from "../data/portfolio-home";
import { PortfolioHero } from "./portfolio-hero";
import { PortfolioWhoWeAre } from "./portfolio-who-we-are";

export function PortfolioHomePage() {
  return (
    <>
      <PortfolioHero />

      <PortfolioWhoWeAre />

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
            <Text size="lead" tone="muted" className="max-w-3xl">
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
                  <div className="relative aspect-square">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <h3 className="font-heading text-base font-bold text-navy">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{service.summary}</p>
                    <span
                      aria-hidden="true"
                      className="mt-auto pt-2 font-heading text-2xl font-extrabold text-primary/30"
                    >
                      {service.number}
                    </span>
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
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <h3 className="flex flex-1 items-center justify-between gap-2 p-5 font-heading text-lg font-bold text-navy">
                    {card.title}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    />
                  </h3>
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
          <div className="flex flex-col items-start gap-4">
            <Text size="lead" tone="muted" className="max-w-3xl">
              {newInfrastructure.description}
            </Text>
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
                <div className="relative aspect-[3/2]">
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
          <div className="relative aspect-[16/9] overflow-hidden rounded-card">
            <Image
              src={newInfrastructure.image.src}
              alt={newInfrastructure.image.alt}
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="grid gap-6 sm:grid-cols-3">
            {expansionHighlights.map((stat) => (
              <li
                key={stat.caption}
                className="flex flex-col items-center gap-1 rounded-card border border-border bg-white p-6 text-center shadow-card"
              >
                <p className="font-heading text-sm font-bold tracking-wide text-primary uppercase">
                  {stat.caption}
                </p>
                <p className="font-heading text-4xl font-extrabold text-navy">{stat.value}</p>
                {stat.label ? <p className="text-sm text-ink-muted">{stat.label}</p> : null}
              </li>
            ))}
          </ul>
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
              <li key={story.title}>
                <Link
                  href={story.href}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-2 p-5">
                    <Badge tone="primary">{story.tag}</Badge>
                    <h3 className="font-heading text-lg font-bold text-navy">{story.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{story.description}</p>
                  </div>
                </Link>
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
