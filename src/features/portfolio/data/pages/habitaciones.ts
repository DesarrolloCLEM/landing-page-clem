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
        { src: "/images/services/habitacion-estandar-portada.webp", alt: "Habitación Estándar" },
        {
          src: "/images/services/habitacion-estandar-1.webp",
          alt: "Cama de la Habitación Estándar",
        },
        {
          src: "/images/services/habitacion-estandar-2.webp",
          alt: "Habitación Estándar con sillón para el acompañante",
        },
        {
          src: "/images/services/habitacion-estandar-3.webp",
          alt: "Detalle de la Habitación Estándar",
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
        { src: "/images/services/habitacion-plus-portada.webp", alt: "Habitación Plus" },
        {
          src: "/images/services/habitacion-plus-1.webp",
          alt: "Detalle de la cama de la Habitación Plus",
        },
        {
          src: "/images/services/habitacion-plus-2.webp",
          alt: "Zona de descanso de la Habitación Plus",
        },
        {
          src: "/images/services/habitacion-plus-3.webp",
          alt: "Sillón para el acompañante en la Habitación Plus",
        },
        {
          src: "/images/services/habitacion-plus-4.webp",
          alt: "Habitación Plus con cuna para el recién nacido",
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
        { src: "/images/services/suite-serena-portada.webp", alt: "Suite Serena" },
        { src: "/images/services/suite-serena-1.webp", alt: "Sala de la Suite Serena" },
        { src: "/images/services/suite-serena-2.webp", alt: "Sofá y flores en la Suite Serena" },
        { src: "/images/services/suite-serena-3.webp", alt: "Cama de la Suite Serena" },
        {
          src: "/images/services/suite-serena-menu-desayuno.webp",
          alt: "Desayuno del menú de la Suite Serena",
        },
        {
          src: "/images/services/suite-serena-menu-almuerzo.webp",
          alt: "Almuerzo del menú de la Suite Serena",
        },
        {
          src: "/images/services/suite-serena-menu-cena.webp",
          alt: "Cena del menú de la Suite Serena",
        },
        {
          src: "/images/services/suite-serena-menu-snack.webp",
          alt: "Merienda del menú de la Suite Serena",
        },
      ],
    },
  ],
};
