// Mirror of https://clinicalaesperanza.co/p-sub-urologia/

import type { PortfolioPageContent } from "../../types";

export const urologiaPage: PortfolioPageContent = {
  title: "Urología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/00.webp",
        alt: "Urología",
      },
    },
    {
      kind: "intro",
      title: "Urología",
      subtitle: "Cuidado especializado del sistema urinario y la salud masculina.",
      body: [
        "Atención médica especializada para la prevención, diagnóstico y tratamiento de condiciones urológicas en hombres y mujeres.",
      ],
    },
    {
      kind: "feature",
      title: "Atención especializada en salud urológica",
      body: [
        "Algunas condiciones urológicas pueden generar molestias o afectar la calidad de vida. Una valoración oportuna permite identificar sus causas y establecer el manejo más adecuado.",
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-5-sept-2026-11_25_48-410x231.webp",
          alt: "Urología",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Nuestros servicios",
        },
        {
          title: "Consulta urológica",
          body: "Valoración especializada de condiciones del sistema urinario y reproductor masculino.",
        },
        {
          title: "Enfermedades de próstata",
          body: "Evaluación y manejo de alteraciones prostáticas.",
        },
        {
          title: "Cálculos urinarios",
          body: "Diagnóstico y tratamiento de cálculos en riñón y vías urinarias.",
        },
        {
          title: "Infecciones urinarias",
          body: "Evaluación de infecciones y alteraciones del tracto urinario.",
        },
        {
          title: "Incontinencia urinaria",
          body: "Valoración de alteraciones que afectan el control de la orina.",
        },
        {
          title: "Enfermedades renales y urinarias",
          body: "Atención de diferentes condiciones que afectan el sistema urinario.",
        },
        {
          title: "Salud masculina",
          body: "Valoración de condiciones relacionadas con la salud urológica y reproductiva del hombre.",
        },
        {
          title: "UCI Adultos",
          body: "Cuidados intensivos para pacientes adultos en estado crítico.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Diagnóstico y tratamiento urológico",
      body: [
        "Nuestra gestión se orienta al mejoramiento continuo, la innovación y el fortalecimiento de las capacidades institucionales, consolidando una oferta de servicios que responde a los desafíos actuales del sector salud.",
      ],
    },
    {
      kind: "closing",
      title: "Cuida tu salud urológica",
      body: "Agenda una valoración con nuestro servicio de Urología.",
    },
  ],
};
