import { serviceMetadata, UnitPage } from "@/features/services";

export const metadata = serviceMetadata("/servicios/diagnostico-y-apoyo-terapeutico/");

export default function Page() {
  return <UnitPage slug="diagnostico-y-apoyo-terapeutico" />;
}
