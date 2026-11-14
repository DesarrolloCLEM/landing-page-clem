// Mirror of https://clinicalaesperanza.co/p-sub-cirugia-general/

import type { PortfolioPageContent } from "../../types";

export const cirugiaGeneralPage: PortfolioPageContent = {
  title: "Cirugía General",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/228.webp",
        alt: "Cirugía General",
      },
    },
    {
      kind: "intro",
      title: "Cirugía General",
      body: [
        "Contamos con atención quirúrgica orientada a procedimientos programados y al manejo de diferentes condiciones que requieren intervención.",
      ],
    },
    {
      kind: "feature",
      title: "Soluciones quirúrgicas para cada necesidad",
      body: [
        "Nuestro servicio de Cirugía General ofrece valoración especializada y alternativas de tratamiento quirúrgico de acuerdo con las características y necesidades de cada paciente.",
      ],
    },
    {
      kind: "feature",
      title: "Procedimientos quirúrgicos",
      image: {
        src: "/images/portafolio/321.webp",
        alt: "Cirugía General",
      },
    },
    {
      kind: "feature",
      body: [
        "Manejo quirúrgico de enfermedades hepatobiliares y pancreáticas, incluyendo afecciones de la vesícula, vías biliares, hígado y páncreas.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-3-sept-2026-11_49_57-1024x576.webp",
        alt: "Cirugía General",
      },
    },
    {
      kind: "feature",
      body: [
        "Manejo quirúrgico de enfermedades pulmonares, pleurales y de otras estructuras ubicadas en la cavidad torácica.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-3-sept-2026-11_54_58-1024x576.webp",
        alt: "Cirugía General",
      },
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-3-sept-2026-14_30_38-1024x766.webp",
          alt: "Cirugía General",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Tecnología y preparación quirúrgica",
          body: "Cada procedimiento requiere una valoración previa y una planificación adecuada. Nuestro equipo trabaja bajo protocolos orientados a brindar una atención segura antes, durante y después de la cirugía.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Valoración prequirúrgica",
    },
    {
      kind: "feature",
      title: "Evaluación de las condiciones del paciente antes del procedimiento.",
    },
    {
      kind: "feature",
      title: "Preparación",
    },
    {
      kind: "feature",
      title: "Orientación sobre las indicaciones necesarias para la cirugía.",
    },
    {
      kind: "feature",
      title: "Seguimiento",
    },
    {
      kind: "feature",
      title: "Control de la evolución posterior al procedimiento..",
    },
    {
      kind: "feature",
      title: "Nuestro centro quirúrgico",
    },
    {
      kind: "closing",
      title: "¿Necesitas una valoración quirúrgica?",
      body: "Agenda una consulta con nuestro servicio de Cirugía General.",
    },
  ],
};
