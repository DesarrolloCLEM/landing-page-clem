import { serviceMetadata, UnitPage } from "@/features/services";

export const metadata = serviceMetadata("/servicios/hospitalizacion/");

export default function Page() {
  return <UnitPage slug="hospitalizacion" />;
}
