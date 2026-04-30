import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Container from "../components/Container";
import EmployeesImage2 from "../components/EmployeesImage2";
import HorisontalRule from "../components/HorisontalRule";
import Expertis from "../components/ExpertiseTable";
import { Link } from "react-router-dom";

function Services() {
  const serviceHighlights = [
    {
      title: "Affärsjuridik och avtal",
      text:
        "Vi hjälper till att strukturera, granska och förhandla avtal så att affären blir tydlig från start.",
    },
    {
      title: "Tvister och riskhantering",
      text:
        "När läget blir pressat behöver rådgivningen vara både snabb och välgrundad. Vi stöttar inför, under och efter tvister.",
    },
    {
      title: "Styrning, compliance och förändring",
      text:
        "Vi hjälper företag att bygga processer som möter krav från ägare, styrelse, myndigheter och marknad.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Container className="page-intro">
          <p className="eyebrow">Tjänster</p>
          <h1 className="page-title">
            Specialiserad rådgivning med affären i fokus.
          </h1>
          <p className="lead-text">
            Vi hjälper klienter genom förhandlingar, investeringar,
            styrningsfrågor och löpande kommersiella beslut där juridiken
            behöver vara både skarp och användbar.
          </p>
        </Container>
        <EmployeesImage2 />
        <Container className="content-stack">
          <div className="value-grid">
            {serviceHighlights.map((item) => (
              <article className="value-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="copy-block">
            Hur vi organiserar oss ska alltid gynna klientens behov. Därför
            prioriterar vi kunskapsdelning internt och sätter samman team med
            rätt kombination av juridisk expertis och affärsförståelse för
            varje uppdrag.
          </p>
          <p className="copy-block">
            Resultatet blir rådgivning som känns sammanhållen. Klienten möter en
            tydlig kontakt, men får styrkan från hela byråns samlade erfarenhet.
          </p>
          <div>
            <Link to="/contact" className="button button--secondary">
              Prata med oss om ditt ärende
            </Link>
          </div>
        </Container>
        <HorisontalRule />
        <Expertis />
      </main>
      <Footer />
    </>
  );
}

export default Services;
