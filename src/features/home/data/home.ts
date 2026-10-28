import { externalLinks } from "@/config/site";

import type { CareArea, ServiceHighlight } from "../types";

export const hero = {
  title: "Cuidamos de ti y de los que amas",
  subtitle: "Atención médica integral con calidad, calidez y confianza",
  image: {
    src: "/images/home/equipo-medico-clinica.webp",
    alt: "Equipo médico de Clínica La Esperanza revisando la historia de un paciente",
  },
  actions: {
    appointment: { label: "Solicitar una cita", href: "/agenda/" },
    app: { label: "App Clem", href: "/app-clem/" },
    results: { label: "Resultados", href: externalLinks.appClemResults },
  },
};

export const welcome = {
  eyebrow: "Bienvenidos",
  title: "Un lugar donde cada cuidado nace del deseo de verte bien",
  text: "Bienvenidos a Clínica La Esperanza, un lugar donde cada cuidado nace del deseo de verte bien. Nuestro equipo te acompaña con dedicación y humanidad, integrando la ciencia médica con fe, amor y vocación de servicio, para brindarte una atención cercana y confiable.",
  statsTitle: "Nuestra capacidad instalada",
};

export const mainServices = {
  eyebrow: "Diagnóstico y tratamientos",
  title: "Nuestros servicios médicos",
  items: [
    {
      title: "Hospitalización",
      summary:
        "Nuestro servicio de hospitalización brinda cuidado integral y acompañamiento continuo para pacientes que requieren manejo intrahospitalario, con seguimiento médico y de enfermería enfocado en la seguridad y la recuperación.",
      href: "/servicios/hospitalizacion/",
      image: {
        src: "/images/home/hospitalizacion-habitacion.webp",
        alt: "Habitación de hospitalización con cama clínica",
      },
    },
    {
      title: "Cirugía",
      summary:
        "Nuestro servicio de Cirugía realiza la valoración y manejo quirúrgico de patologías frecuentes, con un enfoque seguro, oportuno y humanizado.",
      href: "/servicios/cirugia/",
      image: {
        src: "/images/home/cirugia-quirofano.webp",
        alt: "Equipo quirúrgico durante una cirugía en el quirófano",
      },
    },
    {
      title: "Consulta externa",
      summary:
        "Brindamos atención médica programada para valoración, diagnóstico, tratamiento y seguimiento de pacientes, con un enfoque integral y humanizado y especialistas que orientan cada caso.",
      href: "/servicios/consulta-externa/",
      image: {
        src: "/images/home/consulta-externa-sala-espera.webp",
        alt: "Sala de espera de consulta externa de la clínica",
      },
    },
    {
      title: "Urgencias",
      summary:
        "Nuestro servicio de urgencias de mediana y alta complejidad está en la capacidad de atender cualquier tipo de urgencia médica, con una infraestructura amplia y renovada para la comodidad de nuestros pacientes.",
      href: "/servicios/urgencias/",
      image: {
        src: "/images/home/urgencias-equipo.webp",
        alt: "Personal de enfermería del servicio de urgencias",
      },
    },
  ] satisfies ServiceHighlight[],
};

export const careAreas = {
  eyebrow: "Diagnóstico y tratamientos",
  title: "Los mejores servicios médicos y la mejor atención",
  description:
    "En la Clínica La Esperanza, ofrecemos un diagnóstico preciso y tratamientos personalizados. Nuestro equipo médico se compromete a brindarte atención de calidad, con los mejores servicios y un enfoque integral para cuidar tu salud y bienestar.",
  items: [
    {
      title: "Cirugía general y especialidades quirúrgicas",
      href: "/servicios/cirugia/",
      icon: "surgery",
    },
    { title: "Medicina especializada", href: "/servicios/consulta-externa/", icon: "specialized" },
    {
      title: "Cuidados intensivos y hospitalización",
      href: "/servicios/cuidado-critico/",
      icon: "critical",
    },
    {
      title: "Ortopedia y traumatología",
      href: "/servicios/especialidades/ortopedia-y-traumatologia/",
      icon: "orthopedics",
    },
  ] satisfies CareArea[],
};

export const featuredSpecialties = {
  eyebrow: "Qué hacemos",
  title: "Servicios",
  description:
    "En la Clínica La Esperanza ofrecemos una amplia gama de servicios médicos especializados que cubren desde procedimientos quirúrgicos avanzados hasta atención médica integral. Contamos con áreas dedicadas a cirugía general, medicina especializada, cuidados intensivos y ortopedia, con un enfoque en la atención de calidad y el bienestar de nuestros pacientes.",
  allServices: { label: "Ver todos los servicios", href: "/servicios/" },
  items: [
    {
      title: "Neurocirugía",
      summary:
        "Nuestros neurocirujanos expertos tratan enfermedades del sistema nervioso con precisión y cuidado.",
      href: "/servicios/especialidades/neurocirugia/",
      image: {
        src: "/images/home/neurocirugia.webp",
        alt: "Neurocirujanos revisando imágenes del cerebro",
      },
    },
    {
      title: "Neurocirugía Infantil",
      summary:
        "La neurocirugía infantil brinda cuidados especializados y personalizados para el sistema nervioso de niños y adolescentes.",
      href: "/servicios/especialidades/neurocirugia-pediatrica/",
      image: {
        src: "/images/home/neurocirugia-pediatrica.webp",
        alt: "Niño durante una valoración médica",
      },
    },
    {
      title: "Medicina del dolor",
      summary:
        "La medicina del dolor trata el origen del dolor para mejorar la calidad de vida de los pacientes.",
      href: "/servicios/especialidades/medicina-del-dolor/",
      image: {
        src: "/images/home/medicina-del-dolor.webp",
        alt: "Médica valorando a un paciente con dolor",
      },
    },
    {
      title: "Oftalmología",
      summary:
        "Nuestros oftalmólogos brindan atención integral para cuidar y mejorar la visión y salud ocular.",
      href: "/servicios/especialidades/oftalmologia/",
      image: {
        src: "/images/home/oftalmologia.webp",
        alt: "Oftalmóloga examinando los ojos de una paciente",
      },
    },
  ] satisfies ServiceHighlight[],
};

export const quality = {
  eyebrow: "Mejora tu vida actuando ahora",
  title: "Brindamos atención de alta calidad",
  text: "¡Agradecemos sinceramente su confianza! En Clínica La Esperanza, nuestros pacientes nos eligen porque reconocen nuestro compromiso con la excelencia y el cuidado que merecen.",
  action: { label: "Contáctenos", href: "/agenda/" },
  image: {
    src: "/images/home/atencion-de-calidad.webp",
    alt: "Personal administrativo de la clínica atendiendo a pacientes",
  },
};

export const testimonialsSection = {
  eyebrow: "Historias de pacientes",
  title: "Voces de quienes ya confiaron en nosotros",
  linkLabel: "Leer historia completa",
};

export const opinion = {
  title: "Tu opinión nos ayuda a seguir mejorando la atención",
  action: {
    label: "Comparte tu experiencia con nosotros",
    href: "/felicitaciones-sugerencias-quejas-y-reclamos/",
  },
};

export const location = {
  eyebrow: "Contáctanos",
  title: "Clínica La Esperanza Montería Córdoba",
  action: { label: "Solicitar una cita", href: "/agenda/" },
  mapTitle: "Nuestra ubicación",
  mapLinkLabel: "Ver en Google Maps",
};
