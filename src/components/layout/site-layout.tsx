import type { ReactNode } from "react";

import { FloatingWhatsApp } from "./floating-whatsapp";
import { Footer } from "./footer";
import { Header } from "./header";
import { TopBar } from "./top-bar";

export const mainContentId = "contenido";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href={`#${mainContentId}`}
        className="sr-only z-50 rounded-full bg-primary px-5 py-3 font-heading font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <TopBar />
      <Header />
      <main id={mainContentId} tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
