import type { Metadata } from "next";

import { serviceMetadata, SpecialtyPage, specialtyParams } from "@/features/services";

// Unlisted slugs wait for the full render, so notFound() still answers with a 404 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return specialtyParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/especialidades/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return serviceMetadata(`/servicios/especialidades/${slug}/`);
}

export default async function Page({ params }: PageProps<"/servicios/especialidades/[slug]">) {
  const { slug } = await params;
  return <SpecialtyPage slug={slug} />;
}
