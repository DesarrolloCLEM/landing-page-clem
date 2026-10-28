export const usersPage = {
  eyebrow: "Clínica La Esperanza",
  title: "Nuestros usuarios",
  description: "Acompañamos, escuchamos y mejoramos juntos.",
  image: {
    src: "/images/patients/equipo-siau.webp",
    alt: "Personal de atención al usuario de la clínica revisando información en tabletas",
  },
  siau: [
    "En Clínica La Esperanza velamos por el bienestar y satisfacción de nuestros usuarios desde la Coordinación de SIAU (Sistema de Información de Atención al Usuario).",
    "Desde Coordinación SIAU se extiende la invitación a la comunidad que quiera formar parte de la alianza de usuarios. Pueden inscribirse en la oficina de SIAU en primer piso y las reuniones de la Alianza de Usuarios tienen una frecuencia de cada tres meses.",
  ],
  allianceAction: "Quiero hacer parte de la Alianza de Usuarios",
  commitments: {
    title: "Compromisos con nuestros usuarios",
    paragraphs: [
      "En Clínica La Esperanza trabajamos por el bienestar y la satisfacción de nuestros usuarios, brindando una atención cercana, oportuna y humanizada.",
      "A través del SIAU y la Alianza de Usuarios, promovemos la participación, la escucha activa y la mejora continua de nuestros servicios.",
    ],
  },
  alliance: {
    title: "Alianza de usuarios",
    subtitle: "Tu voz hace parte de nuestra mejora continua",
    items: [
      "Inscripción presencial en la oficina SIAU",
      "Reuniones cada tres (3) meses",
      "Espacio abierto para propuestas y acompañamiento institucional",
    ],
  },
  testimonials: {
    title: "Voces de quienes ya confiaron en nosotros",
    description:
      "Cada historia representa un momento importante en la vida de nuestros pacientes. Aquí compartimos algunas experiencias que reflejan nuestro compromiso con una atención segura, humana y cercana.",
    linkLabel: "Leer historia completa",
  },
  opinion: {
    title: "Tu opinión nos ayuda a seguir mejorando la atención",
    action: {
      label: "Comparte tu experiencia con nosotros",
      href: "/felicitaciones-sugerencias-quejas-y-reclamos/",
    },
  },
  procedures: {
    title: "Trámites y orientación",
    items: [
      {
        title: "Deberes y derechos",
        description: "Conoce los deberes y derechos de los pacientes.",
        href: "/deberes-y-derechos/",
      },
      {
        title: "Felicitaciones, sugerencias, quejas y reclamos",
        description: "Déjanos tu opinión para mejorar nuestros servicios.",
        href: "/felicitaciones-sugerencias-quejas-y-reclamos/",
      },
      {
        title: "Preguntas frecuentes",
        description: "Copagos, consulta preanestésica, historia clínica e imagenología.",
        href: "/preguntas-frecuentes/",
      },
    ],
  },
};

export type RightsGroup = { title: string; items: string[] };

export const rightsPage = {
  title: "Deberes y derechos",
  description:
    "Conoce los deberes y derechos de los pacientes de Clínica La Esperanza. Juntos construimos una atención segura, respetuosa y humanizada.",
  tabsLabel: "Deberes y derechos del paciente",
  duties: {
    title: "Deberes del paciente",
    groups: [
      {
        title: "Informar y actuar",
        items: [
          "Suministrar información veraz, clara y completa sobre su estado de salud.",
          "Actuar de buena fe promoviendo el cuidado de su salud, la de su familia y la de su comunidad.",
          "Presentar de manera voluntaria y oportuna los documentos requeridos y necesarios para una atención pertinente.",
        ],
      },
      {
        title: "Respetar",
        items: [
          "Respetar al personal humano responsable de la prestación y administración de los servicios de salud y brindar un trato humanizado.",
          "Respetar y brindar un trato solidario y humanizado frente a las necesidades de otros pacientes.",
          "Cuidar y hacer uso racional de los recursos, elementos y equipos tecnológicos de la institución.",
          "Respetar la política del silencio dentro de las instalaciones, para fomentar un ambiente más agradable.",
        ],
      },
      {
        title: "Cumplir",
        items: [
          "Atender oportunamente las recomendaciones formuladas por el personal de salud.",
          "Cumplir con los horarios de atención estipulados por la IPS.",
          "Contribuir al pago de los gastos según corresponda por la prestación de servicios.",
        ],
      },
    ] satisfies RightsGroup[],
  },
  rights: {
    title: "Derechos del paciente",
    groups: [
      {
        title: "Acceder",
        items: [
          "Atención de urgencias de manera oportuna, sin restricciones.",
          "La mejor asistencia médica, ayudas diagnósticas, procedimientos y tratamientos.",
          "A una segunda opinión, cuando se presenten dudas sobre el diagnóstico o tratamiento de su enfermedad.",
        ],
      },
      {
        title: "Consentimiento y libre escogencia",
        items: [
          "Aceptar o rechazar los tratamientos o actividades para el manejo de su enfermedad.",
          "Aceptar o rechazar apoyo emocional y/o espiritual en cualquier etapa de su enfermedad.",
          "Respetar su voluntad anticipada de oponerse a la donación de sus órganos.",
        ],
      },
      {
        title: "Protección a la dignidad humana",
        items: [
          "Recibir un trato digno y humanizado durante su atención, en condiciones sanitarias adecuadas.",
          "Ser respetado sin recibir discriminación alguna por su pertenencia étnica, sexo, condiciones económicas, creencias religiosas y/o costumbres.",
          "Elegir dentro de las posibilidades de tratamiento el derecho a morir dignamente de acuerdo a la legislación vigente.",
        ],
      },
      {
        title: "Información",
        items: [
          "Conocer los canales formales de la institución para manifestar sus felicitaciones, inquietudes, quejas y/o peticiones.",
          "Mantener una comunicación permanente y clara con el personal de salud.",
          "Manejo confidencial y entrega de copia de la historia clínica en los tiempos definidos.",
          "Acerca de los costos por los servicios ofrecidos por parte de la institución.",
        ],
      },
    ] satisfies RightsGroup[],
  },
};
