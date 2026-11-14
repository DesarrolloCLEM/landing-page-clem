// Mirror of https://clinicalaesperanza.co/p-detalle-habitacion-estandar/,
// /p-detalle-habitacion-plus/ and /p-detalle-suite-serena/

import type { PortfolioPageContent } from "../../types";

const backToSuiteVip = {
  label: "Volver a servicios",
  href: "/portafolio/hospitalizacion/suite-vip/",
};

export const habitacionEstandarPage: PortfolioPageContent = {
  title: "Habitación Estándar",
  back: backToSuiteVip,
  blocks: [
    {
      kind: "intro",
      title: "Habitación Estándar",
      body: [
        "La Habitación Estándar de Clínica La Esperanza ofrece un espacio cómodo, seguro y funcional, diseñado para brindar una estancia agradable durante el proceso de recuperación. Cada habitación es privada y cuenta con baño privado, aire acondicionado y televisión, además de alimentación, atención médica y enfermería disponible las 24 horas, con la posibilidad de contar con un acompañante durante la estancia.",
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-09_22_26-1024x683.webp",
          alt: "Habitación Estándar",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-09_31_19-1024x683.webp",
          alt: "Baño de la Habitación Estándar",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-09_24_49-1024x683.webp",
          alt: "Detalle de la Habitación Estándar",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-09_29_21-1024x683.webp",
          alt: "Espacio para el acompañante",
        },
      ],
    },
  ],
};

export const habitacionPlusPage: PortfolioPageContent = {
  title: "Habitación Plus",
  back: backToSuiteVip,
  blocks: [
    {
      kind: "intro",
      title: "Habitación Plus",
      body: [
        "La Habitación Plus ofrece una experiencia superior de comodidad para tu recuperación. Se trata de una habitación más amplia y confortable, con amenidades adicionales para que el paciente y su acompañante disfruten de una estancia más agradable, sin dejar de lado la calidad médica y el cuidado humano que distinguen a Clínica La Esperanza.",
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-26-ago-2026-16_31_47-1024x1024.webp",
          alt: "Habitación Plus",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-09_40_41-1024x1024.webp",
          alt: "Zona de descanso de la Habitación Plus",
        },
        { src: "/images/portafolio/33.webp", alt: "Detalle de la Habitación Plus" },
        {
          src: "/images/portafolio/chatgpt-image-26-ago-2026-16_31_01-1024x1024.webp",
          alt: "Baño de la Habitación Plus",
        },
        {
          src: "/images/portafolio/chatgpt-image-26-ago-2026-16_26_43-1024x1024.webp",
          alt: "Estación de café de la Habitación Plus",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-09_38_11-1024x1024.webp",
          alt: "Espacio para el acompañante",
        },
      ],
    },
  ],
};

export const suiteSerenaPage: PortfolioPageContent = {
  title: "Suite Serena",
  back: backToSuiteVip,
  blocks: [
    {
      kind: "intro",
      title: "Suite Serena",
      body: [
        "La opción de máxima categoría en Clínica La Esperanza combina elegancia, privacidad y servicios diferenciados para una hospitalización excepcional. Pensada para quienes buscan una experiencia superior durante su recuperación, ofrece un ambiente exclusivo, ideal para pacientes y acompañantes que desean sumar tranquilidad y distinción a su proceso.",
      ],
    },
    {
      kind: "gallery",
      images: [
        { src: "/images/portafolio/57.webp", alt: "Suite Serena" },
        { src: "/images/portafolio/14-2-1024x683.webp", alt: "Habitación de la Suite Serena" },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-08_53_59-1024x683.webp",
          alt: "Zona de estar de la Suite Serena",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-08_51_02-1024x997.webp",
          alt: "Baño de la Suite Serena",
        },
        { src: "/images/portafolio/imagen_463x549.webp", alt: "Detalle de la Suite Serena" },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-08_38_11-864x1024.webp",
          alt: "Espacio para el acompañante",
        },
        { src: "/images/portafolio/56.webp", alt: "Estación de café de la Suite Serena" },
        { src: "/images/portafolio/55-2.webp", alt: "Vista general de la Suite Serena" },
      ],
    },
  ],
};
