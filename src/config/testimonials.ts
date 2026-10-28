// Patient stories shown on the home page and on /usuarios/.

export type Testimonial = {
  name: string;
  procedure: string;
  summary: string;
  storyUrl: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const testimonials: Testimonial[] = [
  {
    name: "Laura Sofía Restrepo",
    procedure: "Parto humanizado",
    summary:
      "Parto humanizado con acompañamiento continuo y la presencia de su pareja durante todo el proceso, en un entorno seguro y respetuoso, brindando apoyo emocional constante.",
    storyUrl: "https://www.instagram.com/reel/DPCeDwpiXjJ/",
    image: {
      src: "/images/testimonials/laura-sofia-restrepo.webp",
      alt: "Laura Sofía Restrepo, paciente de la clínica",
      width: 380,
      height: 448,
    },
  },
  {
    name: "Johan Cruz Martínez",
    procedure: "Corrección de quiste biliar",
    summary:
      "Cirugía de alta complejidad en la que se retiró el quiste de la vía biliar y se reconstruyó el paso de la bilis hacia el intestino, permitiendo restablecer su funcionamiento normal.",
    storyUrl: "https://www.instagram.com/reel/DXXwu0gB99N/",
    image: {
      src: "/images/testimonials/johan-cruz-martinez.webp",
      alt: "Johan Cruz Martínez en brazos de una enfermera de la clínica",
      width: 380,
      height: 447,
    },
  },
  {
    name: "Dr. Pedro Vieira",
    procedure: "Cirugía de columna",
    summary:
      "Intervención quirúrgica especializada en la columna para corregir la causa del dolor crónico, estabilizar la zona afectada y aliviar la compresión, permitiendo mejorar su movilidad y calidad de vida.",
    storyUrl: "https://www.instagram.com/reel/DOgPLN0jhs2/",
    image: {
      src: "/images/testimonials/pedro-vieira.webp",
      alt: "Cirujano de la clínica durante un procedimiento",
      width: 381,
      height: 447,
    },
  },
];
