import type { Metadata } from "next";

import {
  HospitalizationOptionPage,
  hospitalizationParams,
  serviceMetadata,
} from "@/features/services";

// Unlisted slugs wait for the full render, so notFound() still answers with a 404 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return hospitalizationParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/hospitalizacion/[option]">): Promise<Metadata> {
  const { option } = await params;
  return serviceMetadata(`/servicios/hospitalizacion/${option}/`);
}

export default async function Page({ params }: PageProps<"/servicios/hospitalizacion/[option]">) {
  const { option } = await params;
  return <HospitalizationOptionPage slug={option} />;
}
