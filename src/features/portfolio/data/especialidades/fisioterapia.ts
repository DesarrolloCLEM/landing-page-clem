// Mirror of https://clinicalaesperanza.co/p-sub-fisioterapia/

import type { PortfolioPageContent } from "../../types";

export const fisioterapiaPage: PortfolioPageContent = {
  title: "Fisioterapia",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/t.webp",
        alt: "Fisioterapia",
      },
    },
    {
      kind: "intro",
      title: "Fisioterapia",
      subtitle: "Recupera el movimiento, recupera tu bienestar.",
      body: [
        "Atención especializada para recuperar, mantener y mejorar la movilidad y funcionalidad del cuerpo.",
      ],
    },
    {
      kind: "feature",
      title: "Recuperación y movimiento",
      body: [
        "La fisioterapia acompaña la recuperación de personas con lesiones, dolor, limitaciones de movimiento o alteraciones funcionales, mediante estrategias adaptadas a las necesidades de cada paciente.",
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-5-sept-2026-10_10_01-410x231.webp",
          alt: "Fisioterapia",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Nuestros servicios",
          body: "Rehabilitación Cardíaca Programa de recuperación y acondicionamiento físico para personas con enfermedades cardiovasculares o después de procedimientos cardíacos, orientado a mejorar la capacidad funcional y favorecer una recuperación segura. Terapia física y rehabilitación Intervenciones dirigidas a recuperar el movimiento, la fuerza y la funcionalidad después de lesiones, enfermedades, cirugías o condiciones que limitan la movilidad.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Movimiento y funcionalidad",
      image: {
        src: "/images/portafolio/chatgpt-image-5-sept-2026-10_11_38-410x231.webp",
        alt: "Fisioterapia",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Cada movimiento cuenta.",
          body: "Trabajamos sobre las capacidades que necesitas recuperar para avanzar hacia una mayor independencia y funcionalidad.",
        },
        {
          title: "Un proceso adaptado a ti",
        },
        {
          title: "Evaluamos",
          body: "Identificamos tus necesidades y limitaciones funcionales.",
        },
        {
          title: "Trabajamos",
          body: "Aplicamos técnicas y ejercicios de acuerdo con tus objetivos.",
        },
        {
          title: "Evolucionamos",
          body: "Ajustamos el proceso según tu respuesta y progreso.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Recupera tu movimiento",
      body: "Agenda tu valoración con nuestro servicio de Fisioterapia.",
    },
  ],
};
