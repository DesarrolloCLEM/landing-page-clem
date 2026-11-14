// Mirror of https://clinicalaesperanza.co/p-sub-medicina-fisica-y-rehabilitacion/

import type { PortfolioPageContent } from "../../types";

export const medicinaFisicaPage: PortfolioPageContent = {
  title: "Medicina Física y Rehabilitación",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/ft.webp",
        alt: "Medicina Física y Rehabilitación",
      },
    },
    {
      kind: "intro",
      title: "Medicina Física y Rehabilitación",
      body: [
        "Atención especializada para recuperar la funcionalidad, mejorar la movilidad y favorecer la independencia en las actividades de la vida diaria.",
      ],
    },
    {
      kind: "feature",
      title: "Una nueva forma de avanzar",
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_14_31-768x432.webp",
        alt: "Medicina Física y Rehabilitación",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Tu recuperación tiene su propio ritmo",
          body: "Cada proceso de rehabilitación es diferente. Evaluamos tus capacidades y necesidades para establecer objetivos que se adapten a tu condición y a tu vida cotidiana.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Cada avance cuenta.",
    },
    {
      kind: "cards",
      items: [
        {
          title: "Moverte mejor también es vivir mejor.",
          body: "Trabajamos para recuperar aquellas funciones que pueden verse afectadas por una enfermedad, lesión, cirugía o condición que limite tu movilidad.",
        },
      ],
      title: "El movimiento como punto de partida",
    },
    {
      kind: "feature",
      title: "Rehabilitación que se adapta a ti",
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_10_23-768x432.webp",
        alt: "Medicina Física y Rehabilitación",
      },
    },
    {
      kind: "feature",
      body: ["Evaluación", "Conocemos tus capacidades y limitaciones."],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_12_04-1024x576.webp",
        alt: "Medicina Física y Rehabilitación",
      },
    },
    {
      kind: "feature",
      body: ["Objetivos", "Definimos hacia dónde quieres llegar."],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_24_21-1024x576.webp",
        alt: "Medicina Física y Rehabilitación",
      },
    },
    {
      kind: "feature",
      body: ["Evolución", "Adaptamos el proceso a tus avances."],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_16_56-1024x576.webp",
        alt: "Medicina Física y Rehabilitación",
      },
    },
    {
      kind: "closing",
      title: "Empieza a recuperar tu movimiento",
      body: "Agenda una valoración en Medicina Física y Rehabilitación.",
    },
  ],
};
