// Institutional figures shared by the home page, Sobre nosotros, Nuestras proyecciones
// and Nueva infraestructura, so they never disagree.
// TODO(clinica): the legacy site published 123, 125 and 105 current beds and 218, 210 and
// 205 projected beds. These values come from the Portafolio section (the most recent one)
// until the clinic confirms the official figures.

export type Stat = { value: string; label: string };

export const installedCapacity: Stat[] = [
  { value: "123", label: "Camas habilitadas" },
  { value: "60", label: "Camas de hospitalización adultos" },
  { value: "16", label: "Camas de pediatría" },
  { value: "14", label: "Camas UCI/UCIM adultos" },
  { value: "38", label: "Cubículos de urgencias" },
  { value: "2", label: "Salas de cirugía" },
];

export const institutionStats: Stat[] = [
  { value: "123", label: "Camas habilitadas" },
  { value: "16", label: "Camas pediátricas" },
  { value: "+15", label: "Años de experiencia" },
  { value: "10", label: "Servicios de diagnóstico" },
];

export const expansionStats: Stat[] = [
  { value: "123", label: "Camas habilitadas hoy" },
  { value: "7.764 m²", label: "Nueva torre en construcción" },
  { value: "218", label: "Camas proyectadas" },
];

export const totalBeds = { current: 123, projected: 218 } as const;
