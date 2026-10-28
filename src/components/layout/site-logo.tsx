import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export type SiteLogoProps = {
  /** White version for dark backgrounds. */
  inverted?: boolean;
  className?: string;
};

export function SiteLogo({ inverted = false, className }: SiteLogoProps) {
  return (
    <Link href="/" className={cn("inline-flex shrink-0 rounded-sm", className)}>
      <Image
        src={
          inverted ? "/images/brand/logo-horizontal-white.png" : "/images/brand/logo-horizontal.png"
        }
        alt={`${siteConfig.name} – Inicio`}
        preload={!inverted}
        width={176}
        height={48}
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
