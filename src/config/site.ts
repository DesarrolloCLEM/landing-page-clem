// Single source of truth for the clinic's institutional data.
// Every page that shows contact data, schedules or social links reads it from here.

export type Link = { label: string; href: string };

export type Schedule = { label: string; value: string };

export const siteConfig = {
  name: "Clínica La Esperanza",
  shortName: "Clínica La Esperanza Montería",
  legalName: "Clínica La Esperanza – Evaluamos IPS",
  tagline: "Fe, Amor y Servicio",
  url: "https://clinicalaesperanza.co",
  titleSuffix: "Clínica La Esperanza Montería",
  description:
    "Institución de salud de mediana y alta complejidad en Montería, Córdoba. Urgencias 24 horas, cirugía, hospitalización, cuidado crítico y consulta externa.",
} as const;

export const contact = {
  address: {
    street: "Calle 12 # 4-58",
    neighborhood: "Barrio Buenavista",
    city: "Montería",
    region: "Córdoba",
    countryCode: "CO",
    full: "Calle 12 # 4-58, Barrio Buenavista, Montería, Córdoba",
  },
  geo: { latitude: 8.7452538, longitude: -75.8916416 },
  mapsUrl:
    "https://www.google.com/maps/place/Clinica+la+Esperanza+(Evaluamos+IPS+Ltda)/@8.7452538,-75.8916416,15z",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.7150429895157!2d-75.8920820359876!3d8.745540874205645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a30027861f5af%3A0x638e6790893b1b26!2zQ2wuIDEyICM0IC0gNTgsIE1vbnRlcsOtYSwgQ8OzcmRvYmE!5e0!3m2!1ses-419!2sco!4v1732536447107!5m2!1ses-419!2sco",
  phone: { label: "60(4) 784 8903", href: "tel:+576047848903", e164: "+576047848903" },
  // The comma pauses the call and then dials the emergency extension.
  emergencyPhone: { label: "60(4) 784 8903 ext. 108", href: "tel:+576047848903,108" },
  email: { label: "info@clinicalaesperanza.co", href: "mailto:info@clinicalaesperanza.co" },
  whatsappAppointments: { label: "+57 304 684 3367", href: "https://wa.me/573046843367" },
  whatsappUserAlliance: { label: "+57 304 474 8399", href: "https://wa.me/573044748399" },
} as const;

export const socialLinks = [
  {
    network: "facebook",
    label: "Facebook de Clínica La Esperanza",
    href: "https://www.facebook.com/clinicalaesperanzamonteria",
  },
  {
    network: "instagram",
    label: "Instagram de Clínica La Esperanza",
    href: "https://www.instagram.com/clinicalaesperanza_",
  },
  {
    network: "tiktok",
    label: "TikTok de Clínica La Esperanza",
    href: "https://www.tiktok.com/@clinicalaesperanzamtr",
  },
] as const;

export type SocialNetwork = (typeof socialLinks)[number]["network"];

export const visitingHours: Schedule[] = [
  {
    label: "Hospitalización",
    value: "Lunes a domingo: 10:00 a. m. – 12:00 p. m. y 3:00 p. m. – 5:00 p. m.",
  },
  { label: "UCI Adultos", value: "Lunes a domingo: 11:00 a. m. – 12:00 p. m." },
  { label: "UCI Neonatal y pediátrica", value: "Lunes a sábado: 11:00 a. m. – 12:00 p. m." },
];

export const appointmentHours: Schedule[] = [
  { label: "Lunes a viernes", value: "7:00 a. m. – 12:00 p. m. y 2:00 p. m. – 6:00 p. m." },
  { label: "Sábado", value: "8:00 a. m. – 12:00 p. m." },
];

export const phoneExtensions: Schedule[] = [
  { label: "Recepción Gerencia", value: "309" },
  { label: "Admisiones", value: "100" },
  { label: "Urgencias", value: "108" },
  { label: "Hospitalización", value: "316 - 400" },
  { label: "Consulta externa", value: "114" },
  { label: "Rayos X", value: "125" },
  { label: "Laboratorio", value: "117" },
];

const appClemBase = "https://appclem.appideas.com.co";

export const externalLinks = {
  appClemResults: `${appClemBase}/acceso-resultados`,
  appClemPreRegistration: `${appClemBase}/preregistro-paciente?service=urgencias`,
  googlePlay: "https://play.google.com/store/apps/details?id=com.clem.app_clem",
  appStore: "https://apps.apple.com/us/app/appclem/id6752122596",
} as const;

export type HealthPackage = {
  slug: string;
  name: string;
  description: string;
  href: string;
};

// TODO(clinica): replace the descriptions with the official ones from AppCLEM.
export const healthPackages: HealthPackage[] = [
  {
    slug: "latidos-de-vida",
    name: "Latidos de vida",
    description:
      "Paquete de valoración cardiovascular para conocer el estado de tu corazón y prevenir complicaciones.",
    href: `${appClemBase}/paquetes-latidos-de-vida`,
  },
  {
    slug: "mujer-sana",
    name: "Mujer Sana",
    description:
      "Chequeo integral de la salud de la mujer con exámenes y valoraciones para cada etapa de la vida.",
    href: `${appClemBase}/mujer-sana`,
  },
  {
    slug: "listo-para-entrenar",
    name: "Listo para entrenar",
    description:
      "Valoración médica para iniciar o retomar la actividad física de forma segura y con orientación profesional.",
    href: `${appClemBase}/listo-para-entrenar`,
  },
];
