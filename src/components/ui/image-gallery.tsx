import { Expand } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/cn";

export type GalleryImage = { src: string; alt: string };

export type ImageGalleryProps = {
  images: GalleryImage[];
  /** Hidden text appended to each link that opens the full-size image. */
  openLabel?: string;
  className?: string;
};

/**
 * Responsive grid of photos. Each one opens at full size in a new tab, so it works without
 * JavaScript; the first photo spans two columns on wide screens.
 */
export function ImageGallery({
  images,
  openLabel = "Ver imagen en tamaño completo (abre en una pestaña nueva)",
  className,
}: ImageGalleryProps) {
  return (
    <ul className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {images.map((image, index) => (
        <li key={image.src} className={cn(index === 0 && "lg:col-span-2 lg:row-span-2")}>
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] h-full overflow-hidden rounded-card bg-surface shadow-card"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                index === 0
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
              className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
            />
            <span className="absolute right-3 bottom-3 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand aria-hidden="true" className="size-4" />
            </span>
            <span className="sr-only">{openLabel}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
