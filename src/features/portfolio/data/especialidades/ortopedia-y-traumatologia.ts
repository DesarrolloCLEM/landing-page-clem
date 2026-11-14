// Mirror of https://clinicalaesperanza.co/p-sub-ortopedia-y-traumatologia/

import type { PortfolioPageContent } from "../../types";

export const ortopediaPage: PortfolioPageContent = {
  title: "Ortopedia y Traumatología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/ort.webp",
        alt: "Ortopedia y Traumatología",
      },
    },
    {
      kind: "intro",
      title: "Ortopedia y Traumatología",
      body: [
        "Atención especializada para el cuidado de huesos, articulaciones, músculos, ligamentos y tendones.",
      ],
    },
    {
      kind: "feature",
      title: "Cuidado integral del sistema musculoesquelético",
      body: [
        "Nuestro servicio aborda lesiones y condiciones que afectan el sistema musculoesquelético, desde problemas articulares y óseos hasta lesiones ocasionadas por accidentes o traumatismos.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Ortopedia Oncológica",
        },
        {
          title: "Ortopedia Reconstructiva",
        },
        {
          title: "Artroscopia",
        },
        {
          title: "Cirugía de Hombro",
        },
        {
          title: "Revisión de Prótesis",
        },
        {
          title: "Cirugía de Columna",
        },
      ],
      title: "Atención especializada",
    },
    {
      kind: "feature",
      title: "Recuperar el movimiento",
      body: [
        "Cada lesión y condición requiere una valoración adecuada para determinar el tratamiento que permita recuperar la función y favorecer la movilidad.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-3-sept-2026-11_35_12-768x432.webp",
        alt: "Ortopedia y Traumatología",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Del diagnóstico a la recuperación",
        },
        {
          title: "Valoración",
          body: "Evaluación clínica de la lesión o condición.",
        },
        {
          title: "Tratamiento",
          body: "Definición del manejo médico o quirúrgico según cada caso.",
        },
        {
          title: "Recuperación",
          body: "Seguimiento de la evolución para favorecer el retorno a las actividades habituales.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Seguimiento de la evolución para favorecer el retorno a las actividades habituales.",
      body: "Recibe una valoración especializada para conocer el tratamiento más adecuado para tu condición.",
    },
  ],
};
