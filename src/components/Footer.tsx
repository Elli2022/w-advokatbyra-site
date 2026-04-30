import Container from "./Container";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container className="site-footer">
      <footer className="panel site-footer__inner">
        <div className="site-footer__brand">
          <strong>W Advokatbyrå</strong>
          <p>
            Affärsjuridisk rådgivning med bas i Malmö och fokus på tydlighet,
            tillgänglighet och långsiktigt förtroende.
          </p>
          <p>{`2021-${currentYear} © W Advokatbyrå AB med säte i Malmö`}</p>
        </div>
        <nav className="site-footer__links" aria-label="Sidfotsnavigering">
          <Link to="/">Hem</Link>
          <Link to="/about">Om oss</Link>
          <Link to="/services">Tjänster</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </nav>
      </footer>
    </Container>
  );
}

export default Footer;
