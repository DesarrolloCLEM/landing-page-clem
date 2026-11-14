// Mirror of https://clinicalaesperanza.co/p-sub-radiologia/

import type { PortfolioPageContent } from "../../types";

export const radiologiaPage: PortfolioPageContent = {
  title: "Radiología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/radio.webp",
        alt: "Radiología",
      },
    },
    {
      kind: "intro",
      title: "Radiología",
      body: [
        "Servicios de diagnóstico por imágenes para apoyar la detección, evaluación y seguimiento de diferentes condiciones de salud.",
      ],
    },
    {
      kind: "feature",
      title: "Tecnología y precisión diagnóstica",
      body: [
        "Contamos con tecnología especializada para obtener imágenes claras y apoyar decisiones médicas oportunas.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-5-sept-2026-09_37_55-410x231.webp",
        alt: "Radiología",
      },
    },
    {
      kind: "feature",
      title: "Diagnóstico a través de imágenes",
      body: [
        "Nuestros estudios ayudan a evaluar diferentes condiciones de salud con precisión y acompañamiento profesional.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Radiografía",
          body: "Evaluación e intervención psicológica orientada al manejo de dificultades emocionales, conductuales y relacionales, favoreciendo el bienestar y las herramientas personales para afrontar diferentes situaciones.",
        },
        {
          title: "Ecografía",
          body: "Evaluación e intervención psicológica orientada al manejo de dificultades emocionales, conductuales y relacionales, favoreciendo el bienestar y las herramientas personales para afrontar diferentes situaciones.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Precisión en cada imagen",
      body: [
        "Cada estudio se realiza con atención a tus necesidades y con el respaldo de un equipo especializado.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-5-sept-2026-09_44_31-768x432.webp",
        alt: "Radiología",
      },
    },
    {
      kind: "closing",
      title: "¿Necesitas un estudio diagnóstico?",
      body: "Consulta nuestros servicios de Radiología y agenda tu estudio.",
    },
  ],
};
