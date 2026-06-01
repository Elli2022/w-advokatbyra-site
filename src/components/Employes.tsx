const TEAM_IMAGE = `${process.env.PUBLIC_URL}/media/team-boardroom.webp`;

function EmployesImage1() {
  return (
    <section className="section-shell">
      <div className="image-panel">
        <img
          src={TEAM_IMAGE}
          alt="Jurister i samtal vid konferensbord"
          className="feature-image"
          width={1400}
          height={934}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default EmployesImage1;
