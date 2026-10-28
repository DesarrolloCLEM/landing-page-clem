import { ShieldCheck } from "lucide-react";

import { Container, CtaBand, PageHeader, Section } from "@/components/layout";
import { Heading, IconBox, Text } from "@/components/ui";

import { policies, policiesHeader } from "../data/policies";
import { aboutTrail } from "./breadcrumbs";

export function PoliciesPage() {
  return (
    <>
      <PageHeader
        title={policiesHeader.title}
        description={policiesHeader.description}
        breadcrumbs={aboutTrail(policiesHeader.title)}
      />
      <Section aria-label={policiesHeader.title}>
        <Container className="grid gap-10 lg:grid-cols-[18rem_1fr]">
          <nav aria-labelledby="policies-index" className="lg:sticky lg:top-28 lg:self-start">
            <h2
              id="policies-index"
              className="mb-3 font-heading text-sm font-bold tracking-widest text-emphasis uppercase"
            >
              {policiesHeader.indexTitle}
            </h2>
            <ol className="flex flex-col gap-1 border-s border-border">
              {policies.map((policy) => (
                <li key={policy.id}>
                  <a
                    href={`#${policy.id}`}
                    className="-ms-px block border-s-2 border-transparent py-2 ps-4 text-sm font-semibold text-ink-muted hover:border-primary hover:text-primary"
                  >
                    {policy.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex flex-col gap-6">
            {policies.map((policy) => (
              <article
                key={policy.id}
                id={policy.id}
                aria-labelledby={`${policy.id}-title`}
                className="flex flex-col gap-4 rounded-card border border-border bg-white p-6 shadow-card sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <IconBox tone="primary">
                    <ShieldCheck />
                  </IconBox>
                  <Heading as="h2" id={`${policy.id}-title`} size="md">
                    {policy.title}
                  </Heading>
                </div>
                <Text tone="muted">{policy.text}</Text>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
