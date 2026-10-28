import type { Metadata } from "next";

import { ContactPage } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos o comunícate con Clínica La Esperanza en Montería: dirección, PBX, extensiones telefónicas, horarios de visita y mapa.",
  alternates: { canonical: "/contacto/" },
};

export default function Page() {
  return <ContactPage />;
}
