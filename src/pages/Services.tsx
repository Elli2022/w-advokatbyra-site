import React from "react";
import Navbar from "../components/Navbar";
// import Title from "../components/Title";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Container from "../components/Container";
import EmployeesImage2 from "../components/EmployeesImage2";
import HorisontalRule from "../components/HorisontalRule";
import Expertis from "../components/ExpertiseTable";

function Services() {
  console.log("tjänster");
  return (
    <>
      <Navbar />
      <Banner />
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontSize: 28,
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontFamily: "Caslon224Std-Book,times,georgia,serif",
          }}
        >
          Tjänster
        </h1>
      </div>
      <Container>
        <p
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
            fontSize: "calc(18px + 0.5vw)", // Exempel på responsiv fontstorlek
            maxWidth: "800px", // Maxbredd för textbehållaren
            lineHeight: "1.6", // Optimal line-height för läsbarhet
            margin: "18px auto", // Centrera behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Vi är här för att erbjuda dig juridisk expertis av högsta klass. Med
          vårt team av erfarna advokater är vi redo att vägleda dig genom dina
          juridiska utmaningar och se till att dina rättigheter alltid bevaras.
          Oavsett om du behöver hjälp med affärsjuridik, familjerätt, brottmål
          eller något annat juridiskt ärende, är Wernberg ditt bästa val.
          Kontakta oss idag för en kostnadsfri konsultation.
        </p>
      </Container>
      <EmployeesImage2 />
      <p
        style={{
          color: "white",
          display: "flex",
          fontFamily: "sans-serif",
          fontSize: "calc(10px + 0.5vw)", // Responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Wernberg Advokatfirma erbjuder juridisk rådgivning från vårt kontor i
        Malmö. Vi tillhandahåller expertis inom nästan alla affärsjuridiska
        discipliner och betjänar en rad olika sektorer och industrier.
      </p>
      <h2
        style={{
          fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
          color: "white",
          display: "flex",
          fontSize: "calc(18px + 0.5vw)",
          maxWidth: "800px",
          lineHeight: "1.6",
          margin: "18px auto",
          padding: "10px",
        }}
      >
        Dussintals rådgivare i en.
      </h2>
      <p
        style={{
          color: "white",
          display: "flex",
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
          fontSize: "calc(18px + 0.5vw)",
          maxWidth: "800px",
          lineHeight: "1.6",
          margin: "26px auto",
          padding: "10px",
        }}
      >
        Hur vi strukturerar oss bör alltid gynna våra klienters behov. Därför
        prioriterar vi internt kunskapsutbyte. Vi jobbar i team som är anpassade
        för varje enskilt uppdrag, och tar med oss den affärsmässiga och
        juridiska expertisen som krävs.
        <br />
        <br />
        För att garantera den bästa möjliga rådgivningen till våra klienter har
        vi utformat en affärsstruktur som främjar samarbete och minimerar intern
        konkurrens. Vårt mål är att närma oss varje klient som en unik
        rådgivare, men med styrkan av hela vårt teams kunskap.
        <br />
        <br />
        Du är välkommen att utforska mer om vår rådgivning baserat på olika
        verksamhetsområden och branscher. Tveka inte att kontakta någon av vårt
        dedikerade team närhelst du behöver.
      </p>
      <HorisontalRule />
      <Expertis />
      <Footer />
    </>
  );
}

export default Services;
