// Mirror of https://clinicalaesperanza.co/p-suite-vip/

import type { PortfolioPageContent } from "../../types";

export const suiteVipPage: PortfolioPageContent = {
  title: "Suite VIP",
  back: { label: "Volver a servicios", href: "/portafolio/" },
  nav: [
    { label: "Hospitalización", href: "/portafolio/hospitalizacion/" },
    { label: "Pediatría", href: "/portafolio/hospitalizacion/pediatrica/" },
    { label: "Suite VIP", href: "/portafolio/hospitalizacion/suite-vip/" },
  ],
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/41-1024x453.webp",
        alt: "Suite VIP de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Suite VIP",
      subtitle: "Nuestra experiencia premium de hospitalización.",
      body: [
        "La Suite Serena ofrece el máximo nivel de comodidad, con un espacio exclusivo que combina privacidad, amplitud y servicios diferenciados para el paciente y su acompañante.",
      ],
    },
    {
      kind: "feature",
      title: "Recuperarse también significa sentirse como en casa",
      image: {
        src: "/images/portafolio/sm-e1787778529569-768x474.webp",
        alt: "Interior de una Suite VIP",
      },
      body: [
        "Nuestras Suites VIP fueron diseñadas para brindar una experiencia superior de hospitalización, ofreciendo mayor privacidad, confort y servicios exclusivos para que el paciente y su acompañante disfruten de una estancia más tranquila y agradable.",
      ],
    },
    {
      kind: "rooms",
      title: "Opciones de hospitalización",
      items: [
        {
          title: "Habitación Estándar",
          subtitle: "Comodidad y bienestar para tu recuperación.",
          description:
            "La Habitación Estándar ofrece un espacio cómodo, seguro y funcional, pensado para brindar una estancia agradable con la calidad y el cuidado que caracterizan a la Clínica La Esperanza.",
          features: [
            "Habitación privada",
            "Baño privado",
            "Aire acondicionado",
            "Televisión",
            "Alimentación",
            "Atención médica",
            "Enfermería 24h",
            "Acompañante",
          ],
          image: { src: "/images/portafolio/13.webp", alt: "Habitación Estándar" },
          cta: {
            label: "Conoce más",
            href: "/portafolio/hospitalizacion/habitacion-estandar/",
          },
        },
        {
          title: "Habitación Plus",
          subtitle: "Mayor confort para una estancia más agradable.",
          description:
            "La Habitación Plus está diseñada para quienes desean disfrutar de un ambiente más amplio, moderno y confortable durante su proceso de recuperación.",
          features: [
            "Habitación privada",
            "Baño privado",
            "Aire acondicionado",
            "Televisión",
            "Nevera",
            "Estación de café",
            "Espacios amplios",
            "Acompañante",
          ],
          image: { src: "/images/portafolio/14.webp", alt: "Habitación Plus" },
          cta: { label: "Conoce más", href: "/portafolio/hospitalizacion/habitacion-plus/" },
        },
        {
          title: "Suite Serena",
          subtitle: "Nuestra experiencia premium de hospitalización.",
          badge: "Premium",
          description:
            "La Suite Serena representa el máximo nivel de comodidad dentro de nuestra institución. Fue diseñada para brindar una experiencia exclusiva durante la hospitalización, combinando privacidad, amplitud y servicios diferenciados para el paciente y su acompañante.",
          features: [
            "Suite privada",
            "Baño privado",
            "Kit de aseo",
            "Televisión",
            "Menú especial",
            "Estación de café",
            "Experiencia premium",
            "Nevera",
            "Espacio acompañante",
            "Menú dif. acompañante",
          ],
          image: { src: "/images/portafolio/12.webp", alt: "Suite Serena" },
          cta: { label: "Conoce más", href: "/portafolio/hospitalizacion/suite-serena/" },
        },
      ],
    },
    {
      kind: "comparison",
      title: "Compara nuestras habitaciones",
      columns: ["Estándar", "Plus", "Suite Serena"],
      rows: [
        { feature: "Habitación privada", values: [true, true, true] },
        { feature: "Baño privado", values: [true, true, true] },
        { feature: "Aire acondicionado", values: [true, true, true] },
        { feature: "Televisión", values: [true, true, true] },
        { feature: "Nevera", values: [false, true, true] },
        { feature: "Estación de café", values: [false, true, true] },
        { feature: "Kit de aseo", values: [false, false, true] },
        { feature: "Espacio para acompañante", values: ["Básico", "Amplio", "Premium"] },
        { feature: "Menú especial", values: [false, false, true] },
        { feature: "Experiencia premium", values: [false, false, true] },
      ],
    },
    {
      kind: "closing",
      title: "Suite VIP",
      body: "En Clínica La Esperanza trabajamos cada día para brindar una experiencia de hospitalización segura, humana y confortable, acompañando a nuestros pacientes y sus familias con calidad, calidez y compromiso.",
      cta: { label: "Solicitar información", href: "/contacto/" },
    },
  ],
};
