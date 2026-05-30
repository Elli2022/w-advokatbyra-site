import lawFirmBanner from "../images/generated/hero-law-firm.png";
import { Link } from "react-router-dom";
import Container from "./Container";

function LargeBanner() {
  return (
    <Container>
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img src={lawFirmBanner} alt="" className="hero__image" />
        </div>
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="eyebrow">Affärsjuridik med lugn precision</p>
          <h1 className="hero__title">
            Trygg juridisk rådgivning för företag och entreprenörer.
          </h1>
          <p className="hero__copy">
            W Advokatbyrå kombinerar affärsmässig skärpa med nära samarbete.
            Vi hjälper klienter att fatta tydliga beslut, hantera risk och
            bygga långsiktigt hållbara affärer.
          </p>
          <div className="hero__actions">
            <Link to="/about" className="button button--primary">
              Lär känna byrån
            </Link>
            <Link to="/contact" className="button button--secondary">
              Boka ett första samtal
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default LargeBanner;
