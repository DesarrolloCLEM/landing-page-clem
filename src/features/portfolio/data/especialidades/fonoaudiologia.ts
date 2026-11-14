// Mirror of https://clinicalaesperanza.co/p-sub-fonaudiologia/

import type { PortfolioPageContent } from "../../types";

export const fonoaudiologiaPage: PortfolioPageContent = {
  title: "Fonoaudiología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/fono.webp",
        alt: "Fonoaudiología",
      },
    },
    {
      kind: "intro",
      title: "Fonoadiología",
      body: [
        "Atención especializada para evaluar, tratar y acompañar dificultades relacionadas con la comunicación, el lenguaje, el habla, la voz, la audición y la deglución.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Comunicar también es parte de nuestro bienestar",
          body: "Hablar, comprender, expresarnos, escuchar y alimentarnos son actividades fundamentales para nuestra vida diaria. La Fonoaudiología interviene cuando alguna de estas funciones presenta dificultades, buscando favorecer la autonomía y participación de cada persona.",
        },
        {
          title: "¿Qué encontrarás en nuestro servicio?",
        },
        {
          title: "Comunicación y lenguaje",
          body: "Desarrollo y rehabilitación de habilidades de comunicación, comprensión y expresión.",
        },
        {
          title: "Habla y voz",
          body: "Evaluación e intervención de dificultades relacionadas con la articulación, fluidez y calidad de la voz.",
        },
        {
          title: "Deglución y alimentación",
          body: "Un espacio cómodo, seguro y funcional para una recuperación tranquila, con baño privado.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Fonoaudiología en diferentes etapas",
    },
    {
      kind: "feature",
      title: "Acompañamiento a lo largo de la vida",
      body: [
        "Las necesidades de comunicación y deglución cambian según cada etapa. Por eso, la atención se adapta a las características y objetivos de cada paciente.",
      ],
    },
    {
      kind: "feature",
      body: ["Infancia"],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_32_11-1024x576.webp",
        alt: "Fonoaudiología",
      },
    },
    {
      kind: "feature",
      body: ["Adultez"],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_40_42-1024x576.webp",
        alt: "Fonoaudiología",
      },
    },
    {
      kind: "feature",
      title: "Un servicio que va más allá de hablar",
    },
    {
      kind: "feature",
      title: "Cada función cuenta",
      body: [
        "La comunicación y la deglución están relacionadas con nuestra independencia, nuestras relaciones y nuestras actividades cotidianas. Nuestro objetivo es trabajar sobre las habilidades que cada persona necesita recuperar, desarrollar o mantener.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Mayor autonomía",
          body: "Favorecer la participación en las actividades cotidianas.",
        },
        {
          title: "Comunicación efectiva",
          body: "Fortalecer las habilidades necesarias para expresarse y comprender.",
        },
        {
          title: "Seguridad al alimentarse",
          body: "Trabajar las dificultades relacionadas con la deglución.",
        },
        {
          title: "Atención personalizada",
          body: "Adaptar el proceso a las necesidades de cada paciente.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Agenda tu valoración de Fonoaudiología",
      body: "Da el primer paso hacia una comunicación y funcionalidad más seguras.",
    },
  ],
};
