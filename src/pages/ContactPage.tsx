import { siteContent } from "../content/siteContent";

export const handle = {
  title: "Kontakt",
};

export function Component() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteContent.officeMapQuery
  )}`;

  return (
    <>
      <section className="page-section page-section--tight">
        <div className="section-heading">
          <p className="eyebrow">Kontakt</p>
          <h1>Välkommen till oss i Malmö.</h1>
          <p>
            När du kontaktar oss börjar vi med att reda ut läget, identifiera
            nästa steg och skapa ett upplägg som passar frågans betydelse för
            verksamheten.
          </p>
        </div>
      </section>

      <section className="page-section page-section--split">
        <div className="card card--accent">
          <p className="eyebrow">Besöksadress</p>
          <h2>{siteContent.officeAddress.street}</h2>
          <p>
            {siteContent.officeAddress.postalCode}
            <br />
            {siteContent.officeAddress.country}
          </p>
          <a className="button" href={mapUrl} target="_blank" rel="noreferrer">
            Hitta hit
          </a>
        </div>
        <div className="content-panel">
          <p className="eyebrow">Det kan du förvänta dig</p>
          <h2>Ett första steg som är tydligt och användbart.</h2>
          <ul className="feature-list">
            {siteContent.contactPromises.map((promise) => (
              <li key={promise}>{promise}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section page-section--split page-section--editorial">
        <div className="media-panel">
          <img
            src={siteContent.imagery.office}
            alt="Mötesmiljö hos W Advokatbyrå"
            loading="lazy"
          />
        </div>
        <div className="content-panel">
          <p className="eyebrow">Så ser processen ut</p>
          <h2>Från första kontakt till genomförd lösning.</h2>
          <div className="feature-list">
            {siteContent.workPhases.map((phase) => (
              <div key={phase.title} className="feature-list__panel">
                <strong>{phase.title}</strong>
                <p>{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
