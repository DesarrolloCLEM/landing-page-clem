export type ImageAsset = { src: string; alt: string };

export type QuickLink = {
  title: string;
  description: string;
  href: string;
  icon: "contact" | "appointment" | "app";
};

export type Policy = { id: string; title: string; text: string };

export type OrgUnit = { name: string; note?: string; children?: OrgUnit[] };

export type Projection = { label: string; current: number; projected: number };

export type CapacityRow = { service: string; current: number; projected: number };

export type BuildingDetail = { title: string; text: string };

export type SubpageLink = { title: string; description: string; href: string };
