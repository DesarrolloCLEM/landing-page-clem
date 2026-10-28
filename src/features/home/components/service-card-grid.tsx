import Image from "next/image";
import { ViewTransition } from "react";

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

import { transitionName } from "@/lib/transition-name";

import type { ServiceHighlight } from "../types";

export function ServiceCardGrid({ items }: { items: ServiceHighlight[] }) {
  return (
    <Grid as="ul" cols={4}>
      {items.map((item) => (
        <Card as="li" key={item.href} interactive>
          <ViewTransition name={transitionName(item.href)} share="auto" default="none">
            <CardMedia>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </CardMedia>
          </ViewTransition>
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
