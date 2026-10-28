import { MessageSquareHeart } from "lucide-react";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { buttonVariants, Heading, SectionHeading, TestimonialCard } from "@/components/ui";
import { testimonials } from "@/config/testimonials";

import { opinion, testimonialsSection } from "../data/home";

export function TestimonialsSection() {
  return (
    <Section tone="surface" aria-labelledby="testimonials-title">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          titleId="testimonials-title"
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          align="center"
        />
        {/* Swipeable row on mobile (native scroll-snap, never auto-advances), grid on desktop. */}
        <ul className="relative -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name} className="w-[85%] shrink-0 snap-start sm:w-auto">
              <TestimonialCard
                name={testimonial.name}
                procedure={testimonial.procedure}
                summary={testimonial.summary}
                image={testimonial.image}
                link={{ href: testimonial.storyUrl, label: testimonialsSection.linkLabel }}
              />
            </li>
          ))}
        </ul>
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
  );
}
