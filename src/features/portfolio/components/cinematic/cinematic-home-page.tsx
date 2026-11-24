import { CinematicHero } from "./cinematic-hero";
import { CinematicServices } from "./cinematic-services";
import { CinematicWhoWeAre } from "./cinematic-who-we-are";

/**
 * Cinematic version of the portfolio home, published at /portafolio/vista-previa/ for approval
 * (openspec/changes/add-portafolio-cinematico). Same content as `PortfolioHomePage`.
 */
export function PortfolioCinematicHomePage() {
  return (
    <>
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
    </>
  );
}
