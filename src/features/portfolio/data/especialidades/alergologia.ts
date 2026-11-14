// Mirror of https://clinicalaesperanza.co/p-sub-alergologia/

import type { PortfolioPageContent } from "../../types";

export const alergologiaPage: PortfolioPageContent = {
  title: "Alergología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/alergia.webp",
        alt: "Alergología",
      },
    },
    {
      kind: "intro",
      title: "Alergología",
      body: ["Entender tus alergias es el primer paso para controlarlas."],
    },
    {
      kind: "feature",
      title: "Identificación y manejo de alergias",
      body: [
        "Las alergias pueden manifestarse de diferentes maneras y afectar la piel, las vías respiratorias, los ojos o el sistema digestivo. Una valoración especializada permite identificar posibles desencadenantes y orientar el manejo adecuado.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_58_32-768x432.webp",
        alt: "Alergología",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Alergias respiratorias",
          body: "Rinitis alérgica, asma y otras manifestaciones relacionadas con alérgenos ambientales.",
        },
        {
          title: "Alergias alimentarias",
          body: "Evaluación de reacciones asociadas al consumo de determinados alimentos.",
        },
        {
          title: "Alergias en la piel",
          body: "Valoración de urticaria, dermatitis y otras manifestaciones cutáneas.",
        },
        {
          title: "Alergias a medicamentos",
          body: "Evaluación de reacciones adversas o sospechas de alergia a medicamentos.",
        },
        {
          title: "Alergias oculares",
          body: "Atención de manifestaciones alérgicas que afectan los ojos.",
        },
        {
          title: "Alergias de contacto",
          body: "Identificación de reacciones producidas por sustancias que entran en contacto con la piel.",
        },
      ],
      title: "¿Qué atendemos?",
    },
    {
      kind: "feature",
      title: "Control y tratamiento",
    },
    {
      kind: "feature",
      title: "Vivir con una alergia no significa vivir limitado",
      body: [
        "Una vez identificados los factores relacionados con la reacción alérgica, el especialista puede establecer un plan de manejo orientado a controlar los síntomas y reducir su impacto en la vida cotidiana.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Identificar",
          body: "Reconocer los desencadenantes.",
        },
        {
          title: "Controlar",
          body: "Manejar los síntomas y reducir su impacto.",
        },
        {
          title: "Prevenir",
          body: "Adoptar medidas para disminuir nuevas reacciones.",
        },
      ],
    },
    {
      kind: "closing",
      title: "¿Tienes una reacción que no puedes explicar?",
      body: "Agenda una valoración con nuestro servicio de Alergología.",
    },
  ],
};
