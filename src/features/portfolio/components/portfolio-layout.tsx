import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout";
import { siteConfig } from "@/config/site";

import { PortfolioFooter } from "./portfolio-footer";
import { PortfolioMobileNav } from "./portfolio-mobile-nav";
import { PortfolioNavMenu } from "./portfolio-nav-menu";
import { PortfolioTopBar } from "./portfolio-top-bar";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <PortfolioTopBar />

      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85">
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link href="/portafolio/" className="inline-flex shrink-0 rounded-sm">
            <Image
              src="/images/brand/logo-horizontal.png"
              alt={`${siteConfig.name} – Portafolio`}
              width={176}
              height={48}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>
          <PortfolioNavMenu />
          <PortfolioMobileNav />
        </Container>
      </header>

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <PortfolioFooter />
    </div>
  );
}
