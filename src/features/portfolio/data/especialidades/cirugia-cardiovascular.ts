// Mirror of https://clinicalaesperanza.co/p-sub-cirugia-cardiovascular/

import type { PortfolioPageContent } from "../../types";

export const cirugiaCardiovascularPage: PortfolioPageContent = {
  title: "Cirugía Cardiovascular",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/services/especialidades/cirugia-cardiovascular.webp",
        alt: "Cirugía cardiovascular en el quirófano",
      },
    },
    {
      kind: "intro",
      title: "Cirugía Cardiovascular",
      subtitle:
        "Atención especializada para el diagnóstico y tratamiento quirúrgico de enfermedades que afectan el corazón y el sistema vascular.",
      body: ["Especialistas en el cuidado quirúrgico del corazón y los vasos sanguíneos."],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Nuestros servicios",
        },
        {
          title: "Procedimientos cardiovasculares",
        },
        {
          title: "Cirugía de revascularización coronaria",
        },
        {
          title: "Cirugía de válvulas cardíacas",
        },
        {
          title: "Cirugía de aorta",
        },
        {
          title: "Tratamiento quirúrgico de enfermedades vasculares",
        },
        {
          title: "Cirugía de vasos sanguíneos",
        },
        {
          title: "Manejo quirúrgico de enfermedades cardíacas",
        },
        {
          title: "Valoración prequirúrgica cardiovascular",
        },
        {
          title: "Seguimiento postoperatorio",
        },
      ],
    },
    {
      kind: "feature",
      title: "Precisión que salva vidas",
      body: [
        "Las procedimientos cardioavasculares requieren una planificacion detallada, equipos especializados y un mancjo coordinado antes, durante y después de cada intervencion.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-5-sept-2026-10_47_11-410x231.webp",
        alt: "Cirugía Cardiovascular",
      },
    },
    {
      kind: "feature",
      title: "Un equipo preparado para cada procedimiento",
      body: [
        "La cirugía cardiovascular requiere la participación coordinada de diferentes profesionales y áreas hospitalarias para brindar una atención sosura y continua.",
      ],
    },
    {
      kind: "closing",
      title: "Cuida tu corazón con atención especializada",
      body: "Agenda una valoración con nuestro servicio de Cirugía Cardiovascular.",
    },
  ],
};
