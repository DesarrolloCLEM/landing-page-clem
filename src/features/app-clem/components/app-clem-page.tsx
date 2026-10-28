import { ClipboardCheck, FileSearch, Info, Smartphone } from "lucide-react";
import Image from "next/image";

import { Container, CtaBand, PageHeader, Section } from "@/components/layout";
import { buttonVariants, ExternalLink, Heading, IconBox, Text } from "@/components/ui";

import { appClemPage } from "../data/app-clem";

export function AppClemPage() {
  const { results, preRegistration, download } = appClemPage;

  return (
    <>
      <PageHeader
        title={appClemPage.title}
        description={appClemPage.description}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: appClemPage.title }]}
      />

      <Section aria-labelledby="results-title">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <IconBox tone="primary" size="lg">
              <FileSearch />
            </IconBox>
            <Heading as="h2" id="results-title" size="lg">
              {results.title}
            </Heading>
            <Text size="lead" tone="muted">
              {results.text}
            </Text>
            <ExternalLink
              href={results.action.href}
              className={buttonVariants({ size: "lg", className: "self-start" })}
            >
              {results.action.label}
              <span className="sr-only"> resultados</span>
            </ExternalLink>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-card shadow-card">
            <Image
              src={results.image.src}
              alt={results.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section tone="surface" aria-label="Registro previo y descarga de la app">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-card bg-white p-8 text-ink shadow-card">
            <IconBox tone="health" size="lg">
              <ClipboardCheck />
            </IconBox>
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
              {preRegistration.title}
            </h2>
            <p className="text-lg leading-relaxed text-ink-muted">{preRegistration.text}</p>
            <p className="flex gap-3 rounded-xl bg-brand-50 p-4 text-sm text-brand-800">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
              {preRegistration.notice}
            </p>
            <ExternalLink
              href={preRegistration.action.href}
              className={buttonVariants({ className: "self-start" })}
            >
              {preRegistration.action.label}
              <span className="sr-only"> registro previo</span>
            </ExternalLink>
          </div>

          <div className="flex flex-col gap-5 rounded-card bg-navy p-8 text-white shadow-card">
            <IconBox tone="accent" size="lg">
              <Smartphone />
            </IconBox>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{download.title}</h2>
            <p className="text-lg leading-relaxed text-brand-100">{download.text}</p>
            <ul className="flex flex-col gap-3 sm:flex-row">
              {download.stores.map((store) => (
                <li key={store.platform}>
                  <ExternalLink
                    href={store.href}
                    className="inline-flex min-h-12 flex-col justify-center rounded-xl bg-white px-5 py-2 text-navy transition-colors hover:bg-brand-50"
                  >
                    <span className="text-xs font-semibold text-ink-muted">{store.platform}</span>
                    <span className="font-heading font-bold">{store.label}</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
