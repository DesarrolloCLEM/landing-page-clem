import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Custom theme tokens from globals.css that tailwind-merge cannot infer on its own.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-family": [{ font: ["heading", "body"] }],
      shadow: [{ shadow: ["card", "card-hover"] }],
      rounded: [{ rounded: ["card"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
