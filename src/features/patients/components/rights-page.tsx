import { Check } from "lucide-react";

import { Container, CtaBand, PageHeader, Section } from "@/components/layout";
import { Heading, Tabs } from "@/components/ui";

import { type RightsGroup, rightsPage } from "../data/patients";

function GroupList({ title, groups }: { title: string; groups: RightsGroup[] }) {
  return (
    <div className="flex flex-col gap-6">
      <Heading as="h2" size="lg">
        {title}
      </Heading>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.title}
            className="flex flex-col gap-4 rounded-card border border-border bg-white p-6 text-ink shadow-card"
          >
            <h3 className="font-heading text-lg font-bold text-primary">{group.title}</h3>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-health-strong" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export function RightsPage() {
  const { duties, rights } = rightsPage;

  return (
    <>
      <PageHeader
        title={rightsPage.title}
        description={rightsPage.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Usuarios", href: "/usuarios/" },
          { label: rightsPage.title },
        ]}
      />
      <Section aria-label={rightsPage.tabsLabel}>
        <Container>
          <Tabs
            label={rightsPage.tabsLabel}
            items={[
              {
                id: "deberes",
                label: "Deberes",
                content: <GroupList title={duties.title} groups={duties.groups} />,
              },
              {
                id: "derechos",
                label: "Derechos",
                content: <GroupList title={rights.title} groups={rights.groups} />,
              },
            ]}
          />
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
