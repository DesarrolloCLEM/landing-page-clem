// Mirror of https://clinicalaesperanza.co/p-sub-oftamologia-y-oculoplastia/

import type { PortfolioPageContent } from "../../types";

export const oftalmologiaPage: PortfolioPageContent = {
  title: "Oftalmología y Oculoplastia",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/oftalmologo.webp",
        alt: "Oftalmología y Oculoplastia",
      },
    },
    {
      kind: "intro",
      title: "Oftalmología y oculoplastia",
      subtitle:
        "Atención especializada para la prevención, diagnóstico y tratamiento de enfermedades y alteraciones de los ojos y las estructuras que los rodean.",
      body: ["Cuidamos tu visión y la salud de tus ojos."],
    },
    {
      kind: "feature",
      title: "Ver bien es parte de vivir bien",
      body: [
        "La salud visual puede cambiar a lo largo de la vida. Nuestro servicio ofrece valoración especializada para identificar alteraciones de la visión y enfermedades oculares, así como condiciones que afectan los párpados y la región alrededor de los ojos.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-7-sept-2026-10_44_00-768x432.webp",
        alt: "Oftalmología y Oculoplastia",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Consulta oftalmológica",
          body: "Valoración integral de la salud ocular y de la función visual.",
        },
        {
          title: "Diagnóstico ocular",
          body: "Evaluación de diferentes enfermedades y alteraciones que pueden afectar los ojos y la visión.",
        },
        {
          title: "Oculoplastia",
          body: "Atención especializada de los párpados, órbita y estructuras perioculares.",
        },
      ],
      title: "Atención especializada",
    },
    {
      kind: "feature",
      title: "Una mirada más completa",
    },
    {
      kind: "feature",
      title: "Tecnología para cuidar tu visión",
      body: [
        "Los estudios oftalmológicos permiten evaluar diferentes estructuras del ojo y obtener información que ayuda al especialista a detectar, controlar y tratar alteraciones visuales.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Evaluación precisa",
          body: "Información detallada sobre el estado de tus ojos.",
        },
        {
          title: "Detección oportuna",
          body: "Identificación de alteraciones que pueden afectar la visión.",
        },
        {
          title: "Seguimiento",
          body: "Control de la evolución de diferentes condiciones oculares.",
        },
        {
          title: "Atención especializada",
          body: "Valoración de acuerdo con las necesidades de cada paciente.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Oculoplastia",
    },
    {
      kind: "feature",
      title: "Cuidado especializado de la región periocular",
      body: [
        "La Oculoplastia se ocupa de las estructuras que rodean y protegen los ojos, incluyendo los párpados, la órbita y las vías lagrimales. Su manejo busca preservar tanto la función como las características de cada paciente.",
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Párpados · Órbita · Vías lagrimales · Región periocular",
        },
      ],
    },
    {
      kind: "closing",
      title: "Una visión saludable comienza con cuidarla.",
      body: "Agenda tu valoración con nuestro servicio de Oftalmología y Oculoplastia.",
    },
  ],
};
