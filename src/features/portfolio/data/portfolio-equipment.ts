import type { EquipmentItem } from "../types";

export const interventionismEquipment: EquipmentItem[] = [
  {
    name: "Estación de anestesia — Dräger Atlan A300",
    description:
      "Plataforma central que integra monitoreo y ventilación anestésica de alta precisión. Soporte anestésico integral durante procedimientos de hemodinamia.",
    confirmed: true,
  },
  {
    name: "Monitor multiparámetro — Dräger Vista 300",
    description:
      "Parte de la configuración de la estación de anestesia; seguimiento en tiempo real de signos vitales durante el procedimiento.",
    confirmed: true,
  },
  {
    name: "Módulo de profundidad anestésica — BIS Covidien",
    description:
      "Medición del nivel de conciencia y profundidad anestésica. Permite ajustar la anestesia con mayor precisión y seguridad.",
    confirmed: true,
  },
  {
    name: "Monitor de bloqueo neuromuscular — TOFscan",
    description:
      "Monitoreo del grado de relajación muscular. Contribuye a una dosificación anestésica más segura y controlada.",
    confirmed: true,
  },
  {
    name: "Bombas de infusión volumétricas",
    description: "Administración controlada de líquidos y medicamentos IV.",
    confirmed: false,
  },
  {
    name: "Bombas de jeringa",
    description: "Administración precisa de medicamentos en dosis controladas.",
    confirmed: false,
  },
  {
    name: "Inyector de medio de contraste",
    description: "Inyección automatizada de contraste para estudios de imagen.",
    confirmed: false,
  },
  {
    name: "Polígrafo / sistema de registro electrofisiológico (mín. 64 canales)",
    description: "Registro y análisis de señales electrofisiológicas durante el procedimiento.",
    confirmed: false,
  },
];

export const gynecologyEquipment: EquipmentItem[] = [
  {
    name: "Voluson",
    description: "Ecógrafo especializado en perinatología y medicina materno-fetal.",
    confirmed: true,
  },
  {
    name: "Logiq Totus",
    description: "Equipo de ultrasonido con elastografía para diagnóstico ginecológico avanzado.",
    confirmed: true,
  },
];
