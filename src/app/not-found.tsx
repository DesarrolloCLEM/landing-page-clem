import { Calendar, Home, Mail, Stethoscope } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container, Section, SiteLayout } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

const links = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Servicios", href: "/servicios/", icon: Stethoscope },
  { label: "Agenda tu cita", href: "/agenda/", icon: Calendar },
  { label: "Contacto", href: "/contacto/", icon: Mail },
];

export default function NotFound() {
  return (
    <SiteLayout>
      <Section aria-labelledby="page-title">
        <Container size="narrow" className="flex flex-col items-center gap-6 text-center">
          <p className="font-heading text-6xl font-extrabold text-primary">404</p>
          <Heading as="h1" id="page-title" size="xl">
            No encontramos esta página
          </Heading>
          <Text size="lead" tone="muted">
            Es posible que la dirección haya cambiado o que la página ya no exista. Estos enlaces te
            pueden ayudar:
          </Text>
          <ul className="grid w-full gap-3 sm:grid-cols-2">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex min-h-14 items-center gap-3 rounded-card border border-border bg-white px-5 font-heading font-bold text-navy shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <Icon aria-hidden="true" className="size-5 text-primary" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </SiteLayout>
  );
}
