import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout";
import { CountUp, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";

import {
  expansionHighlights,
  institutionalInfrastructure,
  newInfrastructure,
  projectImages,
} from "../../data/portfolio-home";

// Collage columns: the renders of the new tower plus the facade. Each column drifts at its
// own speed from 768px (`.cine-layer-*`); on mobile the columns dissolve into a 2-column grid.
const fullSizeLabel = "Ver imagen en tamaño completo (abre en una pestaña nueva)";
const [corridor, room, care, exterior] = projectImages;
const columns = [
  { layer: "cine-layer-fast", images: [corridor, room] },
  { layer: "cine-layer-slow", images: [exterior, newInfrastructure.image] },
  { layer: "cine-layer-fast", images: [care] },
];

/**
 * "Nueva infraestructura" and "Infraestructura institucional". The current home repeats the
 * title, description and link of the new infrastructure twice; here they appear once, and the
 * growth figures (the same as the "Crecimiento" tab) count up when they enter the screen.
 */
export function CinematicInfrastructure() {
  return (
    <>
      <section
        id="Infraestructura"
        aria-labelledby="cine-infra-title"
        className="overflow-hidden bg-navy py-20 text-white lg:py-28"
      >
        <Container className="flex flex-col gap-14 lg:gap-20">
          <div className="flex max-w-3xl flex-col gap-4">
            <Heading as="h2" id="cine-infra-title" size="xl" className="text-white">
              {newInfrastructure.title}
            </Heading>
            <Text size="lead" className="text-white/85">
              {newInfrastructure.description}
            </Text>
          </div>

          <div className="cine-collage grid grid-cols-2 gap-4 md:grid-cols-3 md:items-start md:gap-6">
            {columns.map((column, index) => (
              <div
                key={index}
                className={cn(
                  column.layer,
                  "contents md:flex md:flex-col md:gap-6",
                  index === 1 && "md:pt-24",
                )}
              >
                {column.images.map((image) => {
                  const photo = (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 50vw"
                      className="object-cover"
                    />
                  );
                  const frame =
                    "relative block aspect-[4/5] overflow-hidden rounded-card bg-white/5";
                  // The renders open at full size, as in the gallery of the current home.
                  return projectImages.includes(image) ? (
                    <a
                      key={image.src}
                      href={image.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={frame}
                    >
                      {photo}
                      <span className="sr-only">{fullSizeLabel}</span>
                    </a>
                  ) : (
                    <div key={image.src} className={frame}>
                      {photo}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <dl className="grid gap-10 border-t border-white/20 pt-10 sm:grid-cols-3">
            {expansionHighlights.map((stat) => (
              <div key={stat.caption} className="flex flex-col gap-2">
                <dt className="order-2 flex flex-col text-white/80">
                  <span className="font-heading font-bold text-white">{stat.caption}</span>
                  {stat.label ? <span className="text-sm">{stat.label}</span> : null}
                </dt>
                <dd className="order-1 font-heading text-[clamp(3rem,6vw,4.5rem)] leading-none font-extrabold tabular-nums">
                  <CountUp value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <Link
              href={newInfrastructure.cta.href}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-heading font-bold text-navy transition-colors hover:bg-brand-50"
            >
              Conoce más sobre el proyecto
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section aria-labelledby="cine-institutional-title" className="bg-white py-20 lg:py-28">
        <Container className="flex flex-col gap-10">
          <Heading as="h2" id="cine-institutional-title" size="xl">
            Infraestructura institucional
          </Heading>
          <ul className="motion-stagger grid gap-6 sm:grid-cols-3">
            {institutionalInfrastructure.map((item) => (
              <li key={item.caption}>
                <figure className="flex flex-col gap-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="font-heading text-xl font-bold text-navy">
                    {item.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
