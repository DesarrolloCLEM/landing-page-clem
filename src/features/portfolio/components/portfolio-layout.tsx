import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout";
import { contact, siteConfig } from "@/config/site";

import { PortfolioBackLink } from "./portfolio-back-link";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-sm">
        <Container className="flex items-center justify-between gap-4 py-3">
          <Link href="/portafolio/" className="inline-flex shrink-0 rounded-sm">
            <Image
              src="/images/brand/logo-horizontal.png"
              alt={`${siteConfig.name} – Portafolio`}
              width={176}
              height={48}
              className="h-8 w-auto sm:h-10"
            />
          </Link>
          <PortfolioBackLink />
        </Container>
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-surface py-8">
        <Container className="flex flex-col items-center gap-2 text-center text-sm text-muted">
          <p className="font-semibold text-ink">{siteConfig.name}</p>
          <p>{contact.address.full}</p>
          <p>
            <a href={contact.phone.href} className="hover:underline">
              {contact.phone.label}
            </a>
            {" · "}
            <a href={contact.email.href} className="hover:underline">
              {contact.email.label}
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
}
