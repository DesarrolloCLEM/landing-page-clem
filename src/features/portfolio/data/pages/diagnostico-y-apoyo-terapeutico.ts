// Mirror of https://clinicalaesperanza.co/p-diagnostico-y-apoyo-terapeutico/

import type { PortfolioPageContent } from "../../types";

export const diagnosticoPage: PortfolioPageContent = {
  title: "Diagnóstico y Apoyo Terapéutico",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  blocks: [
    {
      kind: "banner",
      image: { src: "/images/services/diagnostico-portada.webp", alt: "Sala de tomografía" },
    },
    {
      kind: "intro",
      title: "Diagnóstico y Apoyo Terapéutico",
      subtitle: "Equipos de alta tecnología para un diagnóstico oportuno.",
      body: [
        "Este servicio está diseñado para respaldar de manera integral los procesos clínicos y asistenciales, facilitando un abordaje oportuno, preciso y seguro del estado de salud del paciente.",
      ],
    },
    {
      kind: "feature",
      title: "Tecnología que marca la diferencia",
      image: {
        src: "/images/services/diagnostico-4.webp",
        alt: "Tomógrafo General Electric Revolution Ascend",
      },
      body: [
        "Contamos con un tomógrafo General Electric Revolution™ Ascend, el primer equipo en Latinoamérica en incorporar un servidor con inteligencia artificial, que optimiza la calidad de los estudios y reduce significativamente la dosis de radiación.",
        "Reconstrucción con IA (TrueFidelity™ DL) · Posicionamiento automático · Hasta 128 cortes",
      ],
    },
    {
      kind: "groups",
      title: "¿Qué encontrarás en nuestro servicio de Diagnóstico y Apoyo Terapéutico?",
      items: [
        {
          title: "Imágenes diagnósticas ionizantes",
          items: ["Tomografía", "Arco en C", "Rayos X fijo", "Rayos X portátil"],
        },
        {
          title: "Imágenes diagnósticas no ionizantes",
          items: ["Ecografía", "Diagnóstico cardiovascular", "Ultrasonido"],
        },
        {
          title: "Apoyo terapéutico",
          items: [
            "Laboratorio clínico",
            "Servicio farmacéutico",
            "Terapia respiratoria y física",
            "Gestión pretransfusional",
          ],
        },
      ],
    },
    {
      kind: "gallery",
      title: "Tomografía de nueva generación",
      body: "Contamos con el tomógrafo General Electric Revolution™ Ascend, el primer equipo en Latinoamérica con inteligencia artificial integrada.",
      images: [
        { src: "/images/services/diagnostico-1.webp", alt: "Tomógrafo GE Revolution Ascend" },
        { src: "/images/services/diagnostico-2.webp", alt: "Tecnólogo programando el tomógrafo" },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Menor dosis de radiación",
          body: "La inteligencia artificial ayuda a obtener imágenes claras usando menos radiación, cuidando más al paciente.",
        },
        {
          title: "Exámenes más rápidos",
          body: "La automatización del equipo reduce el tiempo que el paciente pasa en el estudio.",
        },
        {
          title: "Mayor comodidad",
          body: "El túnel del equipo es más ancho y la camilla más baja, lo que facilita el examen a pacientes de mayor tamaño o con lesiones que requieren manejo cuidadoso.",
        },
        {
          title: "Diagnósticos más precisos",
          body: "La inteligencia artificial ayuda a posicionar al paciente y ajustar el estudio automáticamente, reduciendo el margen de error.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Diagnóstico preciso, respaldo terapéutico integral",
    },
  ],
};
