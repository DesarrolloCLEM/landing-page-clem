import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Eyebrow } from "./eyebrow";
import { Heading, type HeadingProps } from "./heading";
import { Text } from "./text";

export type SectionHeadingProps = {
  title: ReactNode;
  /** Id of the title, to label the parent section with `aria-labelledby`. */
  titleId: string;
  eyebrow?: ReactNode;
  description?: ReactNode;
  as?: Extract<HeadingProps["as"], "h1" | "h2">;
  size?: HeadingProps["size"];
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  titleId,
  eyebrow,
  description,
  as = "h2",
  size = "xl",
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "motion-reveal flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading as={as} id={titleId} size={size}>
        {title}
      </Heading>
      {description && (
        <Text size="lead" tone="muted">
          {description}
        </Text>
      )}
    </div>
  );
}
