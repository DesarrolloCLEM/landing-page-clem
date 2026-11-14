// Mirror of https://clinicalaesperanza.co/p-sub-dermatologia/

import type { PortfolioPageContent } from "../../types";

export const dermatologiaPage: PortfolioPageContent = {
  title: "Dermatología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/dermatologia.webp",
        alt: "Dermatología",
      },
    },
    {
      kind: "intro",
      title: "Dermatología",
      body: [
        "Prevención, diagnóstico y tratamiento de las enfermedades de la piel, el cabello y las uñas con una atención cercana y personalizada.",
      ],
    },
    {
      kind: "feature",
      title: "Tu piel también merece atención integral",
      body: [
        "Evaluamos cada caso para ofrecer un diagnóstico claro y un plan de cuidado adaptado a tus necesidades.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Acné y marcas en la piel",
        },
        {
          title: "Dermatitis y alergias",
        },
        {
          title: "Infecciones de la piel",
        },
        {
          title: "Lunares y lesiones cutáneas",
        },
        {
          title: "Caída del cabello",
        },
        {
          title: "Cuidado preventivo de la piel",
        },
      ],
      title: "Atención dermatológica",
    },
    {
      kind: "feature",
      title: "Diagnóstico oportuno",
      body: [
        "Una valoración especializada permite identificar cambios en la piel y orientar el tratamiento más adecuado.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-11_06_07-768x432.webp",
        alt: "Dermatología",
      },
    },
    {
      kind: "feature",
      title: "Cuidar tu piel es cuidar tu bienestar",
      body: [
        "Te acompañamos con recomendaciones claras para proteger y mantener la salud de tu piel en cada etapa.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Infancia",
          body: "Atención a las necesidades de la piel infantil.",
        },
        {
          title: "Adultez",
          body: "Prevención y tratamiento para una piel saludable.",
        },
        {
          title: "Madurez",
          body: "Seguimiento de cambios y cuidado integral.",
        },
      ],
      title: "Dermatología en cada etapa de la vida",
    },
    {
      kind: "closing",
      title: "Agenda tu valoración de Dermatología",
      body: "Estamos aquí para ayudarte a cuidar tu piel.",
    },
  ],
};
