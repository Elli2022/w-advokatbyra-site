import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Container className="page-intro">
          <p className="eyebrow">Kontakt</p>
          <h1 className="page-title">
            Välkommen att ta kontakt med oss i Malmö.
          </h1>
          <p className="lead-text">
            När du behöver juridiskt stöd vill vi göra första steget enkelt.
            Beskriv ditt ärende kort, så hjälper vi dig vidare till rätt person
            och rätt nästa steg.
          </p>
          <div className="contact-grid">
            <article className="contact-card">
              <h2>Besöksadress</h2>
              <p>Lilla Varvsgatan 21D</p>
              <p>211 76 Malmö</p>
            </article>
            <article className="contact-card">
              <h2>Mötesformat</h2>
              <p>
                Vi tar gärna första mötet på plats i Malmö eller digitalt,
                beroende på vad som passar uppdraget bäst.
              </p>
            </article>
            <article className="contact-card">
              <h2>Inför första dialogen</h2>
              <p>
                Skicka gärna en kort beskrivning av frågan, tidplanen och om det
                finns dokument eller avtal som redan är viktiga i ärendet.
              </p>
            </article>
          </div>
          <div className="panel contact-note">
            <p>
              Behöver du först läsa mer om hur vi arbetar? Besök gärna sidorna
              för <Link to="/about">Om oss</Link> och{" "}
              <Link to="/services">Tjänster</Link>.
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
