import type { ReactNode } from "react";

import { Heading, Text } from "@/components/ui";

type ShowcaseBlockProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function ShowcaseBlock({ title, description, children }: ShowcaseBlockProps) {
  return (
    <div className="flex flex-col gap-4 border-t border-border pt-8 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-1">
        <Heading as="h3" size="sm">
          {title}
        </Heading>
        {description && (
          <Text size="small" tone="muted">
            {description}
          </Text>
        )}
      </div>
      {children}
    </div>
  );
}
