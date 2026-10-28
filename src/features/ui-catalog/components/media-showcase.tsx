import { Container, Grid, Section } from "@/components/layout";
import { ImageGallery, MapEmbed, SectionHeading, StatCard, TestimonialCard } from "@/components/ui";

import { ShowcaseBlock } from "./showcase-block";

const sampleStats = [
  { value: "123", label: "Camas habilitadas" },
  { value: "24/7", label: "Atención de urgencias" },
  { value: "+15", label: "Años de experiencia" },
];

export function MediaShowcase() {
  return (
    <Section tone="surface" aria-labelledby="catalog-media">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          titleId="catalog-media"
          eyebrow="Datos y medios"
          title="Cifras, testimonios y mapa"
        />

        <ShowcaseBlock title="StatCard" description="Va dentro de un <dl>: renderiza el par dt/dd.">
          <dl className="grid gap-4 sm:grid-cols-3">
            {sampleStats.map((stat) => (
              <StatCard key={stat.label} variant="card" value={stat.value} label={stat.label} />
            ))}
          </dl>
        </ShowcaseBlock>

        <ShowcaseBlock
          title="TestimonialCard"
          description="Foto, nombre, procedimiento, resumen y enlace externo."
        >
          <Grid cols={3}>
            <TestimonialCard
              name="Nombre del paciente"
              procedure="Procedimiento"
              summary="Resumen breve de la historia del paciente y de la atención recibida."
              image={{
                src: "/images/testimonials/laura-sofia-restrepo.webp",
                alt: "Foto de ejemplo",
                width: 380,
                height: 448,
              }}
              link={{ href: "https://example.com", label: "Leer historia completa" }}
            />
          </Grid>
        </ShowcaseBlock>

        <ShowcaseBlock
          title="ImageGallery"
          description="Cada foto abre en tamaño completo; la primera ocupa dos columnas en escritorio."
        >
          <ImageGallery
            images={[
              { src: "/images/home/hospitalizacion-habitacion.webp", alt: "Foto de ejemplo 1" },
              { src: "/images/home/cirugia-quirofano.webp", alt: "Foto de ejemplo 2" },
              { src: "/images/home/urgencias-equipo.webp", alt: "Foto de ejemplo 3" },
            ]}
          />
        </ShowcaseBlock>

        <ShowcaseBlock
          title="MapEmbed"
          description='iframe con loading="lazy" y un enlace que funciona sin cargar el mapa.'
        >
          <MapEmbed
            className="max-w-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1971.7!2d-75.892!3d8.7455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco"
            title="Mapa de ejemplo"
            link={{ href: "https://maps.google.com", label: "Ver en Google Maps" }}
          />
        </ShowcaseBlock>
      </Container>
    </Section>
  );
}
