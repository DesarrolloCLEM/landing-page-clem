import type { Metadata } from "next";

import { ProgramPage, programParams, serviceMetadata } from "@/features/services";

// Unlisted slugs wait for the full render, so notFound() still answers with a 404 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return programParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/programas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return serviceMetadata(`/servicios/programas/${slug}/`);
}

export default async function Page({ params }: PageProps<"/servicios/programas/[slug]">) {
  const { slug } = await params;
  return <ProgramPage slug={slug} />;
}
