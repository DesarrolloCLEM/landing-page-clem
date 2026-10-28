import { Container, Section } from "@/components/layout";
import { Heading, SectionHeading, StatCard, Text } from "@/components/ui";
import { installedCapacity } from "@/config/stats";

import { welcome } from "../data/home";

export function WelcomeSection() {
  return (
    <Section aria-labelledby="welcome-title">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <SectionHeading titleId="welcome-title" eyebrow={welcome.eyebrow} title={welcome.title} />
          <Text size="lead" tone="muted">
            {welcome.text}
          </Text>
        </div>
        <div className="flex flex-col gap-5">
          <Heading as="h3" size="sm">
            {welcome.statsTitle}
          </Heading>
          <dl className="motion-stagger grid grid-cols-2 gap-4 sm:grid-cols-3">
            {installedCapacity.map((stat) => (
              <StatCard key={stat.label} variant="card" value={stat.value} label={stat.label} />
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
