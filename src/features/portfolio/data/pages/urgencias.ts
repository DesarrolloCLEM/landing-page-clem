// Mirror of https://clinicalaesperanza.co/p-urgencias/

import type { PortfolioPageContent } from "../../types";

export const urgenciasPage: PortfolioPageContent = {
  title: "Atención de urgencias 24 horas",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/services/urgencias-portada.webp",
        alt: "Pasillo del servicio de urgencias",
      },
    },
    {
      kind: "intro",
      title: "Atención de urgencias 24 horas",
      body: [
        "En Clínica La Esperanza trabajamos cada día para brindar una experiencia de hospitalización segura, humana y confortable, acompañando a nuestros pacientes y sus familias con calidad, calidez y compromiso.",
      ],
    },
    {
      kind: "cards",
      cols: 2,
      items: [
        {
          title: "Urgencias Adultos",
          body: "Atención médica para pacientes adultos que requieren valoración y manejo oportuno.",
        },
        {
          title: "Urgencias Pediátricas",
          body: "Atención para niños y adolescentes en un espacio pensado para sus necesidades.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Modelo de atención en urgencias",
      image: {
        src: "/images/portafolio/captura-de-pantalla-2026-08-26-100715.webp",
        alt: "Esquema del modelo de atención en urgencias",
      },
      body: ["Atención médica para pacientes adultos que requieren valoración y manejo oportuno."],
    },
    {
      kind: "gallery",
      images: [
        { src: "/images/services/urgencias-1.webp", alt: "Equipo de enfermería de urgencias" },
        { src: "/images/services/urgencias-2.webp", alt: "Cubículos de urgencias" },
      ],
    },
    {
      kind: "feature",
      title: "¿Cuándo acudir?",
      body: [
        "Ante situaciones que requieran atención médica inmediata, como dolor intenso, dificultad para respirar, pérdida del conocimiento, sangrado abundante, traumatismos o cambios súbitos en el estado de salud.",
      ],
    },
    {
      kind: "closing",
      title: "Estamos para atenderte",
      body: "Clínica La Esperanza",
    },
  ],
};
