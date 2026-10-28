import { externalLinks } from "@/config/site";

export const appClemPage = {
  title: "App Clem",
  description:
    "Consulta tus resultados, realiza tu registro previo y lleva la clínica en tu celular con AppCLEM.",
  results: {
    title: "Resultados",
    text: "A través de este botón podrás consultar de manera rápida y segura los resultados de tus imágenes diagnósticas, exámenes de laboratorio y demás estudios clínicos. Accede a tu información médica en cualquier momento, con total confidencialidad y facilidad de uso.",
    action: { label: "Consultar", href: externalLinks.appClemResults },
    image: {
      src: "/images/app-clem/resultados-imagenes-diagnosticas.webp",
      alt: "Especialistas revisando una tomografía en el computador",
    },
  },
  preRegistration: {
    title: "Registro previo",
    text: "Aquí podrás realizar tu registro previo desde casa, este proceso agilizará tu atención.",
    notice:
      "Cabe recordar que este registro previo no asegura tu puesto en la atención, debes acercarte al llegar y confirmar tu admisión.",
    action: { label: "Registrar", href: externalLinks.appClemPreRegistration },
  },
  download: {
    title: "Descargue nuestra app",
    // TODO(clinica): the legacy page reused the Resultados text here; this one is generic.
    text: "Descarga AppCLEM en tu celular para consultar tus resultados, hacer tu registro previo y conocer nuestros paquetes cuando lo necesites.",
    stores: [
      { label: "Disponible en Google Play", platform: "Android", href: externalLinks.googlePlay },
      { label: "Descárgala en App Store", platform: "iOS", href: externalLinks.appStore },
    ],
  },
};

export const packagesPage = {
  title: "Paquetes integrales",
  description:
    "Chequeos y paquetes de salud pensados para cada etapa de la vida. Conoce cada paquete y adquiérelo en AppCLEM.",
  action: "Ver paquete en AppCLEM",
  note: "Los paquetes se consultan y adquieren en la plataforma AppCLEM.",
};
