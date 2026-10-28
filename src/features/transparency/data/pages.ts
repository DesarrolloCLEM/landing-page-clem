import type { DocumentCategory } from "@/config/documents";

export type TransparencyPageContent = {
  title: string;
  description: string;
  listTitle: string;
};

export const transparencyPages: Record<DocumentCategory, TransparencyPageContent> = {
  "informes-financieros": {
    title: "Informes financieros",
    description:
      "En la Clínica La Esperanza, priorizamos la transparencia financiera. Nuestros informes detallan ingresos, gastos e inversiones, garantizando una gestión eficiente y responsable de los recursos para el beneficio de nuestros pacientes y colaboradores.",
    listTitle: "Estados financieros por periodo",
  },
  "reportes-de-area": {
    title: "Reportes de área",
    description:
      "La Esperanza detalla las acciones implementadas para garantizar un entorno laboral seguro, incluyendo la gestión de riesgos y las mejoras continuas en nuestras políticas de seguridad para proteger la salud y bienestar de nuestros colaboradores.",
    listTitle: "Reportes disponibles",
  },
  indicadores: {
    title: "Indicadores",
    description:
      "En la Clínica La Esperanza, publicamos nuestros Reportes Externos de Indicadores de Gestión de manera semestral, brindando información transparente sobre el desempeño y evolución de nuestra gestión. Estos informes reflejan nuestros avances en áreas clave de atención médica, calidad de servicio y eficiencia operativa. A continuación, puedes consultar los indicadores.",
    listTitle: "Reportes externos de indicadores de gestión",
  },
};
