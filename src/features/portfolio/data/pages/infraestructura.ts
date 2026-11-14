// Mirror of https://clinicalaesperanza.co/p-infraestructura/
// The capacity table keeps the figures published by the clinic even where the
// rows do not add up (Total 105 + 101 = 206, published as 205).

import type { PortfolioPageContent } from "../../types";

export const infraestructuraPage: PortfolioPageContent = {
  title: "Construyendo el futuro de tu salud",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/xxa.webp",
        alt: "Render del proyecto de expansión de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Construyendo el futuro de tu salud",
      subtitle:
        "Un proyecto de expansión que fortalecerá nuestra capacidad instalada y la atención para miles de familias.",
    },
    {
      kind: "stats",
      title: "Expansión y crecimiento",
      items: [
        { value: "123", title: "Capacidad actual", body: "camas habilitadas" },
        { value: "7.764 m²", title: "Nueva torre", body: "de construcción" },
        { value: "218", title: "Proyección total", body: "camas proyectadas" },
      ],
    },
    {
      kind: "feature",
      body: [
        "Las capacidades proyectadas estarán disponibles conforme avance el proceso de dotación, habilitación y puesta en operación de cada servicio.",
      ],
    },
    {
      kind: "feature",
      title: "Ampliación y proyección",
      image: {
        src: "/images/portafolio/1-5-2-1290x725.webp",
        alt: "Render de la nueva torre de Clínica La Esperanza",
      },
      body: [
        "Nuestra gestión se orienta al mejoramiento continuo, la innovación y el fortalecimiento de las capacidades institucionales, consolidando una oferta de servicios que responde a los desafíos actuales del sector salud.",
        "Avanzamos en el fortalecimiento de nuestra infraestructura, tecnología y talento humano para ofrecer una atención más integral, segura y oportuna, con una visión de futuro y nuevas posibilidades para nuestros pacientes.",
      ],
    },
    {
      kind: "gallery",
      title: "Galería del proyecto",
      images: [
        {
          src: "/images/portafolio/diseno-sin-titulo.webp",
          alt: "Plano del proyecto de expansión",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-15_56_10-1024x683.webp",
          alt: "Render de una habitación de la nueva torre",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-14_44_38-1024x683.webp",
          alt: "Render de un área asistencial de la nueva torre",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-15_53_02-1024x683.webp",
          alt: "Render de la recepción de la nueva torre",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-14_48_58-1-1024x683.webp",
          alt: "Render exterior de la nueva torre",
        },
      ],
    },
    {
      kind: "comparison",
      title: "Así crecerá nuestra capacidad",
      rowHeader: "Servicio",
      columns: ["Camas actuales", "Ampliación", "Proyección total"],
      rows: [
        { feature: "Hospitalización General", values: ["26", "38", "64"] },
        { feature: "Hospitalización Cuarto Piso", values: ["32", "32", "64"] },
        { feature: "Cuidados Intensivos Adultos", values: ["12", "19", "19"] },
        { feature: "Cuidados Intermedios Adultos", values: ["2", "11", "13"] },
        { feature: "Cuidados Intensivos Neonatal", values: ["26", "4", "30"] },
        { feature: "Cuidados Intensivos Pediátricos", values: ["7", "8", "15"] },
        { feature: "Total", values: ["105", "101", "205"] },
      ],
    },
    {
      kind: "groups",
      title: "Detalles del proyecto de ampliación",
      items: [
        {
          title: "Edificio 1",
          body: "Edificio principal, ubicado sobre la calle 12. Área del lote: 737 m². Área construida: 3.496 m².",
        },
        {
          title: "Edificio 2",
          body: "Pertenece al edificio ubicado sobre la carrera 7. Área del lote: 360 m². Área construida: 720 m². Área pendiente de construcción: 360 m².",
        },
        {
          title: "Nueva construcción (Edificio 3)",
          body: "Corresponde al edificio de la nueva construcción, ubicado sobre la calle 11. Área total: 7.764 m², distribuidos en Piso 1 (1.744,25 m² — habilitado), Piso 2 (1.744,25 m²), Piso 3 (1.744,25 m²), Piso 4 (1.266 m²), Piso 5 (1.266 m²).",
        },
      ],
    },
    {
      kind: "feature",
      body: ["Área sin construir — Lote para parqueadero: 1.988,5 m²."],
    },
    {
      kind: "closing",
      title: "Un futuro con más capacidad para cuidar de ti",
      body: "Conoce más sobre nuestro compromiso de seguir creciendo para brindarte una mejor atención.",
    },
  ],
};
