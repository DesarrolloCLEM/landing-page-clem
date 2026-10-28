import type { ServiceEntry } from "../types";

const specialty = (slug: string) => `/servicios/especialidades/${slug}/`;

export const units: ServiceEntry[] = [
  {
    slug: "urgencias",
    kind: "unit",
    href: "/servicios/urgencias/",
    title: "Urgencias",
    tagline: "Atención de urgencias 24 horas",
    summary:
      "Nuestro servicio de urgencias de mediana y alta complejidad está en la capacidad de atender cualquier tipo de urgencia médica, con una infraestructura amplia y renovada.",
    emergency: true,
    image: {
      src: "/images/services/urgencias-pasillo.webp",
      alt: "Pasillo de cubículos del servicio de urgencias",
    },
    intro: [
      "Nuestro servicio de urgencias de mediana y alta complejidad está en la capacidad de atender cualquier tipo de urgencia médica, con una infraestructura amplia y renovada para la comodidad de nuestros pacientes.",
      "En Clínica La Esperanza trabajamos cada día para brindar una experiencia segura, humana y confortable, acompañando a nuestros pacientes y sus familias con calidad, calidez y compromiso.",
    ],
    sections: [
      {
        id: "servicios",
        title: "Nuestros servicios de urgencias",
        layout: "cards",
        items: [
          {
            title: "Urgencias adultos",
            description:
              "Atención médica para pacientes adultos que requieren valoración y manejo oportuno.",
          },
          {
            title: "Urgencias pediátricas",
            description:
              "Atención para niños y adolescentes en un espacio pensado para sus necesidades.",
          },
        ],
      },
      {
        id: "urgencia-pediatrica",
        title: "Urgencia pediátrica",
        intro: [
          "Contamos con un servicio de urgencias pediátricas disponible las 24 horas, atendido por médicos especialistas y personal capacitado para brindar atención inmediata y segura a niños y niñas en situaciones agudas o de emergencia. Nuestro equipo está preparado para responder de forma rápida y eficiente, priorizando siempre el bienestar de los pacientes más pequeños.",
        ],
      },
      {
        id: "cuando-acudir",
        title: "¿Cuándo acudir?",
        intro: [
          "Ante situaciones que requieran atención médica inmediata, como dolor intenso, dificultad para respirar, pérdida del conocimiento, sangrado abundante, traumatismos o cambios súbitos en el estado de salud.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/services/urgencias-equipo.webp",
        alt: "Equipo de enfermería del servicio de urgencias",
      },
      {
        src: "/images/services/urgencias-pediatrica.webp",
        alt: "Equipo médico atendiendo a un paciente",
      },
    ],
    related: [
      "/servicios/cuidado-critico/",
      "/servicios/hospitalizacion/",
      "/servicios/diagnostico-y-apoyo-terapeutico/",
    ],
    closing: {
      title: "Estamos para atenderte",
      description: "Nuestro servicio de urgencias atiende las 24 horas, todos los días del año.",
    },
  },
  {
    slug: "hospitalizacion",
    kind: "unit",
    href: "/servicios/hospitalizacion/",
    title: "Hospitalización",
    tagline: "Atención hospitalaria con calidad, seguridad y calidez humana",
    summary:
      "Cuidado integral y acompañamiento continuo para pacientes que requieren manejo intrahospitalario, con seguimiento médico y de enfermería enfocado en la seguridad y la recuperación.",
    image: {
      src: "/images/services/hospitalizacion-habitacion.webp",
      alt: "Habitación de hospitalización con cama clínica y sillón para el acompañante",
    },
    intro: [
      "Nuestra hospitalización está diseñada para acompañarte durante cada etapa de tu recuperación, integrando espacios confortables, atención médica especializada y tecnología para el cuidado de nuestros pacientes.",
      "Brindamos atención de alta calidad en hospitalización general, enfocándonos en la recuperación integral del paciente en un entorno seguro, cómodo y humanizado. Nuestros espacios están equipados con tecnología médica adecuada para atender las necesidades clínicas.",
    ],
    sections: [
      {
        id: "bienestar",
        title: "Tu bienestar es nuestra prioridad",
        intro: [
          "Cada espacio ha sido pensado para favorecer una recuperación confortable. Contamos con habitaciones cómodas, atención médica especializada y un equipo de enfermería disponible las 24 horas, garantizando un acompañamiento permanente durante toda la estancia hospitalaria.",
        ],
      },
      {
        id: "que-encontraras",
        title: "¿Qué encontrarás durante tu hospitalización?",
        layout: "checklist",
        items: [
          { title: "Atención médica especializada" },
          { title: "Enfermería disponible las 24 horas" },
          { title: "Habitaciones cómodas y climatizadas" },
          { title: "Administración segura de medicamentos" },
          { title: "Alimentación según indicación médica" },
          { title: "Acompañamiento familiar" },
          { title: "Seguimiento permanente del estado de salud" },
          { title: "Espacios diseñados para brindar tranquilidad y bienestar" },
        ],
      },
      {
        id: "especialidades",
        title: "Especialidades disponibles en Hospitalización",
        intro: [
          "Durante tu hospitalización, diferentes profesionales pueden participar en tu proceso de atención según tus necesidades. La comunicación y el trabajo conjunto entre las distintas áreas nos permiten ofrecer un manejo integral y coordinado.",
        ],
        layout: "tags",
        items: [
          {
            title: "Medicina Interna",
            href: specialty("medicina-interna"),
            tags: [
              "Neumología",
              "Nefrología",
              "Cardiología",
              "Hemodinamia",
              "Electrofisiología",
              "Neurología",
              "Gastroenterología",
              "Hematología",
              "Infectología",
            ],
          },
          {
            title: "Ginecología",
            href: specialty("ginecologia-y-obstetricia"),
            tags: [
              "Materno Fetal (Perinatología)",
              "Ginecología Oncológica",
              "Ginecología Laparoscópica",
            ],
          },
          {
            title: "Cirugía General",
            href: specialty("cirugia-general"),
            tags: ["Cirugía Pancreatohepatobiliar", "Cirugía de Tórax"],
          },
          {
            title: "Pediatría",
            href: specialty("pediatria"),
            tags: [
              "Cardiología",
              "Neumología",
              "Infectología",
              "Neonatología",
              "Hemato-oncología",
              "Endocrinología",
              "Nefrología",
              "Neurocirugía",
              "Oftalmología",
              "Gastroenterología y Cirugía pediátricas",
            ],
          },
          {
            title: "Ortopedia y Traumatología",
            href: specialty("ortopedia-y-traumatologia"),
            tags: [
              "Ortopedia Oncológica",
              "Artroscopia",
              "Ortopedia Reconstructiva",
              "Cirugía de Hombro",
              "Revisión de Prótesis",
              "Cirugía de Columna",
            ],
          },
          { title: "Neurocirugía", href: specialty("neurocirugia"), tags: ["Medicina del Dolor"] },
          {
            title: "Radiología",
            href: specialty("radiologia"),
            tags: ["Radiología Intervencionista", "Imágenes Cardíacas"],
          },
          {
            title: "Salud Mental",
            href: specialty("salud-mental"),
            tags: ["Psiquiatría", "Psicología"],
          },
          { title: "Urología", href: specialty("urologia") },
          { title: "Cirugía Cardiovascular", href: specialty("cirugia-cardiovascular") },
          { title: "Cirugía Plástica", href: specialty("cirugia-plastica-y-reconstructiva") },
          { title: "Cirugía Maxilofacial", href: specialty("cirugia-maxilofacial") },
          { title: "Otorrinolaringología", href: specialty("otorrinolaringologia") },
          { title: "Oftalmología y Oculoplastia", href: specialty("oftalmologia") },
          { title: "Fonoaudiología", href: specialty("fonoaudiologia") },
          { title: "Nutrición y Dietética", href: specialty("nutricion-y-dieta") },
          {
            title: "Fisioterapia",
            href: specialty("fisioterapia"),
            tags: ["Rehabilitación Cardíaca", "Terapia Física y Rehabilitación"],
          },
        ],
      },
      {
        id: "equipo",
        title: "Un equipo que trabaja por tu recuperación",
        intro: [
          "En Clínica La Esperanza creemos que sanar también significa sentirse acompañado, cómodo y seguro. Por eso ofrecemos espacios diseñados para brindar bienestar, tranquilidad y una atención humanizada durante cada etapa de la recuperación.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/services/hospitalizacion-cama.webp",
        alt: "Cama clínica en una habitación de hospitalización",
      },
      {
        src: "/images/services/hospitalizacion-detalle.webp",
        alt: "Detalle de la cama clínica con el logo de la clínica",
      },
      {
        src: "/images/services/hospitalizacion-llamado-enfermeria.webp",
        alt: "Sistema de llamado de enfermería junto a la cama",
      },
    ],
    related: ["/servicios/cuidado-critico/", "/servicios/cirugia/", "/servicios/urgencias/"],
    closing: {
      title: "Atención hospitalaria con calidad, seguridad y calidez humana",
      description:
        "Espacios confortables y un equipo comprometido con tu recuperación y la tranquilidad de tu familia.",
    },
  },
  {
    slug: "cirugia",
    kind: "unit",
    href: "/servicios/cirugia/",
    title: "Cirugía",
    tagline:
      "Infraestructura, tecnología y especialistas para procedimientos de baja, mediana y alta complejidad",
    summary:
      "Valoración y manejo quirúrgico de patologías frecuentes y de mayor complejidad, con un enfoque seguro, oportuno y humanizado.",
    image: {
      src: "/images/services/cirugia-quirofano.webp",
      alt: "Cirujanos operando en uno de los quirófanos de la clínica",
    },
    intro: [
      "Nuestro servicio de Cirugía realiza la valoración y manejo quirúrgico de patologías frecuentes, con un enfoque seguro, oportuno y humanizado. Acompañamos al paciente en todo el proceso: evaluación prequirúrgica, preparación, procedimiento y seguimiento postoperatorio, priorizando la seguridad clínica y una recuperación organizada.",
      "Ofrecemos soluciones quirúrgicas especializadas, diseñadas para responder a las necesidades de cada paciente con precisión, seguridad y calidad. Contamos con un equipo médico altamente capacitado y tecnología de vanguardia, lo que garantiza resultados confiables y una atención humana en cada procedimiento.",
    ],
    sections: [
      {
        id: "capacidad",
        title: "Capacidad instalada",
        layout: "stats",
        items: [
          {
            title: "2",
            description:
              "Quirófanos. Salas completamente dotadas para procedimientos de baja, mediana y alta complejidad.",
          },
          {
            title: "1",
            description:
              "Sala de partos. Espacio diseñado para una atención segura y humanizada durante el nacimiento.",
          },
          {
            title: "8",
            description:
              "Camas de recuperación. Monitoreo permanente y atención especializada durante el postoperatorio.",
          },
        ],
      },
      {
        id: "por-que-elegirnos",
        title: "¿Por qué elegirnos?",
        layout: "cards",
        items: [
          {
            title: "Equipo altamente capacitado",
            description:
              "Cirujanos y personal clínico con amplia experiencia en cada especialidad.",
          },
          {
            title: "Tecnología de vanguardia",
            description: "Equipos e instalaciones pensados para procedimientos seguros y precisos.",
          },
          {
            title: "Resultados confiables",
            description:
              "Procesos rigurosos que priorizan tu seguridad en cada etapa del procedimiento.",
          },
          {
            title: "Atención humana",
            description: "Acompañamiento cercano para ti y tu familia durante todo el proceso.",
          },
        ],
      },
      {
        id: "cirugias-especializadas",
        title: "Cirugías especializadas",
        intro: [
          "Contamos con especialistas quirúrgicos para procedimientos de mayor complejidad, con apoyo integral antes, durante y después de la cirugía.",
        ],
        layout: "cards",
        // TODO(clinica): the legacy site repeated other descriptions for Cirugía de Mano, Oral,
        // Oftalmológica and de Mama; they are published without description until confirmed.
        items: [
          {
            title: "Cirugía General",
            href: specialty("cirugia-general"),
            description:
              "Procedimientos quirúrgicos para patologías frecuentes, con acompañamiento y enfoque en seguridad del paciente.",
          },
          {
            title: "Cirugía Ginecológica",
            href: specialty("ginecologia-y-obstetricia"),
            description:
              "Cirugías para manejo de patologías ginecológicas, con atención integral y recuperación segura.",
          },
          {
            title: "Cirugía Maxilofacial",
            href: specialty("cirugia-maxilofacial"),
            description:
              "Manejo quirúrgico de cara y mandíbula, orientado a función, estética y rehabilitación.",
          },
          {
            title: "Cirugía Ortopédica",
            href: specialty("ortopedia-y-traumatologia"),
            description:
              "Cirugías de huesos y articulaciones para aliviar dolor y recuperar movilidad y funcionalidad.",
          },
          {
            title: "Cirugía Pediátrica",
            href: specialty("cirugia-pediatrica"),
            description:
              "Atención quirúrgica especializada para niños, con enfoque seguro y acompañamiento familiar.",
          },
          {
            title: "Cirugía Otorrinolaringológica",
            href: specialty("otorrinolaringologia"),
            description:
              "Procedimientos de oído, nariz y garganta para mejorar respiración, audición y calidad de vida.",
          },
          {
            title: "Neurocirugía",
            href: specialty("neurocirugia"),
            description:
              "Intervenciones del sistema nervioso y columna, con vigilancia clínica y seguimiento estricto.",
          },
          {
            title: "Cirugía Gastrointestinal",
            description:
              "Procedimientos quirúrgicos del sistema digestivo según indicación médica y evaluación especializada.",
          },
          {
            title: "Cirugía de Tórax",
            href: specialty("cirugia-de-torax"),
            description:
              "Cirugías torácicas con valoración especializada y acompañamiento en el proceso de recuperación.",
          },
          {
            title: "Cirugía Plástica y Estética",
            href: specialty("cirugia-plastica-y-reconstructiva"),
            description:
              "Procedimientos reconstructivos y estéticos con valoración previa, seguridad y seguimiento postoperatorio.",
          },
          {
            title: "Cirugía Urológica",
            href: specialty("urologia"),
            description:
              "Cirugías del aparato urinario y próstata, con manejo integral y seguimiento postoperatorio.",
          },
          {
            title: "Cirugía Vascular y Angiológica",
            href: specialty("cirugia-cardiovascular"),
            description:
              "Procedimientos vasculares para enfermedades de venas y arterias, con control clínico especializado.",
          },
          { title: "Cirugía de Mano" },
          { title: "Cirugía Oral" },
          { title: "Cirugía Oftalmológica", href: specialty("oftalmologia") },
          { title: "Cirugía de Mama y Tumores de Tejidos Blandos" },
        ],
      },
      {
        id: "areas-quirurgicas",
        title: "Áreas quirúrgicas especializadas",
        layout: "tags",
        items: [
          {
            title: "Cirugía General",
            href: specialty("cirugia-general"),
            tags: ["Cirugía Pancreatohepatobiliar", "Cirugía de Tórax"],
          },
          {
            title: "Cirugía Cardiovascular",
            href: specialty("cirugia-cardiovascular"),
            description:
              "Procedimientos enfocados en el cuidado y tratamiento quirúrgico del corazón y los vasos sanguíneos.",
          },
          {
            title: "Cirugía Plástica",
            href: specialty("cirugia-plastica-y-reconstructiva"),
            description:
              "Procedimientos orientados a la reconstrucción y el bienestar estético del paciente.",
          },
          {
            title: "Cirugía Pediátrica",
            href: specialty("cirugia-pediatrica"),
            description:
              "Procedimientos quirúrgicos adaptados a las necesidades particulares de los niños, en distintas especialidades.",
          },
          {
            title: "Neurocirugía",
            href: specialty("neurocirugia"),
            description:
              "Procedimientos especializados en el sistema nervioso central y periférico.",
          },
          {
            title: "Ortopedia y Traumatología",
            href: specialty("ortopedia-y-traumatologia"),
            tags: [
              "Ortopedia Oncológica",
              "Artroscopia",
              "Ortopedia Reconstructiva",
              "Cirugía de Hombro",
              "Revisión de Prótesis",
              "Cirugía de Columna",
            ],
          },
          {
            title: "Ginecología",
            href: specialty("ginecologia-y-obstetricia"),
            tags: ["Ginecología Oncológica", "Ginecología Laparoscópica"],
          },
          {
            title: "Urología",
            href: specialty("urologia"),
            description: "Procedimientos especializados en el sistema urinario y reproductor.",
          },
          {
            title: "Otorrinolaringología",
            href: specialty("otorrinolaringologia"),
            description: "Procedimientos especializados en oído, nariz y garganta.",
          },
          {
            title: "Oftalmología",
            href: specialty("oftalmologia"),
            description: "Procedimientos quirúrgicos para el cuidado y tratamiento de la visión.",
          },
          {
            title: "Cirugía Maxilofacial",
            href: specialty("cirugia-maxilofacial"),
            description: "Procedimientos especializados en la región facial, oral y maxilar.",
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/services/cirugia-equipo-quirurgico.webp",
        alt: "Equipo quirúrgico de la clínica en el quirófano",
      },
      {
        src: "/images/services/cirugia-procedimiento.webp",
        alt: "Cirujanos durante un procedimiento",
      },
      {
        src: "/images/services/cirugia-cirujano.webp",
        alt: "Cirujano preparándose para una intervención",
      },
    ],
    related: [
      "/servicios/hospitalizacion/",
      "/servicios/cuidado-critico/",
      "/servicios/especialidades/anestesiologia/",
    ],
    closing: {
      title: "Cuidado innovador, pensado para ti",
      description: "Agenda una valoración con nuestros especialistas quirúrgicos.",
    },
  },
  {
    slug: "consulta-externa",
    kind: "unit",
    href: "/servicios/consulta-externa/",
    title: "Consulta externa",
    tagline: "Atención especializada con calidad y confianza",
    summary:
      "Atención médica programada para valoración, diagnóstico, tratamiento y seguimiento de pacientes, con especialistas de diferentes áreas.",
    image: {
      src: "/images/services/consulta-externa-sala-espera.webp",
      alt: "Sala de espera de consulta externa con el logo de la clínica",
    },
    intro: [
      "En Clínica La Esperanza ofrecemos un servicio de Consulta Externa respaldado por especialistas de diferentes áreas, consultorios modernos y una atención centrada en el paciente.",
      "Brindamos atención médica programada para valoración, diagnóstico, tratamiento y seguimiento de pacientes. Nuestro enfoque es integral y humanizado, con especialistas que orientan cada caso.",
    ],
    sections: [
      {
        id: "consultorios",
        title: "Consultorios modernos y confortables",
        intro: [
          "Nuestros consultorios están diseñados para brindar una experiencia cómoda y segura tanto para pacientes como para profesionales de la salud. Cada espacio favorece una atención médica eficiente, con ambientes adecuados para la valoración, el diagnóstico y el seguimiento clínico.",
        ],
      },
      {
        id: "consultas-especializadas",
        title: "Consultas especializadas",
        intro: [
          "Atención programada con especialistas clínicos para diagnóstico, tratamiento y seguimiento.",
        ],
        layout: "cards",
        items: [
          {
            title: "Medicina Interna",
            href: specialty("medicina-interna"),
            description:
              "Atención integral del adulto para diagnóstico, manejo y seguimiento de enfermedades agudas y crónicas.",
          },
          {
            title: "Cardiología",
            description:
              "Evaluación especializada del corazón y la circulación, con enfoque en prevención y control de factores de riesgo.",
          },
          {
            title: "Gastroenterología",
            description:
              "Atendemos molestias como dolor abdominal, reflujo, gastritis, cambios en el tránsito intestinal y otros síntomas asociados.",
          },
          {
            title: "Neurología",
            href: specialty("neurologia"),
            description:
              "Atención especializada para diagnóstico y seguimiento de trastornos del sistema nervioso.",
          },
          {
            title: "Pediatría",
            href: specialty("pediatria"),
            description:
              "Evaluamos crecimiento y desarrollo, controlamos enfermedades frecuentes y orientamos a la familia con indicaciones claras.",
          },
          {
            title: "Ginecobstetricia",
            href: specialty("ginecologia-y-obstetricia"),
            description:
              "Atención integral de la salud de la mujer en todas las etapas, incluyendo control ginecológico y seguimiento del embarazo.",
          },
          {
            title: "Urología",
            href: specialty("urologia"),
            description:
              "Consulta especializada para diagnóstico y manejo de enfermedades del aparato urinario y la próstata.",
          },
          {
            title: "Oftalmología",
            href: specialty("oftalmologia"),
            description:
              "Evaluamos visión borrosa, dolor ocular, enrojecimiento y otras molestias, con orientación clara del manejo.",
          },
          {
            title: "Psicología",
            href: specialty("salud-mental"),
            description:
              "Acompañamiento profesional para bienestar emocional y salud mental, con intervención terapéutica según necesidad.",
          },
          {
            title: "Ortopedia y/o Traumatología",
            href: specialty("ortopedia-y-traumatologia"),
            description:
              "Evaluación y manejo de lesiones y dolor del sistema músculo-esquelético: huesos, articulaciones, músculos y columna.",
          },
          {
            title: "Otorrinolaringología",
            href: specialty("otorrinolaringologia"),
            description:
              "Valoramos infecciones recurrentes, rinitis, sinusitis, vértigo, ronquido, alteraciones de la voz y problemas de audición.",
          },
        ],
      },
      {
        id: "especialidades",
        title: "Especialidades médico-quirúrgicas",
        layout: "list",
        items: [
          { title: "Pediatría", href: specialty("pediatria") },
          { title: "Medicina Interna", href: specialty("medicina-interna") },
          { title: "Neurocirugía", href: specialty("neurocirugia") },
          { title: "Ginecología y Obstetricia", href: specialty("ginecologia-y-obstetricia") },
          { title: "Ortopedia y Traumatología", href: specialty("ortopedia-y-traumatologia") },
          { title: "Cirugía General", href: specialty("cirugia-general") },
          { title: "Salud Mental", href: specialty("salud-mental") },
          { title: "Radiología", href: specialty("radiologia") },
          { title: "Fisioterapia", href: specialty("fisioterapia") },
          { title: "Cirugía Cardiovascular", href: specialty("cirugia-cardiovascular") },
          { title: "Cirugía Plástica", href: specialty("cirugia-plastica-y-reconstructiva") },
          { title: "Urología", href: specialty("urologia") },
          { title: "Cirugía Maxilofacial", href: specialty("cirugia-maxilofacial") },
          { title: "Otorrinolaringología", href: specialty("otorrinolaringologia") },
          { title: "Neurología", href: specialty("neurologia") },
          { title: "Nutrición y Dieta", href: specialty("nutricion-y-dieta") },
          {
            title: "Medicina Física y Rehabilitación",
            href: specialty("medicina-fisica-y-rehabilitacion"),
          },
          { title: "Anestesiología", href: specialty("anestesiologia") },
          { title: "Fonoaudiología", href: specialty("fonoaudiologia") },
          { title: "Oftalmología y Oculoplastia", href: specialty("oftalmologia") },
          { title: "Alergología", href: specialty("alergologia") },
          { title: "Dermatología", href: specialty("dermatologia") },
        ],
      },
      {
        id: "que-ofrecemos",
        title: "¿Qué ofrecemos en Consulta Externa?",
        layout: "checklist",
        items: [
          { title: "Atención por especialistas" },
          { title: "Consultorios modernos y cómodos" },
          { title: "Agenda de citas programadas" },
          { title: "Atención humanizada" },
          { title: "Valoración y seguimiento médico" },
          { title: "Pacientes particulares y convenios" },
        ],
      },
      {
        id: "cifras",
        title: "Consulta Externa en cifras",
        layout: "stats",
        // TODO(clinica): the legacy page labels both "20+" and "5+" as "Consultorios habilitados".
        items: [
          { title: "20+", description: "Consultorios habilitados" },
          { title: "10.000+", description: "Consultas al año" },
          { title: "30+", description: "Equipo médico multidisciplinario" },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/services/consulta-externa-consultorios.webp",
        alt: "Pasillo de consultorios de consulta externa",
      },
      { src: "/images/services/consulta-externa-recepcion.webp", alt: "Recepción de la clínica" },
      {
        src: "/images/services/consulta-externa-espacios.webp",
        alt: "Área de espera con decoración en madera",
      },
    ],
    related: [
      "/servicios/diagnostico-y-apoyo-terapeutico/",
      "/servicios/programas/chequeos-medicos-preventivos/",
      "/agenda/",
    ],
    closing: {
      title: "Atención especializada con calidad y confianza",
      description:
        "En Clínica La Esperanza ponemos a disposición de nuestros pacientes, empresas y aliados un servicio de Consulta Externa respaldado por talento humano, infraestructura moderna y un compromiso permanente con la excelencia en la atención.",
    },
  },
  {
    slug: "cuidado-critico",
    kind: "unit",
    href: "/servicios/cuidado-critico/",
    title: "Cuidado crítico",
    tagline: "Unidades especializadas para pacientes en estado crítico",
    summary:
      "Unidades de cuidado intensivo e intermedio para adultos, niños y recién nacidos, con monitoreo y vigilancia permanente.",
    image: {
      src: "/images/services/cuidado-critico-equipo.webp",
      alt: "Equipo médico y de enfermería de la unidad de cuidado crítico",
    },
    intro: [
      "En Clínica La Esperanza contamos con unidades de Cuidado Crítico dotadas con tecnología especializada, dirigidas a pacientes adultos, pediátricos y neonatales que requieren monitoreo y vigilancia permanente. Nuestro equipo asistencial trabaja de manera integral para brindar una atención segura en cada etapa del proceso.",
    ],
    sections: [
      {
        id: "monitoreo",
        title: "Monitoreo y vigilancia permanente",
        intro: [
          "Nuestras unidades de Cuidado Crítico cuentan con cubículos dotados con toda la tecnología para garantizar la monitorización del paciente, atendidos por personal de salud altamente calificado y dedicado a los casos más críticos.",
        ],
      },
      {
        id: "unidades",
        title: "¿Qué encontrarás en nuestras Unidades de Cuidado Crítico?",
        layout: "cards",
        items: [
          {
            title: "UCI Adultos",
            description: "Cuidados intensivos para pacientes adultos en estado crítico.",
          },
          {
            title: "UCIM",
            description:
              "Cuidados intermedios para pacientes que requieren monitoreo especializado.",
          },
          {
            title: "UCI Neonatal",
            description: "Atención a recién nacidos prematuros o con patologías neonatales.",
          },
          {
            title: "UCI Pediátrica",
            description: "Cuidados intensivos para niños en estado crítico.",
          },
          {
            title: "Monitoreo permanente",
            description: "Vigilancia continua por personal de salud calificado.",
          },
          {
            title: "Equipo interdisciplinario",
            description: "Médicos especialistas, enfermería y terapia física y respiratoria.",
          },
          {
            title: "Tecnología especializada",
            description: "Cubículos dotados con equipos para la monitorización del paciente.",
          },
          {
            title: "Articulación con la Clínica",
            description: "Conexión con otros servicios cuando el paciente lo requiere.",
          },
        ],
      },
      {
        id: "capacidad",
        title: "Contamos con",
        layout: "stats",
        items: [
          { title: "14", description: "Cubículos de Cuidados Intensivos e Intermedios Adulto" },
          { title: "14", description: "Incubadoras" },
          { title: "17", description: "Cunas" },
          { title: "2", description: "Camas pediátricas (UCI Neonatal y Pediátrica)" },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/services/cuidado-critico-neonatal.webp",
        alt: "Médico revisando un monitor en la unidad neonatal",
      },
      {
        src: "/images/services/cuidado-critico-monitoreo.webp",
        alt: "Enfermera ajustando un monitor de signos vitales",
      },
      {
        src: "/images/services/cuidado-critico-especialistas.webp",
        alt: "Especialistas revisando la historia clínica en tabletas",
      },
      {
        src: "/images/services/cuidado-critico-enfermeria.webp",
        alt: "Enfermera atendiendo un cubículo de cuidado crítico",
      },
    ],
    related: [
      "/servicios/hospitalizacion/",
      "/servicios/urgencias/",
      "/servicios/especialidades/pediatria/",
    ],
    closing: {
      title: "Cuidado especializado, en cada etapa de la vida",
      description: "Unidades de cuidado crítico para adultos, niños y recién nacidos.",
    },
  },
  {
    slug: "diagnostico-y-apoyo-terapeutico",
    kind: "unit",
    href: "/servicios/diagnostico-y-apoyo-terapeutico/",
    title: "Diagnóstico y apoyo terapéutico",
    tagline: "Equipos de alta tecnología para un diagnóstico oportuno",
    summary:
      "Imágenes diagnósticas, laboratorio clínico y servicios de apoyo terapéutico que respaldan los procesos clínicos de la clínica.",
    image: {
      src: "/images/services/diagnostico-tomografo.webp",
      alt: "Tomógrafo General Electric Revolution Ascend de la clínica",
    },
    intro: [
      "Este servicio está diseñado para respaldar de manera integral los procesos clínicos y asistenciales, facilitando un abordaje oportuno, preciso y seguro del estado de salud del paciente.",
    ],
    sections: [
      {
        id: "tecnologia",
        title: "Tecnología que marca la diferencia",
        intro: [
          "Contamos con un tomógrafo General Electric Revolution™ Ascend, el primer equipo en Latinoamérica en incorporar un servidor con inteligencia artificial, que optimiza la calidad de los estudios y reduce significativamente la dosis de radiación.",
        ],
        layout: "checklist",
        items: [
          { title: "Reconstrucción con IA (TrueFidelity™ DL)" },
          { title: "Posicionamiento automático" },
          { title: "Hasta 128 cortes" },
        ],
      },
      {
        id: "servicios",
        title: "¿Qué encontrarás en nuestro servicio de Diagnóstico y Apoyo Terapéutico?",
        layout: "tags",
        items: [
          {
            title: "Imágenes diagnósticas ionizantes",
            tags: ["Tomografía", "Arco en C", "Rayos X fijo", "Rayos X portátil"],
          },
          {
            title: "Imágenes diagnósticas no ionizantes",
            tags: ["Ecografía", "Diagnóstico cardiovascular", "Ultrasonido"],
          },
          {
            title: "Apoyo terapéutico",
            tags: [
              "Laboratorio clínico",
              "Servicio farmacéutico",
              "Terapia respiratoria y física",
              "Gestión pretransfusional",
            ],
          },
        ],
      },
      {
        id: "tomografia",
        title: "Tomografía de nueva generación",
        intro: [
          "Contamos con el tomógrafo General Electric Revolution™ Ascend, el primer equipo en Latinoamérica con inteligencia artificial integrada.",
        ],
        layout: "cards",
        items: [
          {
            title: "Menor dosis de radiación",
            description:
              "La inteligencia artificial ayuda a obtener imágenes claras usando menos radiación, cuidando más al paciente.",
          },
          {
            title: "Exámenes más rápidos",
            description:
              "La automatización del equipo reduce el tiempo que el paciente pasa en el estudio.",
          },
          {
            title: "Mayor comodidad",
            description:
              "El túnel del equipo es más ancho y la camilla más baja, lo que facilita el examen a pacientes de mayor tamaño o con lesiones que requieren manejo cuidadoso.",
          },
          {
            title: "Diagnósticos más precisos",
            description:
              "La inteligencia artificial ayuda a posicionar al paciente y ajustar el estudio automáticamente, reduciendo el margen de error.",
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/services/diagnostico-tecnologo.webp",
        alt: "Tecnólogo programando un estudio en el tomógrafo",
      },
      {
        src: "/images/services/diagnostico-tomografo-detalle.webp",
        alt: "Detalle del tomógrafo de última generación",
      },
      {
        src: "/images/services/diagnostico-ecografia.webp",
        alt: "Médico realizando una ecografía",
      },
    ],
    related: [
      "/servicios/especialidades/radiologia/",
      "/servicios/consulta-externa/",
      "/app-clem/",
    ],
    closing: {
      title: "Diagnóstico preciso, respaldo terapéutico integral",
      description: "Consulta tus resultados de imágenes diagnósticas y laboratorio desde App Clem.",
    },
  },
];
