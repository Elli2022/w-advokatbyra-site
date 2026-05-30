import employees1 from "../images/generated/team-boardroom.png";

function EmployesImage1() {
  return (
    <section className="section-shell">
      <div className="image-panel">
        <img
          src={employees1}
          alt="Jurister i samtal vid konferensbord"
          className="feature-image"
        />
      </div>
    </section>
  );
}

export default EmployesImage1;
