// Mirror of https://clinicalaesperanza.co/p-programas-especiales/
// The live page opens with a leftover "Unidad Quirúrgica" block copied from the
// surgery page; it is left out here.

import type { PortfolioPageContent } from "../../types";

export const programasEspecialesPage: PortfolioPageContent = {
  title: "Programas Especiales",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/aw.webp",
        alt: "Programas especiales de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Programas Especiales",
      subtitle: "Servicios diferenciales e innovadores.",
      body: [
        "En Clínica La Esperanza desarrollamos programas especiales que van más allá de la atención tradicional, pensados para acompañar momentos y necesidades particulares de nuestros pacientes con un enfoque innovador.",
      ],
    },
    {
      kind: "photoCards",
      cols: 3,
      items: [
        {
          title: "Centro de Intervencionismo Cardiovascular",
          body: "Programa especializado en procedimientos cardiovasculares de mínima invasión.",
          href: "/portafolio/programas/centro-de-intervencionismo/",
          image: { src: "/images/portafolio/awxs-1.webp", alt: "" },
        },
        {
          title: "Nace con Esperanza",
          body: "Un proceso respetuoso y cercano para cada madre, honrando su ritmo y sus decisiones, con todo el respaldo clínico disponible si se necesita.",
          href: "/portafolio/programas/nace-con-esperanza/",
          image: { src: "/images/portafolio/cfr.webp", alt: "" },
        },
        {
          title: "Chequeos Médicos Preventivos",
          body: "Evaluaciones diseñadas para detectar a tiempo y cuidar la salud de manera proactiva.",
          href: "/portafolio/programas/chequeos-medicos-preventivos/",
          image: { src: "/images/portafolio/bhy.webp", alt: "" },
        },
      ],
    },
    {
      kind: "gallery",
      title: "Conoce nuestros espacios",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-26-ago-2026-15_29_59-1024x765.webp",
          alt: "Sala del Centro de Intervencionismo",
        },
        { src: "/images/services/hospitalizacion-3.webp", alt: "Detalle de una habitación" },
        {
          src: "/images/services/hospitalizacion-1.webp",
          alt: "Sistema de llamado de enfermería",
        },
        { src: "/images/portafolio/20.webp", alt: "Habitación de hospitalización" },
        { src: "/images/portafolio/17.webp", alt: "Pasillo del área de hospitalización" },
        { src: "/images/portafolio/18.webp", alt: "Habitación de hospitalización" },
        { src: "/images/portafolio/19.webp", alt: "Área de hospitalización" },
      ],
    },
    {
      kind: "closing",
      title: "Cuidado innovador, pensado para ti",
      body: "Clínica La Esperanza · Montería",
    },
  ],
};
