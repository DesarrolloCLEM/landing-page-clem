import { serviceMetadata, UnitPage } from "@/features/services";

export const metadata = serviceMetadata("/servicios/urgencias/");

export default function Page() {
  return <UnitPage slug="urgencias" />;
}
