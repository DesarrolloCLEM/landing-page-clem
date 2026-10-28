import { Nunito, Nunito_Sans } from "next/font/google";

// Stand-ins for the brand's Adobe fonts (Omnes / Museo Sans).
// To switch to the licensed files, replace these with next/font/local
// and keep the same CSS variable names.
export const headingFont = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});
