import Image from "next/image";

import { Grid } from "@/components/layout";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
  TextLink,
} from "@/components/ui";

import type { ServiceHighlight } from "../types";

export function ServiceCardGrid({ items }: { items: ServiceHighlight[] }) {
  return (
    <Grid as="ul" cols={4}>
      {items.map((item) => (
        <Card as="li" key={item.href} interactive>
          <CardMedia>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </CardMedia>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.summary}</CardDescription>
          </CardHeader>
          <CardFooter>
            <TextLink href={item.href} withArrow>
              Más información<span className="sr-only"> sobre {item.title}</span>
            </TextLink>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
}
