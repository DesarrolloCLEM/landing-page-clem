// Mirror of https://clinicalaesperanza.co/p-sub-cirugia-plastica/

import type { PortfolioPageContent } from "../../types";

export const cirugiaPlasticaPage: PortfolioPageContent = {
  title: "Cirugía Plástica",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/228.webp",
        alt: "Cirugía Plástica",
      },
    },
    {
      kind: "intro",
      title: "Cirugía Plástica",
      body: [
        "Atención especializada en procedimientos de cirugía plástica reconstructiva y estética, de acuerdo con las necesidades de cada paciente.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Reconstrucción y estética",
          body: "La cirugía plástica puede tener como objetivo recuperar la función y apariencia de una zona del cuerpo después de una enfermedad, lesión o procedimiento, así como realizar cambios estéticos.",
        },
      ],
      title: "Una cirugía con diferentes propósitos",
    },
    {
      kind: "feature",
      title: "¿Qué ofrecemos?",
      image: {
        src: "/images/portafolio/chatgpt-image-5-sept-2026-10_57_56-410x231.webp",
        alt: "Cirugía Plástica",
      },
    },
    {
      kind: "feature",
      body: ["Cirugía estética"],
      image: {
        src: "/images/portafolio/chatgpt-image-5-sept-2026-11_03_36-1024x576.webp",
        alt: "Cirugía Plástica",
      },
    },
    {
      kind: "feature",
      title: "Atención quirúrgica especializada",
      body: [
        "Nuestros procedimientos se desarrollan dentro de un entorno hospitalario, con el respaldo de profesionales y servicios necesarios para acompañar al paciente durante su proceso quirúrgico.",
      ],
    },
    {
      kind: "closing",
      title: "Da el primer paso hacia tu objetivo",
      body: "Agenda una valoración con nuestro servicio de Cirugía Plástica.",
    },
  ],
};
