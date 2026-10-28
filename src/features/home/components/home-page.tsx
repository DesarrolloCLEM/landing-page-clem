import { JsonLd } from "@/components/ui";
import { clinicStructuredData } from "@/config/structured-data";

import { CareAreasSection } from "./care-areas-section";
import { HomeHero } from "./home-hero";
import { LocationSection } from "./location-section";
import { MainServicesSection } from "./main-services-section";
import { QualitySection } from "./quality-section";
import { TestimonialsSection } from "./testimonials-section";
import { WelcomeSection } from "./welcome-section";

export function HomePage() {
  return (
    <>
      <JsonLd data={clinicStructuredData} />
      <HomeHero />
      <WelcomeSection />
      <MainServicesSection />
      <CareAreasSection />
      <QualitySection />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
}
