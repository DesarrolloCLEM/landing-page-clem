import { Check } from "lucide-react";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { buttonVariants, Heading } from "@/components/ui";
import { appointmentLink } from "@/config/navigation";

import type { Plan } from "../types";

export function PlansSection({ plans }: { plans: Plan[] }) {
  return (
    <Section tone="navy" spacing="compact" aria-labelledby="plans-title">
      <Container className="flex flex-col gap-8">
        <Heading as="h2" id="plans-title" size="lg">
          Planes y paquetes
        </Heading>
        <ul className="grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className="flex flex-col gap-5 rounded-card bg-white p-6 text-ink shadow-card sm:p-8"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl font-extrabold text-navy">{plan.name}</h3>
                <p className="leading-relaxed text-ink-muted">{plan.description}</p>
              </div>
              <p className="font-heading text-3xl font-extrabold text-primary">{plan.price}</p>
              <div className="flex flex-col gap-3">
                <h4 className="font-heading font-bold text-navy">Incluye</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-health-strong"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={appointmentLink.href}
                className={buttonVariants({ className: "mt-auto self-start" })}
              >
                Quiero este plan<span className="sr-only">: {plan.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
