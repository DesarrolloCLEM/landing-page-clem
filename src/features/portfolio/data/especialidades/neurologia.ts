// Mirror of https://clinicalaesperanza.co/p-sub-neurologia/

import type { PortfolioPageContent } from "../../types";

export const neurologiaPage: PortfolioPageContent = {
  title: "Neurología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/4_2048x427.webp",
        alt: "Neurología",
      },
    },
    {
      kind: "intro",
      title: "Neurología",
      body: ["Cuidamos la salud de tu sistema nervioso."],
    },
    {
      kind: "feature",
      title: "El sistema nervioso está en todo lo que hacemos",
      body: [
        "El sistema nervioso participa en funciones esenciales como el movimiento, la memoria, el lenguaje, el quilibrio y la sensibilidad. Una valoración neurológica permite identificar alteraciones y orientar el manejo adecuado para cada paciente.",
      ],
    },
    {
      kind: "feature",
      title: "Áreas de atención",
      body: [
        "Evaluamos alteraciones relacionadas con memoria, atención, lenguaje y otras funciones cognitivas.",
        "Valoración de temblores, alteraciones cel movimiento, equilibrio y coordinación.",
        "Atención a los cambios relacionados con la fuerza, sensibilidad y funcionamiento de los nervios.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-2-sept-2026-10_25_50-410x231.webp",
        alt: "Neurología",
      },
    },
    {
      kind: "feature",
      title: "Cuando tu cuerpo envía señales",
      body: [
        "Dolores de cabeza recurrentes, cambios en la memoria, alteraciones del movimiento, pérdida de sensibilidad o problemas de equilibrio pueden ser señales que requieren una valoración especializada.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-2-sept-2026-10_18_41-410x231.webp",
        alt: "Neurología",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Conocer lo que esta ocurriendo",
          body: "La valoración neurológica comienza con una historia clínica detallada y una exploración especializada. Según cada caso, el profesional puede determinar si son necesarios estudios complementarios para orientar el diagnóstico y tratamiento.",
        },
      ],
      title: "Evaluación neurológica",
    },
    {
      kind: "closing",
      title: "Cuidado especializado, en cada etapa de la vida",
      body: "Cuidado Crítico · Clínica La Esperanza · Montería",
    },
  ],
};
