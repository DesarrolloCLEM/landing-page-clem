import type { SampleCard } from "../types";

// Sample copy for the component catalog. Real page content lives in each feature.
export const catalogIntro = {
  eyebrow: "Sistema de diseño",
  title: "Catálogo de componentes",
  description:
    "Componentes genéricos de la landing de Clínica La Esperanza con sus variantes y estados. Página interna: no disponible en producción.",
};

export const sampleCards: SampleCard[] = [
  {
    title: "Hospitalización",
    description:
      "Cuidado integral y seguimiento médico y de enfermería para pacientes con manejo intrahospitalario.",
    href: "#",
  },
  {
    title: "Cirugía",
    description:
      "Valoración y manejo quirúrgico de patologías frecuentes, desde la evaluación prequirúrgica.",
    href: "#",
  },
  {
    title: "Consulta externa",
    description: "Atención programada para valoración, diagnóstico, tratamiento y seguimiento.",
    href: "#",
  },
  {
    title: "Urgencias",
    description: "Atención de mediana y alta complejidad, con infraestructura amplia y renovada.",
    href: "#",
  },
];

export const sampleRequestTypes = ["Felicitación", "Sugerencia", "Queja", "Reclamo"];
