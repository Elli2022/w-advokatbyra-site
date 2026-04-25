import { useDeferredValue, useState } from "react";
import { siteContent } from "../content/siteContent";

function matchesQuery(
  query: string,
  candidate: { title: string; description: string; keywords?: string[] }
) {
  if (!query) {
    return true;
  }

  const haystack = [
    candidate.title,
    candidate.description,
    ...(candidate.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

export function PracticeDirectory() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleServices = siteContent.services.filter((service) =>
    matchesQuery(deferredQuery, service)
  );

  return (
    <section className="practice-directory">
      <div className="practice-directory__header">
        <div>
          <p className="eyebrow">Utforska rådgivningen</p>
          <h2>Filtrera fram rätt specialistområde för uppdraget.</h2>
        </div>
        <label className="practice-directory__search">
          <span>Sök efter fokusområde</span>
          <input
            type="search"
            placeholder="Exempel: fastighet, data eller tvist"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </label>
      </div>

      <div className="practice-directory__status" aria-live="polite">
        {query && deferredQuery !== query.trim().toLowerCase()
          ? "Filtrerar tjänster..."
          : `${visibleServices.length} fokusområden visas`}
      </div>

      <div className="card-grid card-grid--wide">
        {visibleServices.map((service) => (
          <article key={service.title} className="card card--service">
            <p className="card__kicker">Specialistområde</p>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      {visibleServices.length === 0 ? (
        <div className="practice-directory__empty">
          Inga fokusområden matchade din sökning. Prova ett bredare ord eller
          kontakta oss direkt för att beskriva ärendet.
        </div>
      ) : null}
    </section>
  );
}
