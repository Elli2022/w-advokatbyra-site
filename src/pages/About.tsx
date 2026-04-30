import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Employes from "../components/Employes";
import HorisontalRule from "../components/HorisontalRule";
import managingDirector from "../images/generated/managing-partner.png";
import Footer from "../components/Footer";

function About() {
  const values = [
    {
      title: "Insikt i klientens affär",
      text:
        "Vi sätter juridiken i ett affärssammanhang, så att råd och avtal fungerar i vardagen och inte bara på papperet.",
    },
    {
      title: "Hållbar utveckling",
      text:
        "Regelverk, ansvar och styrning behöver fungera tillsammans. Vi hjälper företag att ta kloka beslut som håller över tid.",
    },
    {
      title: "Samarbete som metod",
      text:
        "Våra uppdrag bemannas med rätt kompetens för varje situation, vilket ger klienten ett fokuserat team utan onödig friktion.",
    },
  ];

  const partnerMessage = [
    "Vi vill att vår hemsida ska ge en rättvis bild av hur vi arbetar: nära klienten, med tydlig kommunikation och med respekt för affärens tempo.",
    "Sedan starten har ambitionen varit densamma. Vi ska vara en byrå som kombinerar hög juridisk kvalitet med lugn, pålitlighet och ett modernt arbetssätt.",
    "Det betyder att vi inte bara svarar på juridiska frågor, utan hjälper klienter att ta genomtänkta beslut när mycket står på spel.",
  ];

  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Container className="page-intro">
          <p className="eyebrow">Om byrån</p>
          <h1 className="page-title">
            Juridisk rådgivning som känns tydlig även i komplexa affärer.
          </h1>
          <p className="lead-text">
            W Advokatbyrå arbetar med affärsjuridik för bolag, entreprenörer och
            ledningsgrupper som vill ha kvalificerat stöd utan onödig
            komplicering.
          </p>
          <p className="copy-block">
            Vår ambition är att vara det självklara valet när juridik behöver
            kombineras med omdöme, tempo och verklig förståelse för klientens
            verksamhet. Vi arbetar nära våra uppdragsgivare och formar team
            efter uppdragets behov.
          </p>
          <p className="copy-block">
            Genom samarbete, hög tillgänglighet och ett modernt arbetssätt
            hjälper vi företag att ta välgrundade beslut i frågor som rör
            tillväxt, risk, styrning och förändring.
          </p>
        </Container>
        <Employes />
        <Container className="split-grid">
          <div className="content-stack">
            <p className="eyebrow">Vår viktigaste tillgång</p>
            <h2 className="section-title">
              Kompetensen i teamet gör skillnaden.
            </h2>
            <p className="copy-block">
              Juridiskt djup är viktigt, men det är förmågan att omsätta
              kunskapen till rätt beslut som skapar värde för klienten. Därför
              arbetar vi tvärfunktionellt och håller kommunikationen rak, tydlig
              och användbar.
            </p>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
        <HorisontalRule />
        <Container className="leadership-layout">
          <div className="leadership-card">
            <img
              src={managingDirector}
              alt="Managing partner i ett mötesrum"
              className="leadership-image"
            />
          </div>
          <div className="content-stack">
            <p className="eyebrow">Managing Partner har ordet</p>
            <h2 className="section-title">Ledarskap som bygger förtroende.</h2>
            <div className="leadership-meta">
              <strong>Lisa Larsson</strong>
              <span>Managing Partner</span>
            </div>
            {partnerMessage.map((paragraph) => (
              <p className="copy-block" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
        <HorisontalRule />
      </main>
      <Footer />
    </>
  );
}

export default About;
