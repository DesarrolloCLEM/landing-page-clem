// Mirror of https://clinicalaesperanza.co/p-sub-nutricion-y-dieta/

import type { PortfolioPageContent } from "../../types";

export const nutricionPage: PortfolioPageContent = {
  title: "Nutrición y Dietética",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/nutricion.webp",
        alt: "Nutrición y Dietética",
      },
    },
    {
      kind: "intro",
      title: "Nutrición y Dieta",
      body: [
        "Orientación nutricional para ayudarte a construir hábitos de alimentación adecuados a tus necesidades y objetivos.",
      ],
    },
    {
      kind: "feature",
      title: "Alimentación y salud",
      body: [
        "Una alimentación adecuada debe tener en cuenta las necesidades de cada persona, sus hábitos, preferencias y condiciones particulares. Nuestro servicio de Nutrición y Dieta busca ayudarte a construir una relación más consciente y equilibrada con la alimentación.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_00_25-768x432.webp",
        alt: "Nutrición y Dietética",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Nuestros servicios",
        },
        {
          title: "01",
        },
        {
          title: "Valoración nutricional",
          body: "Evaluación de hábitos, alimentación y necesidades nutricionales para establecer objetivos personalizados.",
        },
        {
          title: "02",
        },
        {
          title: "Planificación alimentaria",
          body: "Orientación para organizar una alimentación equilibrada de acuerdo con las necesidades y objetivos de cada persona.",
        },
        {
          title: "03",
        },
        {
          title: "Seguimiento nutricional",
          body: "Acompañamiento para evaluar avances y realizar ajustes durante el proceso.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Nutrición para diferentes necesidades",
      body: [
        "La alimentación puede desempeñar un papel importante en diferentes etapas de la vida y situaciones de salud. Por eso, el acompañamiento nutricional debe adaptarse a las características y objetivos de cada paciente.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Niños y adolescentes",
        },
        {
          title: "Adultos",
        },
      ],
    },
    {
      kind: "closing",
      title: "Empieza a cuidar tu alimentación",
      body: "Agenda una valoración con nuestro servicio de Nutrición y Dieta.",
    },
  ],
};
