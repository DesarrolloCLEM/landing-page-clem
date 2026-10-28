import { Info } from "lucide-react";

import { Container, PageHeader, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

import { dataPolicy } from "../data/data-policy";

export function DataPolicyPage() {
  return (
    <>
      <PageHeader
        title={dataPolicy.title}
        description={dataPolicy.description}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: dataPolicy.title }]}
      />
      <Section aria-label={dataPolicy.title}>
        <Container size="narrow" className="flex flex-col gap-10">
          <p className="flex gap-3 rounded-card bg-brand-50 p-4 text-sm text-brand-800">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            {dataPolicy.notice}
          </p>
          {dataPolicy.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="flex flex-col gap-3"
            >
              <Heading as="h2" id={`${section.id}-title`} size="md">
                {section.title}
              </Heading>
              {section.paragraphs?.map((paragraph) => (
                <Text key={paragraph.slice(0, 32)} tone="muted">
                  {paragraph}
                </Text>
              ))}
              {section.items && (
                <ul className="flex list-disc flex-col gap-2 ps-5 text-muted">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </Container>
      </Section>
    </>
  );
}
