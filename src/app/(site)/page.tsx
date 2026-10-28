import type { Metadata } from "next";

import { HomePage } from "@/features/home";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Clínica La Esperanza en Montería, Córdoba: urgencias 24 horas, cirugía, hospitalización, cuidado crítico y consulta externa con calidad, calidez y confianza.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
