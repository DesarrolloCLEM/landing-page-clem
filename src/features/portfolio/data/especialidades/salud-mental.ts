// Mirror of https://clinicalaesperanza.co/p-sub-salud-mental/

import type { PortfolioPageContent } from "../../types";

export const saludMentalPage: PortfolioPageContent = {
  title: "Salud Mental",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/psi.webp",
        alt: "Salud Mental",
      },
    },
    {
      kind: "intro",
      title: "Salud Mental",
      subtitle: "Un espacio para cuidar tu bienestar emocional.",
      body: [
        "Atención profesional para acompañarte en diferentes momentos y situaciones que pueden afectar tu bienestar mental y emocional.",
      ],
    },
    {
      kind: "feature",
      title: "Cuidar tu mente también es cuidar de ti.",
      body: [
        "Encontrar apoyo profesional puede ser el primer paso para comprender lo que estás viviendo y encontrar herramientas para afrontarlo.",
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-5-sept-2026-09_04_49-768x432.webp",
          alt: "Salud Mental",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "¿Cómo podemos ayudarte?",
          body: "Evaluación e intervención psicológica orientada al manejo de dificultades emocionales, conductuales y relacionales, favoreciendo el bienestar y las herramientas personales para afrontar diferentes situaciones. Valoración y manejo médico de trastornos de salud mental, con seguimiento de síntomas y, cuando está indicado, tratamiento farmacológico.",
        },
      ],
    },
    {
      kind: "feature",
      title: "Un espacio para hablar, comprender y avanzar",
      body: [
        "La atención en salud mental parte de escuchar y comprender la experiencia de cada persona. A través de una valoración profesional se pueden identificar las necesidades particulares y establecer el acompañamiento más adecuado.",
      ],
      image: {
        src: "/images/portafolio/chatgpt-image-3-sept-2026-14_39_05-768x432.webp",
        alt: "Salud Mental",
      },
    },
    {
      kind: "cards",
      items: [
        {
          title: "Salud mental para cada etapa de la vida",
        },
        {
          title: "Niños y adolescentes",
          body: "Acompañamiento acorde con las necesidades emocionales y del desarrollo.",
        },
        {
          title: "Adultos",
          body: "Atención frente a situaciones que pueden afectar el bienestar emocional y psicológico.",
        },
        {
          title: "Familias",
          body: "Orientación ante situaciones que involucran la dinámica y convivencia familiar.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Dar el primer paso también es cuidarte",
      body: "Agenda una valoración y encuentra un espacio para hablar sobre lo que estás viviendo.",
    },
  ],
};
