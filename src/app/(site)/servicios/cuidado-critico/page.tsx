import { serviceMetadata, UnitPage } from "@/features/services";

export const metadata = serviceMetadata("/servicios/cuidado-critico/");

export default function Page() {
  return <UnitPage slug="cuidado-critico" />;
}
