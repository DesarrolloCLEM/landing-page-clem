import { CalendarCheck } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui";
import { appointmentLink, mainNav } from "@/config/navigation";
import { cn } from "@/lib/cn";

import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { NavMenu } from "./nav-menu";
import { SiteLogo } from "./site-logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/85">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <SiteLogo />
        <NavMenu items={mainNav} />
        <div className="flex items-center gap-2">
          <Link
            href={appointmentLink.href}
            className={cn(buttonVariants({ size: "sm" }), "px-3 sm:px-4")}
          >
            <CalendarCheck aria-hidden="true" />
            <span className="sm:hidden">Cita</span>
            <span className="hidden sm:inline">{appointmentLink.label}</span>
          </Link>
          <MobileNav items={mainNav} />
        </div>
      </Container>
    </header>
  );
}
