export type PortfolioServiceCard = {
  title: string;
  summary: string;
  href: string;
  image: { src: string; alt: string };
};

export type PortfolioStory = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export type PortfolioQuickLink = {
  label: string;
  href: string;
};

export type BuildingInfo = {
  name: string;
  lot: string;
  builtArea: string;
  details: string;
};

export type CapacityRow = {
  service: string;
  current: number;
  expansion: number;
  projected: number;
};

export type EquipmentItem = {
  name: string;
  description: string;
  confirmed: boolean;
};
