const MEETING_IMAGE = `${process.env.PUBLIC_URL}/media/client-meeting.webp`;

function EmployeesImage2() {
  return (
    <section className="section-shell">
      <div className="image-panel">
        <img
          src={MEETING_IMAGE}
          alt="Advokater i modern kontorsmiljö"
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

export default EmployeesImage2;
