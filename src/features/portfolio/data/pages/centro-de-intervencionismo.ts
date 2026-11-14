// Mirror of https://clinicalaesperanza.co/p-centro-de-intervencionismo/

import type { PortfolioPageContent } from "../../types";

export const centroIntervencionismoPage: PortfolioPageContent = {
  title: "Centro de Intervencionismo Cardiovascular",
  back: { label: "Volver a servicios", href: "/portafolio/programas/" },
  blocks: [
    {
      kind: "banner",
      image: {
        src: "/images/portafolio/xc.webp",
        alt: "Sala del Centro de Intervencionismo Cardiovascular",
      },
    },
    {
      kind: "intro",
      title: "Centro de Intervencionismo Cardiovascular",
      subtitle: "Procedimientos cardiovasculares de mínima invasión, con tecnología de punta.",
      body: [
        "Contamos con una sala especializada para el diagnóstico y tratamiento de enfermedades cardiovasculares mediante procedimientos de mínima invasión, respaldada por equipos de tecnología avanzada y un equipo clínico altamente capacitado.",
      ],
    },
    {
      kind: "comparison",
      title: "Nuestra tecnología",
      rowHeader: "Equipo",
      columns: ["Marca / Modelo", "Función", "Descripción"],
      rows: [
        {
          feature: "Estación de anestesia",
          values: [
            "Dräger Atlan A300",
            "Soporte anestésico integral durante procedimientos de hemodinamia",
            "Plataforma central que integra monitoreo y ventilación anestésica de alta precisión",
          ],
        },
        {
          feature: "Monitor multiparámetro",
          values: [
            "Dräger Vista 300",
            "Monitoreo continuo de signos vitales del paciente",
            "Parte de la configuración de la estación de anestesia; seguimiento en tiempo real durante el procedimiento",
          ],
        },
        {
          feature: "Módulo de monitoreo de profundidad anestésica",
          values: [
            "BIS Covidien",
            "Medición del nivel de conciencia/profundidad anestésica",
            "Permite ajustar la anestesia con mayor precisión y seguridad",
          ],
        },
        {
          feature: "Monitor de bloqueo neuromuscular",
          values: [
            "TOFscan",
            "Monitoreo del grado de relajación muscular",
            "Contribuye a una dosificación anestésica más segura y controlada",
          ],
        },
      ],
    },
    {
      kind: "cards",
      title: "Equipos en proceso de confirmación",
      items: [
        {
          title: "Bombas de infusión volumétricas",
          body: "Administración controlada de líquidos y medicamentos IV. Marca/modelo pendiente de confirmación.",
        },
        {
          title: "Bombas de jeringa",
          body: "Administración precisa de medicamentos en dosis controladas. Marca/modelo pendiente de confirmación.",
        },
        {
          title: "Inyector de medio de contraste",
          body: "Inyección automatizada de contraste para estudios de imagen. Marca/modelo pendiente de confirmación.",
        },
        {
          title: "Polígrafo / sistema de registro electrofisiológico (mín. 64 canales)",
          body: "Registro y análisis de señales electrofisiológicas durante el procedimiento. Marca/modelo pendiente de confirmación.",
        },
      ],
    },
    {
      kind: "feature",
      body: [
        "La información de equipos en proceso de confirmación se actualizará una vez se definan las referencias definitivas.",
      ],
    },
    {
      kind: "closing",
      title: "Comunícate con nosotros",
      body: "AppCLEM (App Store / Google Play) · Calle 12 # 4-58, Barrio Buenavista · PBX 7848903 · info@clinicalaesperanza.co",
    },
  ],
};
