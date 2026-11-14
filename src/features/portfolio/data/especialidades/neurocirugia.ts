// Mirror of https://clinicalaesperanza.co/p-sub-neurocirugia/

import type { PortfolioPageContent } from "../../types";

export const neurocirugiaPage: PortfolioPageContent = {
  title: "Neurocirugía",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/neurocirugia_2048x427.webp",
        alt: "Neurocirugía",
      },
    },
    {
      kind: "intro",
      title: "Neurocirugía",
      body: [
        "Atención neuroquirúrgica orientada al diagnóstico, tratamiento y seguimiento de condiciones que afectan el cerebro, la médula espinal y la columna vertebral.",
      ],
    },
    {
      kind: "feature",
      title: "Especialistas en el sistema nervioso",
      body: [
        "Nuestro servicio de Neurocirugía aborda condiciones neurológicas que requieren valoración y manejo quirúrgico, definiendo el tratamiento más adecuado para cada paciente.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Neurocirugía",
          body: "Abordamos enfermedades y lesiones del cerebro, la médula espinal, los nervios y la columna vertebral, con un manejo definido de acuerdo con cada caso.",
        },
        {
          title: "Medicina del dolor",
          body: "Evaluación integral de pacientes con dolor agudo o crónico, orientada a identificar su origen y establecer un tratamiento acorde con las características y necesidades de cada paciente.",
        },
      ],
      title: "Atención especializada",
    },
    {
      kind: "feature",
      title: "Precisión en cada procedimiento",
      body: [
        "La neurocirugía requiere conocimiento especializado, tecnología y una planificación cuidadosa para abordar estructuras complejas del sistema nervioso.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-2-sept-2026-08_55_52-768x432.webp",
        alt: "Neurocirugía",
      },
    },
    {
      kind: "feature",
      title: "Una atención respaldada por tecnología",
      body: [
        "Contamos con herramientas y recursos hospitalarios que apoyan la valoración, preparación y atención de los pacientes que requieren procedimientos neuroquirúrgicos.",
      ],
    },
    {
      kind: "closing",
      title: "Cuidado especializado, en cada etapa de la vida",
      body: "Cuidado Crítico · Clínica La Esperanza · Montería",
    },
  ],
};
