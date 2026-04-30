function Expertis() {
  const expertisePairs = [
    {
      area: "Arbetsrätt och pensioner",
      industry: "Finansiella institutioner och snabbväxande bolag",
    },
    {
      area: "Bank och finans",
      industry: "Private equity, fintech och kapitalintensiva projekt",
    },
    {
      area: "Entreprenad och fastighetsrätt",
      industry: "Construction, infrastruktur och kommersiell fastighet",
    },
    {
      area: "EU- och konkurrensrätt",
      industry: "Reglerade marknader och internationell expansion",
    },
    {
      area: "Data Privacy och compliance",
      industry: "Tech, media och life science",
    },
    {
      area: "Företagsbeskattning",
      industry: "Ägarledda bolag, fonder och investeringar",
    },
  ];

  return (
    <section className="section-shell content-stack">
      <p className="eyebrow">Kompetens</p>
      <h2 className="section-title">Verksamhetsområden och branscher</h2>
      <div className="expertise-grid">
        {expertisePairs.map((item) => (
          <article className="expertise-card" key={item.area}>
            <strong>Verksamhetsområde</strong>
            <h3>{item.area}</h3>
            <p>
              <strong>Vanliga uppdrag</strong>
            </p>
            <p>{item.industry}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Expertis;
