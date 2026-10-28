import { serviceMetadata, UnitPage } from "@/features/services";

export const metadata = serviceMetadata("/servicios/cirugia/");

export default function Page() {
  return <UnitPage slug="cirugia" />;
}
