// Mirror of https://clinicalaesperanza.co/p-sub-cirugia-maxilofacial/

import type { PortfolioPageContent } from "../../types";

export const cirugiaMaxilofacialPage: PortfolioPageContent = {
  title: "Cirugía Maxilofacial",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/228.webp",
        alt: "Cirugía Maxilofacial",
      },
    },
    {
      kind: "intro",
      title: "Cirugía Maxilofacial",
      subtitle: "Cuidado especializado de la cara, boca y maxilares.",
      body: [
        "Atención especializada para el diagnóstico y tratamiento de condiciones que afectan las estructuras faciales y maxilofaciales.",
      ],
    },
    {
      kind: "feature",
      title: "Función y bienestar",
      body: [
        "La región maxilofacial reúne estructuras fundamentales para funciones como hablar, masticar y respirar. Nuestro servicio aborda alteraciones que pueden afectar su funcionamiento y apariencia, ofreciendo una valoración especializada para definir el tratamiento más adecuado.",
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-5-sept-2026-11_14_56-410x231.webp",
          alt: "Cirugía Maxilofacial",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Tratamientos especializados",
        },
        {
          title: "Trauma facial",
          body: "Atención de lesiones que afectan los huesos y tejidos de la cara.",
        },
        {
          title: "Cirugía de mandíbula y maxilares",
          body: "Manejo de alteraciones que comprometen la estructura y función de los maxilares.",
        },
        {
          title: "Patología maxilofacial",
          body: "Evaluación y tratamiento de lesiones y enfermedades de la región maxilofacial.",
        },
        {
          title: "Cirugía de tejidos blandos",
          body: "Tratamiento de alteraciones que afectan los tejidos de la región facial y oral.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Tu salud también está en los detalles",
      body: "Agenda una valoración con nuestro servicio de Cirugía Maxilofacial.",
    },
  ],
};
