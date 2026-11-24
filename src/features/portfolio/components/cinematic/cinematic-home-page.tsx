import { ScrollProgress } from "@/components/layout";

import { CinematicContact } from "./cinematic-contact";
import { CinematicHero } from "./cinematic-hero";
import { CinematicInfrastructure } from "./cinematic-infrastructure";
import { CinematicServices } from "./cinematic-services";
import { CinematicStories } from "./cinematic-stories";
import { CinematicWhoWeAre } from "./cinematic-who-we-are";

/**
 * Cinematic version of the portfolio home, published at /portafolio/vista-previa/ for approval
 * (openspec/changes/add-portafolio-cinematico). Same content as `PortfolioHomePage`.
 */
export function PortfolioCinematicHomePage() {
  return (
    <>
      {/* Reading progress right under the sticky portfolio header (decorative, CSS only). */}
      <div className="pointer-events-none fixed inset-x-0 top-(--portfolio-header-h) z-40 h-[3px]">
        <ScrollProgress />
      </div>

      {/*
       * Curtain: the hero stays pinned under the header while "Quiénes somos" slides over it.
       * The wrapper ends with that section, so the hero stops being pinned there.
       */}
      <div className="cine-curtain">
        <div className="cine-curtain-stage">
          <CinematicHero />
        </div>
        <div className="relative z-10 bg-white">
          <CinematicWhoWeAre />
        </div>
      </div>

      <CinematicServices />
      <CinematicInfrastructure />
      <CinematicStories />
      <CinematicContact />
    </>
  );
}
