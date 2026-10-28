export type ImageAsset = { src: string; alt: string };

export type ServiceHighlight = {
  title: string;
  summary: string;
  href: string;
  image: ImageAsset;
};

export type CareArea = {
  title: string;
  href: string;
  icon: "surgery" | "specialized" | "critical" | "orthopedics";
};
