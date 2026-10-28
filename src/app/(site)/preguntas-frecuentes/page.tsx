import type { Metadata } from "next";

import { FaqPage } from "@/features/patients";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre copagos, consulta externa, consulta preanestésica, historia clínica e imagenología en Clínica La Esperanza.",
  alternates: { canonical: "/preguntas-frecuentes/" },
};

export default function Page() {
  return <FaqPage />;
}
