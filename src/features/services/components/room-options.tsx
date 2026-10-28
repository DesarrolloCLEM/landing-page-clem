import { ArrowRight, Check, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

import { roomComparison, roomOptions } from "../data/hospitalization";

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="font-semibold">{value}</span>;
  return value ? (
    <>
      <Check aria-hidden="true" className="mx-auto size-5 text-health-strong" />
      <span className="sr-only">Incluido</span>
    </>
  ) : (
    <>
      <Minus aria-hidden="true" className="mx-auto size-5 text-ink-muted" />
      <span className="sr-only">No incluido</span>
    </>
  );
}

/** Hospitalization options: Estándar, Plus and Suite Serena side by side, plus the comparison table. */
export function RoomOptions() {
  return (
    <Section tone="surface" spacing="compact" aria-labelledby="rooms-title">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Heading as="h2" id="rooms-title" size="lg">
            Opciones de hospitalización
          </Heading>
          <Text tone="muted">Elige la habitación que mejor se adapte a ti y a tu acompañante.</Text>
        </div>

        <ul className="grid gap-6 lg:grid-cols-3">
          {roomOptions.map((room) => (
            <li
              key={room.slug}
              className="flex flex-col overflow-hidden rounded-card border border-border bg-white text-ink shadow-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={room.image}
                  alt={`Vista de la ${room.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-heading text-xl font-bold text-navy">{room.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{room.description}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {room.tags?.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <Link
                  href={room.href ?? "#"}
                  className="mt-auto inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Conoce más<span className="sr-only"> sobre la {room.title}</span>
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4">
          <Heading as="h3" size="md">
            Compara nuestras habitaciones
          </Heading>
          {/* Desktop table; on mobile the same data is listed per room. */}
          <table className="hidden w-full overflow-hidden rounded-card border border-border bg-white text-ink shadow-card md:table">
            <caption className="sr-only">
              Comparación de las habitaciones Estándar, Plus y Suite Serena
            </caption>
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="px-4 py-3 text-left font-heading">
                  Característica
                </th>
                {roomOptions.map((room) => (
                  <th key={room.slug} scope="col" className="px-4 py-3 text-center font-heading">
                    {room.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {roomComparison.map((feature) => (
                <tr key={feature.label}>
                  <th scope="row" className="px-4 py-3 text-left font-semibold">
                    {feature.label}
                  </th>
                  {feature.values.map((value, index) => (
                    <td key={roomOptions[index].slug} className="px-4 py-3 text-center">
                      <FeatureValue value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="flex flex-col gap-4 md:hidden">
            {roomOptions.map((room, index) => (
              <li
                key={room.slug}
                className="rounded-card border border-border bg-white p-5 text-ink shadow-card"
              >
                <h4 className="font-heading font-bold text-navy">{room.title}</h4>
                <dl className="mt-3 flex flex-col divide-y divide-border">
                  {roomComparison.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center justify-between gap-4 py-2 text-sm"
                    >
                      <dt>{feature.label}</dt>
                      <dd className="w-16 text-center">
                        <FeatureValue value={feature.values[index]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
