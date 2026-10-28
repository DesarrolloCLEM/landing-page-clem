import Image from "next/image";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { buttonVariants, SectionHeading, Text } from "@/components/ui";

import { quality } from "../data/home";

export function QualitySection() {
  return (
    <Section tone="navy" aria-labelledby="quality-title">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[3/2] overflow-hidden rounded-card">
          <Image
            src={quality.image.src}
            alt={quality.image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <SectionHeading titleId="quality-title" eyebrow={quality.eyebrow} title={quality.title} />
          <Text size="lead" tone="muted">
            {quality.text}
          </Text>
          <Link
            href={quality.action.href}
            className={buttonVariants({ variant: "inverse", size: "lg", className: "self-start" })}
          >
            {quality.action.label}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
