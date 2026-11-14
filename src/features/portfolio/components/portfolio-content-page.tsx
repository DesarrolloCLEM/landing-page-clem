import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout";

import type { PortfolioPageContent } from "../types";
import { PortfolioBlocks } from "./portfolio-blocks";

/**
 * Shell of every inner page of the portfolio: the local bar with the back link
 * and the page menu, followed by the blocks of the page.
 */
export function PortfolioContentPage({ page }: { page: PortfolioPageContent }) {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <Container>
          <nav
            aria-label={`Navegación de ${page.title}`}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3"
          >
            <Link
              href="/portafolio/"
              className="text-sm font-semibold text-ink-muted hover:text-primary hover:underline"
            >
              Inicio
            </Link>
            <Link
              href={page.back.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
              {page.back.label}
            </Link>
            {page.nav?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-navy hover:text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      <PortfolioBlocks blocks={page.blocks} />
    </>
  );
}
