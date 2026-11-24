import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

import { stories, storiesIntro } from "../../data/portfolio-home";

/** "Historias que inspiran": the cards appear one after another (`motion-stagger`). */
export function CinematicStories() {
  return (
    <section
      id="Historia"
      aria-labelledby="cine-stories-title"
      className="bg-surface py-20 lg:py-28"
    >
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <Heading as="h2" id="cine-stories-title" size="xl">
            Historias que inspiran
          </Heading>
          <Text size="lead" tone="muted">
            {storiesIntro}
          </Text>
        </div>

        <ul className="motion-stagger grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <li key={story.title}>
              <Link href={story.href} className="group flex h-full flex-col gap-4">
                <div className="relative aspect-video overflow-hidden rounded-card">
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-primary">{story.tag}</p>
                  <h3 className="font-heading text-2xl font-extrabold text-navy transition-colors group-hover:text-primary">
                    {story.title}
                  </h3>
                  <p className="text-ink-muted">{story.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
