import { Users } from "lucide-react";

import { Container, CtaBand, Grid, PageHeader, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

import { committees, committeesHeader } from "../data/organization";
import { aboutTrail } from "./breadcrumbs";

export function CommitteesPage() {
  return (
    <>
      <PageHeader
        title={committeesHeader.title}
        description={committeesHeader.description}
        breadcrumbs={aboutTrail(committeesHeader.title)}
      />
      <Section aria-labelledby="committees-title">
        <Container className="flex flex-col gap-8">
          <Heading as="h2" id="committees-title" size="md">
            {committeesHeader.listTitle}
          </Heading>
          <Grid as="ul" cols={3} gap="sm">
            {committees.map((committee) => (
              <li
                key={committee}
                className="flex items-center gap-3 rounded-card border border-border bg-white p-4 font-semibold text-ink shadow-card"
              >
                <Users aria-hidden="true" className="size-5 shrink-0 text-primary" />
                {committee}
              </li>
            ))}
          </Grid>
          <Text size="lead" tone="muted" className="max-w-3xl">
            {committeesHeader.closing}
          </Text>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
