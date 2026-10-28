import { ArrowRight, Check, MessageSquareHeart, Users } from "lucide-react";
import Link from "next/link";

import { Container, CtaBand, Grid, PageHeader, Section } from "@/components/layout";
import {
  buttonVariants,
  ExternalLink,
  Heading,
  IconBox,
  SectionHeading,
  SocialIcon,
  TestimonialCard,
  Text,
} from "@/components/ui";
import { contact } from "@/config/site";
import { testimonials } from "@/config/testimonials";

import { usersPage } from "../data/patients";

export function UsersPage() {
  const { commitments, alliance, procedures, opinion } = usersPage;

  return (
    <>
      <PageHeader
        eyebrow={usersPage.eyebrow}
        title={usersPage.title}
        description={usersPage.description}
        image={usersPage.image}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Usuarios" }]}
      >
        <ExternalLink
          href={contact.whatsappUserAlliance.href}
          className={buttonVariants({ size: "lg", className: "self-start" })}
        >
          <SocialIcon network="whatsapp" />
          {usersPage.allianceAction}
        </ExternalLink>
      </PageHeader>

      <Section aria-labelledby="siau-title">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeading titleId="siau-title" eyebrow="SIAU" title={commitments.title} />
            {[...usersPage.siau, ...commitments.paragraphs].map((paragraph) => (
              <Text key={paragraph.slice(0, 32)} tone="muted">
                {paragraph}
              </Text>
            ))}
          </div>
          <aside
            aria-labelledby="alliance-title"
            className="flex flex-col gap-5 self-start rounded-card bg-brand-50 p-8"
          >
            <IconBox tone="primary" size="lg">
              <Users />
            </IconBox>
            <div className="flex flex-col gap-1">
              <Heading as="h3" id="alliance-title" size="md">
                {alliance.title}
              </Heading>
              <Text tone="muted">{alliance.subtitle}</Text>
            </div>
            <ul className="flex flex-col gap-3">
              {alliance.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-health-strong" />
                  {item}
                </li>
              ))}
            </ul>
            <ExternalLink
              href={contact.whatsappUserAlliance.href}
              className={buttonVariants({ variant: "secondary", className: "self-start" })}
            >
              {usersPage.allianceAction}
            </ExternalLink>
          </aside>
        </Container>
      </Section>

      <Section tone="surface" aria-labelledby="users-testimonials-title">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            titleId="users-testimonials-title"
            title={usersPage.testimonials.title}
            description={usersPage.testimonials.description}
            align="center"
          />
          <Grid as="ul" cols={3}>
            {testimonials.map((testimonial) => (
              <li key={testimonial.name}>
                <TestimonialCard
                  name={testimonial.name}
                  procedure={testimonial.procedure}
                  summary={testimonial.summary}
                  image={testimonial.image}
                  link={{ href: testimonial.storyUrl, label: usersPage.testimonials.linkLabel }}
                />
              </li>
            ))}
          </Grid>
          <div className="flex flex-col items-center gap-4 rounded-card bg-white p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <MessageSquareHeart
                aria-hidden="true"
                className="hidden size-10 text-primary sm:block"
              />
              <Heading as="h3" size="sm" className="text-navy">
                {opinion.title}
              </Heading>
            </div>
            <Link href={opinion.action.href} className={buttonVariants({ className: "shrink-0" })}>
              {opinion.action.label}
            </Link>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="procedures-title">
        <Container className="flex flex-col gap-8">
          <SectionHeading titleId="procedures-title" title={procedures.title} size="lg" />
          <Grid as="ul" cols={3} gap="sm">
            {procedures.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col gap-2 rounded-card border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex items-center justify-between gap-2 font-heading text-lg font-bold text-navy">
                    {item.title}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                  <span className="text-ink-muted">{item.description}</span>
                </Link>
              </li>
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
