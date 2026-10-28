import { healthPackages } from "@/config/site";

import type { ServiceEntry } from "../types";

const packageHref = (slug: string) => healthPackages.find((item) => item.slug === slug)?.href;

export const programsIntro = {
  title: "Programas especiales",
  tagline: "Servicios diferenciales e innovadores",
  description:
    "En Clínica La Esperanza desarrollamos programas especiales que van más allá de la atención tradicional, pensados para acompañar momentos y necesidades particulares de nuestros pacientes con un enfoque innovador.",
  closing: {
    title: "Cuidado innovador, pensado para ti",
    description: "Comunícate con nosotros para conocer cada programa.",
  },
};

export const programs: ServiceEntry[] = [
  {
    slug: "centro-de-intervencionismo",
    kind: "program",
    href: "/servicios/programas/centro-de-intervencionismo/",
    title: "Centro de Intervencionismo Cardiovascular",
    tagline: "Procedimientos cardiovasculares de mínima invasión, con tecnología de punta",
    summary: "Programa especializado en procedimientos cardiovasculares de mínima invasión.",
    image: {
      src: "/images/services/intervencionismo-corazon.webp",
      alt: "Médico sosteniendo un corazón de juguete",
    },
    intro: [
      "Contamos con una sala especializada para el diagnóstico y tratamiento de enfermedades cardiovasculares mediante procedimientos de mínima invasión, respaldada por equipos de tecnología avanzada y un equipo clínico altamente capacitado.",
    ],
    sections: [
      {
        id: "tecnologia",
        title: "Nuestra tecnología",
        layout: "cards",
        items: [
          {
            title: "Estación de anestesia · Dräger Atlan A300",
            description:
              "Soporte anestésico integral durante procedimientos de hemodinamia. Plataforma central que integra monitoreo y ventilación anestésica de alta precisión.",
          },
          {
            title: "Monitor multiparámetro · Dräger Vista 300",
            description:
              "Monitoreo continuo de signos vitales del paciente. Parte de la configuración de la estación de anestesia; seguimiento en tiempo real durante el procedimiento.",
          },
          {
            title: "Módulo de monitoreo de profundidad anestésica · BIS Covidien",
            description:
              "Medición del nivel de conciencia y profundidad anestésica. Permite ajustar la anestesia con mayor precisión y seguridad.",
          },
          {
            title: "Monitor de bloqueo neuromuscular · TOFscan",
            description:
              "Monitoreo del grado de relajación muscular. Contribuye a una dosificación anestésica más segura y controlada.",
          },
        ],
      },
      {
        id: "equipos-en-confirmacion",
        title: "Equipos en proceso de confirmación",
        layout: "list",
        items: [
          {
            title: "Bombas de infusión volumétricas",
            description: "Administración controlada de líquidos y medicamentos IV.",
          },
          {
            title: "Bombas de jeringa",
            description: "Administración precisa de medicamentos en dosis controladas.",
          },
          {
            title: "Inyector de medio de contraste",
            description: "Inyección automatizada de contraste para estudios de imagen.",
          },
          {
            title: "Polígrafo / sistema de registro electrofisiológico (mín. 64 canales)",
            description:
              "Registro y análisis de señales electrofisiológicas durante el procedimiento.",
          },
        ],
        outro: [
          "La información de equipos en proceso de confirmación se actualizará una vez se definan las referencias definitivas.",
        ],
      },
    ],
    related: [
      "/servicios/especialidades/cirugia-cardiovascular/",
      "/servicios/especialidades/cardiologia-pediatrica/",
      "/servicios/cuidado-critico/",
    ],
    closing: {
      title: "Comunícate con nosotros",
      description: "Agenda una valoración con nuestro equipo cardiovascular.",
    },
  },
  {
    slug: "nace-con-esperanza",
    kind: "program",
    href: "/servicios/programas/nace-con-esperanza/",
    title: "Nace con Esperanza",
    tagline: "El inicio de una nueva historia",
    summary:
      "Un proceso respetuoso y cercano para cada madre, honrando su ritmo y sus decisiones, con todo el respaldo clínico disponible si se necesita.",
    image: {
      src: "/images/services/nace-con-esperanza-madre.webp",
      alt: "Madre sosteniendo a su bebé recién nacido en la habitación",
    },
    intro: [
      "Acompañamos el nacimiento de tu bebé con una experiencia de atención, comodidad y cuidado en cada etapa, pensada para tu bienestar y el de tu recién nacido en un entorno seguro y privado.",
      "El nacimiento de un hijo es uno de los momentos más importantes en la vida de una familia. Por eso, creamos una experiencia pensada para acompañarte antes, durante y después del nacimiento, con atención especializada, espacios diseñados para tu comodidad y un equipo dispuesto a cuidar cada detalle.",
      "Una experiencia integral para que mamá y bebé vivan este momento con tranquilidad, confianza y bienestar.",
    ],
    sections: [
      {
        id: "por-que",
        title: "¿Por qué vivir esta experiencia en Clínica La Esperanza?",
        layout: "cards",
        items: [
          {
            title: "Atención especializada",
            description: "Cuidado integral para mamá y bebé durante cada etapa del nacimiento.",
          },
          {
            title: "Comodidad y bienestar",
            description: "Espacios diseñados para brindar privacidad y una experiencia tranquila.",
          },
          {
            title: "Experiencia humanizada",
            description: "Acompañamiento y bienestar durante cada momento del nacimiento.",
          },
        ],
      },
      {
        id: "experiencia",
        title: "Esto es todo lo que vas a encontrar en nuestra experiencia",
        layout: "cards",
        items: [
          {
            title: "Monitoreo y acompañamiento",
            description:
              "Realizamos seguimiento antes y durante el nacimiento para evaluar el bienestar de tu bebé, brindando monitoreo continuo y acompañamiento permanente con el especialista en ginecología, quien estará atenta a cada etapa del proceso para ofrecer mayor seguridad y tranquilidad.",
          },
          {
            title: "Ejercicios durante el trabajo de parto",
            description:
              "Durante el trabajo de parto se realizan ejercicios guiados que ayudan a favorecer el bienestar de la madre, mejorar la movilidad y acompañar el proceso de manera más cómoda y controlada. Estos ejercicios están orientados a facilitar el desarrollo del parto y brindar mayor tranquilidad durante esta etapa. Requisito: certificado del curso psicoprofiláctico o curso prenatal.",
          },
          {
            title: "Acompañante en el nacimiento",
            description:
              "Durante el nacimiento, un acompañante podrá estar presente para brindar apoyo a mamá durante este momento. Además, podrá participar en los primeros instantes de la llegada del bebé y compartir esta experiencia especial junto a la familia.",
          },
          {
            title: "Alivio para mayor bienestar",
            description:
              "Contamos con alternativas que ayudan a disminuir las molestias durante el nacimiento y el proceso de recuperación, brindando mayor comodidad y bienestar. Parto vaginal: bloqueo epidural disponible durante el trabajo de parto. Cesárea: bomba de manejo del dolor hasta por 72 horas para favorecer una recuperación más confortable.",
          },
          {
            title: "Cuidado del recién nacido",
            description:
              "Desde sus primeros momentos de vida, tu bebé contará con valoración y seguimiento especializado: valoración por pediatra (evaluación especializada del recién nacido), tamizaje de enfermedades metabólicas neonatales (detección temprana de condiciones de salud), cita de control con pediatría (seguimiento a los 5 días del nacimiento) y control con ginecología (seguimiento para evaluar la recuperación de mamá).",
          },
          {
            title: "Alojamiento en Suite VIP",
            description:
              "Alojamiento en Suite VIP por 2 días, menú a elección con merienda para la paciente, menú diferencial para el acompañante (costo adicional), kit de aseo personal, televisión, nevera, estación de café, espacio cómodo de descanso para el acompañante y ambiente diseñado para una mejor recuperación.",
            href: "/servicios/hospitalizacion/suite-vip/",
          },
        ],
      },
      {
        id: "proteccion",
        title: "Protección y futuro",
        intro: [
          "Ofrecemos la toma de sangre del cordón umbilical al momento del nacimiento, un procedimiento seguro que permite conservar células madre con posibles usos médicos en el futuro del bebé o su familia.",
        ],
        layout: "checklist",
        items: [
          { title: "Se realiza en el momento del nacimiento, sin interferir con el parto." },
          { title: "Es seguro y realizado por personal capacitado." },
          { title: "Permite conservar células en un banco especializado." },
          { title: "Es una decisión única que solo puede tomarse al nacer." },
        ],
      },
    ],
    plans: [
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
          "Toma de muestra para el banco de células madre (adicional)",
        ],
      },
      {
        name: "Cesárea Humanizada",
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
          "Toma de muestra para el banco de células madre (adicional)",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/services/nace-con-esperanza-habitacion.webp",
        alt: "Madre acompañada por su pareja y el equipo de enfermería",
      },
      {
        src: "/images/services/nace-con-esperanza-suite.webp",
        alt: "Sala de descanso de la Suite VIP",
      },
    ],
    related: [
      "/servicios/especialidades/ginecologia-y-obstetricia/",
      "/servicios/especialidades/perinatologia/",
      "/servicios/hospitalizacion/suite-vip/",
    ],
    closing: {
      title: "Comunícate con nosotros y vive esta experiencia",
      description: "Te acompañamos en la llegada de tu bebé.",
    },
  },
  {
    slug: "chequeos-medicos-preventivos",
    kind: "program",
    href: "/servicios/programas/chequeos-medicos-preventivos/",
    title: "Chequeos médicos preventivos",
    tagline: "Detectar a tiempo para cuidar tu salud",
    summary: "Evaluaciones diseñadas para detectar a tiempo y cuidar la salud de manera proactiva.",
    image: {
      src: "/images/services/programas-chequeos.webp",
      alt: "Madre e hija en un chequeo médico",
    },
    // TODO(clinica): the legacy page reused the interventionism introduction; this one comes
    // from the Programas especiales summary.
    intro: ["Evaluaciones diseñadas para detectar a tiempo y cuidar la salud de manera proactiva."],
    sections: [
      {
        id: "chequeos",
        title: "Nuestros chequeos",
        layout: "cards",
        items: [
          {
            title: "Listo para Entrenar",
            description:
              "Un chequeo pensado para quienes practican deporte o quieren empezar, evaluando tu condición general antes de exigir a tu cuerpo.",
            href: packageHref("listo-para-entrenar"),
            external: true,
          },
          {
            title: "Mujer Sana",
            description:
              "Un espacio de chequeo pensado para la mujer en distintas etapas de su vida, con un enfoque en su bienestar integral.",
            href: packageHref("mujer-sana"),
            external: true,
          },
          {
            title: "Embarazo Seguro",
            description:
              "Un chequeo preventivo pensado para acompañar a la futura mamá y cuidar su bienestar y el de su bebé.",
          },
          {
            title: "Bienestar Digestivo",
            description:
              "Un chequeo enfocado en la salud digestiva, pensado para quienes quieren cuidar este aspecto de su bienestar de forma preventiva.",
          },
          {
            title: "Bienestar Urológico",
            description:
              "Un chequeo enfocado en la salud urológica, pensado para la detección temprana y el cuidado preventivo.",
          },
          {
            title: "Creciendo Bien",
            description:
              "Un chequeo pensado para acompañar el crecimiento y desarrollo de los más pequeños de la casa.",
          },
          {
            title: "Latidos de Vida",
            description:
              "Un chequeo enfocado en la salud del corazón, pensado para el cuidado preventivo de manera oportuna.",
            href: packageHref("latidos-de-vida"),
            external: true,
          },
        ],
      },
    ],
    related: ["/paquetes-integrales/", "/servicios/consulta-externa/", "/agenda/"],
    closing: {
      title: "Comunícate con nosotros",
      description: "Agenda tu chequeo preventivo por WhatsApp.",
    },
  },
];
