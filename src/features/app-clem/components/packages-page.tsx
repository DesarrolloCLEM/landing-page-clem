import { Activity, HeartPulse, type LucideIcon, Sparkles } from "lucide-react";

import { Container, CtaBand, Grid, PageHeader, Section } from "@/components/layout";
import { buttonVariants, ExternalLink, IconBox, Text } from "@/components/ui";
import { healthPackages } from "@/config/site";

import { packagesPage } from "../data/app-clem";

const icons: Record<string, LucideIcon> = {
  "latidos-de-vida": HeartPulse,
  "mujer-sana": Sparkles,
  "listo-para-entrenar": Activity,
};

export function PackagesPage() {
  return (
    <>
      <PageHeader
        title={packagesPage.title}
        description={packagesPage.description}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: packagesPage.title }]}
      />
      <Section aria-label="Paquetes disponibles">
        <Container className="flex flex-col gap-8">
          <Grid as="ul" cols={3}>
            {healthPackages.map((item) => {
              const Icon = icons[item.slug] ?? HeartPulse;
              return (
                <li
                  key={item.slug}
                  className="flex flex-col gap-4 rounded-card border border-border bg-white p-6 text-ink shadow-card"
                >
                  <IconBox tone="primary" size="lg">
                    <Icon />
                  </IconBox>
                  <h2 className="font-heading text-xl font-bold text-navy">{item.name}</h2>
                  <p className="flex-1 leading-relaxed text-ink-muted">{item.description}</p>
                  <ExternalLink
                    href={item.href}
                    className={buttonVariants({ className: "self-start" })}
                  >
                    {packagesPage.action}
                    <span className="sr-only">: {item.name}</span>
                  </ExternalLink>
                </li>
              );
            })}
          </Grid>
          <Text size="small" tone="muted">
            {packagesPage.note}
          </Text>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
