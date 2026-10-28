import { serviceMetadata, UnitPage } from "@/features/services";

export const metadata = serviceMetadata("/servicios/consulta-externa/");

export default function Page() {
  return <UnitPage slug="consulta-externa" />;
}
