import { siteContent } from "../content/siteContent";

export const handle = {
  title: "Om byrån",
};

export function Component() {
  return (
    <>
      <section className="page-section page-section--tight">
        <div className="section-heading">
          <p className="eyebrow">Om byrån</p>
          <h1>Byggd för tydlighet, ansvar och samarbete.</h1>
          <p>{siteContent.aboutIntro}</p>
        </div>
      </section>

      <section className="page-section page-section--split">
        <div className="content-panel">
          {siteContent.aboutSections.map((section) => (
            <article key={section.title} className="stacked-copy">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
        <div className="media-stack">
          <img
            src={siteContent.imagery.culture}
            alt="Team på W Advokatbyrå"
            loading="lazy"
          />
          <img
            src={siteContent.imagery.advisory}
            alt="Rådgivningsmiljö på kontoret"
            loading="lazy"
          />
        </div>
      </section>

      <section className="page-section page-section--accent">
        <div className="quote-panel">
          <img
            src={siteContent.imagery.partner}
            alt={siteContent.managingPartner.name}
            loading="lazy"
          />
          <div>
            <p className="eyebrow">Managing Partner</p>
            <h2>{siteContent.managingPartner.name}</h2>
            <p className="quote-panel__title">
              {siteContent.managingPartner.title}
            </p>
            <p className="quote-panel__quote">
              {siteContent.managingPartner.quote}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
