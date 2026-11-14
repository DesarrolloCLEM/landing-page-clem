// Mirror of https://clinicalaesperanza.co/p-nace-con-esperanza/
// The live page embeds an Instagram reel that is not reproduced here.

import type { PortfolioPageContent } from "../../types";

export const naceConEsperanzaPage: PortfolioPageContent = {
  title: "Nace con Esperanza",
  back: { label: "Volver a servicios", href: "/portafolio/programas/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/sd.webp",
        alt: "Programa Nace con Esperanza de Clínica La Esperanza",
      },
    },
    {
      kind: "intro",
      title: "Nace con Esperanza",
      body: [
        "Acompañamos el nacimiento de tu bebé con una experiencia de atención, comodidad y cuidado en cada etapa, pensada para tu bienestar y el de tu recién nacido en un entorno seguro y privado.",
      ],
    },
    {
      kind: "feature",
      title: "El inicio de una nueva historia",
      body: [
        "El nacimiento de un hijo es uno de los momentos más importantes en la vida de una familia. Por eso, creamos una experiencia pensada para acompañarte antes, durante y después del nacimiento, con atención especializada, espacios diseñados para tu comodidad y un equipo dispuesto a cuidar cada detalle.",
        "Una experiencia integral para que mamá y bebé vivan este momento con tranquilidad, confianza y bienestar.",
      ],
    },
    {
      kind: "cards",
      title: "¿Por qué vivir esta experiencia en Clínica La Esperanza?",
      cols: 3,
      items: [
        {
          title: "Atención especializada",
          body: "Cuidado integral para mamá y bebé durante cada etapa del nacimiento.",
        },
        {
          title: "Comodidad y bienestar",
          body: "Espacios diseñados para brindar privacidad y una experiencia tranquila.",
        },
        {
          title: "Experiencia humanizada",
          body: "Acompañamiento y bienestar durante cada momento del nacimiento.",
        },
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-11_04_41-1024x683.webp",
          alt: "Suite de maternidad",
        },
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-08_31_18-768x1024.webp",
          alt: "Madre con su recién nacido",
        },
      ],
    },
    {
      kind: "accordion",
      title: "Esto es todo lo que vas a encontrar en nuestra experiencia",
      items: [
        {
          title: "Cuidado desde el primer momento",
          body: [
            "Realizamos seguimiento antes y durante el nacimiento para evaluar el bienestar de tu bebé, brindando monitoreo continuo y acompañamiento permanente con el especialista en ginecología, quien estará atenta a cada etapa del proceso para ofrecer mayor seguridad y tranquilidad.",
          ],
        },
        {
          title: "Bienestar durante el proceso",
          body: [
            "Durante el trabajo de parto se realizan ejercicios guiados que ayudan a favorecer el bienestar de la madre, mejorar la movilidad y acompañar el proceso de manera más cómoda y controlada. Estos ejercicios están orientados a facilitar el desarrollo del parto y brindar mayor tranquilidad durante esta etapa.",
          ],
        },
        {
          title: "Acompañamiento",
          subtitle: "Requisito: certificado del curso psicoprofiláctico o curso prenatal",
          body: [
            "Durante el nacimiento, un acompañante podrá estar presente para brindar apoyo a mamá durante este momento. Además, podrá participar en los primeros instantes de la llegada del bebé y compartir esta experiencia especial junto a la familia.",
          ],
        },
        {
          title: "Manejo del dolor",
          subtitle: "Alivio para mayor bienestar",
          body: [
            "Contamos con alternativas que ayudan a disminuir las molestias durante el nacimiento y el proceso de recuperación, brindando mayor comodidad y bienestar.",
          ],
          items: [
            "Parto vaginal: bloqueo epidural disponible durante el trabajo de parto.",
            "Cesárea: bomba de manejo del dolor hasta por 72 horas para favorecer una recuperación más confortable.",
          ],
        },
        {
          title: "Atención personalizada para tu bebé",
          body: [
            "Desde sus primeros momentos de vida, tu bebé contará con valoración y seguimiento especializado:",
          ],
          items: [
            "Valoración por pediatra: evaluación especializada del recién nacido.",
            "Tamizaje de enfermedades metabólicas neonatales: detección temprana de condiciones de salud.",
            "Cita de control con pediatría: seguimiento a los 5 días del nacimiento.",
            "Control con ginecología: seguimiento para evaluar la recuperación de mamá.",
          ],
        },
        {
          title: "Comodidades y privacidad para tu recuperación",
          body: [
            "Alojamiento en Suite VIP por 2 días, menú a elección con merienda para la paciente, menú diferencial para el acompañante (costo adicional), kit de aseo personal, televisión, nevera, estación de café, espacio cómodo de descanso para el acompañante, ambiente diseñado para una mejor recuperación.",
          ],
        },
        {
          title: "Banco de células madres",
          subtitle: "Protección y futuro",
          body: [
            "Ofrecemos la toma de sangre del cordón umbilical al momento del nacimiento, un procedimiento seguro que permite conservar células madre con posibles usos médicos en el futuro del bebé o su familia.",
          ],
          items: [
            "Se realiza en el momento del nacimiento, sin interferir con el parto.",
            "Es seguro y realizado por personal capacitado.",
            "Permite conservar células en un banco especializado.",
            "Es una decisión única que solo puede tomarse al nacer.",
          ],
        },
      ],
    },
    {
      kind: "plans",
      title: "Planes / Paquetes",
      items: [
        {
          name: "Parto Humanizado",
          description:
            "Una experiencia diseñada para acompañar el nacimiento de tu bebé de forma segura, respetuosa y con atención integral para mamá y recién nacido.",
          price: "$ 6.000.000",
          includes: [
            "Monitoreo fetal antes y durante el parto",
            "Ejercicios para el trabajo de parto",
            "Bloqueo epidural disponible",
            "Acompañamiento de un familiar",
            "Alojamiento en Suite VIP por 2 días",
            "Menú a elección con merienda",
            "Kit de aseo personal",
            "Valoración del recién nacido por pediatra neonatólogo",
            "Tamizaje de enfermedades metabólicas neonatales",
            "Control con ginecología",
            "Control pediátrico",
            "Toma de muestra para el banco de células madres (adicional)",
          ],
        },
        {
          name: "Cesárea humanizada",
          description:
            "Una experiencia enfocada en la seguridad, el bienestar y la comodidad durante el nacimiento por cesárea, con acompañamiento integral para mamá y bebé.",
          price: "$ 7.000.000",
          includes: [
            "Monitoreo fetal antes y durante el parto",
            "Bomba del dolor por hasta 72 horas",
            "Acompañamiento de un familiar",
            "Alojamiento en Suite VIP por 2 días",
            "Menú a elección con merienda",
            "Kit de aseo personal",
            "Valoración del recién nacido por pediatra neonatólogo",
            "Tamizaje de enfermedades metabólicas neonatales",
            "Control con ginecología",
            "Control pediátrico",
            "Toma de muestra para el banco de células madres (adicional)",
          ],
        },
      ],
    },
    {
      kind: "gallery",
      images: [
        {
          src: "/images/portafolio/chatgpt-image-27-ago-2026-11_01_08-1024x682.webp",
          alt: "Atención al recién nacido",
        },
        { src: "/images/portafolio/14-2-1024x683.webp", alt: "Suite de maternidad" },
      ],
    },
    {
      kind: "closing",
      title: "Comunícate con nosotros y vive esta experiencia",
      body: "AppCLEM (App Store / Google Play) · Calle 12 # 4-58, Barrio Buenavista · PBX 7848903 · info@clinicalaesperanza.co",
    },
  ],
};
