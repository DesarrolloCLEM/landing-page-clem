import type { Metadata } from "next";

import { AgendaPage } from "@/features/appointments";

export const metadata: Metadata = {
  title: "Agenda tu cita",
  description:
    "Agenda tu cita en Clínica La Esperanza por WhatsApp: escríbenos, indícanos el servicio y comparte los documentos requeridos.",
  alternates: { canonical: "/agenda/" },
};

export default function Page() {
  return <AgendaPage />;
}
