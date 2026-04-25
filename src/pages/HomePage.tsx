import { Link } from "react-router";
import { HeroShowcase } from "../components/HeroShowcase";
import { siteContent } from "../content/siteContent";

export const handle = {
  title: "Hem",
};

export function Component() {
  return (
    <>
      <HeroShowcase />

      <section className="page-section page-section--editorial">
        <div className="section-heading section-heading--compact">
          <p className="eyebrow">Det här gör vi bäst</p>
          <h2>Rådgivning som är byggd för verkliga beslut.</h2>
        </div>
        <div className="card-grid">
          {siteContent.focusAreas.map((area) => (
            <article key={area.title} className="card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--split">
        <div className="media-panel">
          <img
            src={siteContent.imagery.office}
            alt="W Advokatbyrås kontor"
            loading="lazy"
          />
        </div>
        <div className="content-panel">
          <p className="eyebrow">Om byrån</p>
          <h2>{siteContent.brandStatement}</h2>
          <p>{siteContent.aboutIntro}</p>
          <p>{siteContent.tagline}</p>
          <Link className="button" to="/about">
            Läs mer om byrån
          </Link>
        </div>
      </section>

      <section className="page-section page-section--accent">
        <div className="section-heading">
          <p className="eyebrow">Varför klienter väljer oss</p>
          <h2>Tre arbetssätt som gör skillnad i varje uppdrag.</h2>
        </div>
        <div className="card-grid">
          {siteContent.values.map((value) => (
            <article key={value.title} className="card card--soft">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--editorial">
        <div className="section-heading section-heading--compact">
          <p className="eyebrow">Det klienterna märker först</p>
          <h2>Mer framdrift, mindre friktion.</h2>
        </div>
        <div className="card-grid">
          {siteContent.insightCards.map((card) => (
            <article key={card.title} className="card card--contrast">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
