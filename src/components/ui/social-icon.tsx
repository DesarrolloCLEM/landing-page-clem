import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type SocialIconNetwork = "facebook" | "instagram" | "tiktok" | "whatsapp";

// Outline brand marks drawn on the same 24px grid and stroke as lucide icons,
// which no longer ships brand icons.
const paths: Record<SocialIconNetwork, ReactNode> = {
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  tiktok: <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5" />,
  whatsapp: (
    <>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9.5 9.5c0 2.8 2.2 5 5 5l1-1.5-2-1-1 1a3 3 0 0 1-1.5-1.5l1-1-1-2Z" />
    </>
  ),
};

export type SocialIconProps = Omit<ComponentProps<"svg">, "children"> & {
  network: SocialIconNetwork;
};

/** Decorative icon: give the surrounding link its accessible name. */
export function SocialIcon({ network, className, ...props }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5", className)}
      {...props}
    >
      {paths[network]}
    </svg>
  );
}
