import { siteContent } from "../content/siteContent";

export const handle = {
  title: "Tjänster",
};

export function Component() {
  return (
    <>
      <section className="page-section page-section--tight">
        <div className="section-heading">
          <p className="eyebrow">Tjänster</p>
          <h1>Specialiststöd för komplexa affärsfrågor.</h1>
          <p>
            Vi formar team och rådgivning efter uppdragets tempo, risk och
            affärsmål. Varje fråga ska få rätt nivå av spets, struktur och
            beslutsstöd.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="card-grid">
          {siteContent.services.map((service) => (
            <article key={service.title} className="card">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--accent">
        <div className="section-heading">
          <p className="eyebrow">Branscher</p>
          <h2>Vi arbetar nära verksamheter i förändring.</h2>
        </div>
        <div className="tag-list">
          {siteContent.sectors.map((sector) => (
            <span key={sector} className="tag">
              {sector}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
