import { ArrowRight, Bone, HeartPulse, type LucideIcon, Scissors, Stethoscope } from "lucide-react";
import Link from "next/link";

import { Container, Grid, Section } from "@/components/layout";
import { buttonVariants, IconBox, SectionHeading } from "@/components/ui";

import { careAreas, featuredSpecialties } from "../data/home";
import type { CareArea } from "../types";
import { ServiceCardGrid } from "./service-card-grid";

const icons: Record<CareArea["icon"], LucideIcon> = {
  surgery: Scissors,
  specialized: Stethoscope,
  critical: HeartPulse,
  orthopedics: Bone,
};

export function CareAreasSection() {
  return (
    <Section aria-labelledby="care-areas-title">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            titleId="care-areas-title"
            eyebrow={careAreas.eyebrow}
            title={careAreas.title}
            description={careAreas.description}
          />
          <Grid as="ul" cols={4} gap="sm">
            {careAreas.items.map((area) => {
              const Icon = icons[area.icon];
              return (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="group flex h-full items-center gap-4 rounded-card border border-border bg-white p-5 font-heading font-bold text-navy shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <IconBox tone="primary">
                      <Icon />
                    </IconBox>
                    <span className="flex-1">{area.title}</span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              );
            })}
          </Grid>
        </div>

        <div className="flex flex-col gap-10">
          <SectionHeading
            as="h2"
            size="lg"
            titleId="featured-specialties-title"
            eyebrow={featuredSpecialties.eyebrow}
            title={featuredSpecialties.title}
            description={featuredSpecialties.description}
          />
          <ServiceCardGrid items={featuredSpecialties.items} />
          <Link
            href={featuredSpecialties.allServices.href}
            className={buttonVariants({ variant: "secondary", className: "self-center" })}
          >
            {featuredSpecialties.allServices.label}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
