import type { Metadata } from "next";

import { PoliciesPage } from "@/features/about";

export const metadata: Metadata = {
  title: "Políticas institucionales",
  description:
    "Políticas de calidad, seguridad del paciente, seguridad y salud en el trabajo, gestión ambiental y docencia-servicio de Clínica La Esperanza.",
  alternates: { canonical: "/politicas-institucionales/" },
};

export default function Page() {
  return <PoliciesPage />;
}
