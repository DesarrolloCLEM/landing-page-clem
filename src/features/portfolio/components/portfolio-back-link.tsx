import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export function PortfolioBackLink() {
  return (
    <Link
      href="/portafolio/"
      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
    >
      <ChevronLeft aria-hidden="true" className="size-4" />
      Volver a servicios
    </Link>
  );
}
