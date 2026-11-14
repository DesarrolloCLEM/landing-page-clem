// Mirror of https://clinicalaesperanza.co/p-anestesiologia/

import type { PortfolioPageContent } from "../../types";

export const anestesiologiaPage: PortfolioPageContent = {
  title: "Anestesiología",
  back: { label: "Volver a servicios", href: "/portafolio/consulta-externa/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/bb.webp",
        alt: "Anestesiología",
      },
    },
    {
      kind: "intro",
      title: "Anestesiología",
      body: ["Un equipo dedicado a que cada procedimiento sea seguro, cómodo y libre de dolor."],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-15_31_38-1024x696.webp",
          alt: "Anestesiología",
        },
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-15_45_53-1024x576.webp",
          alt: "Anestesiología",
        },
      ],
    },
    {
      kind: "cards",
      items: [
        {
          title: "Anestesia pensada en tu tranquilidad",
          body: "Contamos con un equipo de anestesiología especializado en acompañar cada procedimiento con las técnicas más adecuadas para tu seguridad y confort, desde la sedación hasta el control avanzado del dolor.",
        },
        {
          title: "Nuestros servicios",
        },
        {
          title: "Bomba de Manejo del Dolor",
          body: "Sistema de infusión continua de analgesia para procedimientos y cirugías, pensado para lograr una recuperación con el mínimo dolor posible.",
        },
        {
          title: "Consulta Preanestésica",
          body: "Valoración previa a la cirugía para planear el tipo de anestesia más seguro según tu condición de salud.",
        },
        {
          title: "Bloqueos Nerviosos y Anestesia Regional",
          body: "Técnicas dirigidas para controlar el dolor en zonas específicas del cuerpo, reduciendo la necesidad de anestesia general.",
        },
        {
          title: "Sedación para Procedimientos Ambulatorios",
          body: "Manejo seguro y controlado de la sedación en procedimientos fuera de quirófano.",
        },
        {
          title: "Manejo del Dolor",
          body: "Evaluación y tratamiento especializado para pacientes con dolor agudo o crónico asociado a procedimientos médicos y quirúrgicos.",
        },
        {
          title: "¿Por qué elegirnos?",
        },
        {
          title: "Equipo especializado",
          body: "Anestesiólogos con experiencia en procedimientos de baja y alta complejidad.",
        },
        {
          title: "Seguridad ante todo",
          body: "Monitoreo continuo y protocolos estrictos en cada procedimiento.",
        },
        {
          title: "Acompañamiento personalizado",
          body: "Planeamos el tipo de anestesia según tu caso particular.",
        },
      ],
    },
    {
      kind: "closing",
      title: "Procedimientos sin dolor, con total confianza",
      body: "Agenda tu valoración con nuestro equipo de anestesiología.",
    },
  ],
};
