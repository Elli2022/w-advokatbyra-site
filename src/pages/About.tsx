import React from "react";
import Navbar from "../components/Navbar";
// import Title from "../components/Title";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Employes from "../components/Employes";
import HorisontalRule from "../components/HorisontalRule";
import managingDirector from "../images/managingDirector.jpg";
import Footer from "../components/Footer";

function About() {
  console.log("Om oss");
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
          Om byrån
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
            margin: "26px auto", // Centrera behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Wernberg Advokatbyrå strävar efter att vara det självklara valet inom
          affärsjuridik på våra marknader. Detta förutsätter en ständig
          anpassning av vårt erbjudande för att möta och anticipera våra
          klienters varierande behov. Vårt team av kompetenta medarbetare,
          baserade både i Sverige och internationellt, verkar inom samtliga
          områden av affärsjuridiken.
        </p>
        <p
          style={{
            color: "white",
            display: "flex",
            fontFamily: "adobe-caslon-pro,times,georgia,serif",
            fontSize: "calc(18px + 0.5vw)", // Exempel på responsiv fontstorlek
            maxWidth: "800px", // Maxbredd för textbehållaren
            lineHeight: "1.6", // Optimal line-height för läsbarhet
            margin: "26px auto", // Centrera behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Vi rådgiver klienter över hela världen och från en mängd olika
          branscher, vilket innebär att vår expertis sträcker sig över de flesta
          affärsjuridiska rättsområden. Även om vi opererar på en global
          marknad, erbjuder vi våra klienter och samarbetspartners en nära och
          sammansvetsad teamdynamik. Vi investerar betydande resurser i att
          rekrytera, utveckla och behålla vår personal. Genom åren har vi
          konstruerat en företagskultur där samarbete står i fokus. Vår unika
          approach till vinstfördelning inom branschen säkerställer att kunskap
          flödar fritt mellan medarbetarna och vidare till varje enskild klient,
          vilket bidrar till vår fortsatta framgång och våra klienters
          tillfredsställelse.
        </p>
      </Container>
      <Employes />
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
        Vår viktigaste tillgång är våra medarbetare
      </p>
      <h2
        style={{
          fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
          color: "white",
          display: "flex",
          fontSize: "calc(18px + 0.5vw)", // Responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Insikt i klienternas affärsverksamhet – idag och imorgon.
      </h2>
      <p
        style={{
          color: "white",
          display: "flex",
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
          fontSize: "calc(18px + 0.5vw)", // Exempel på responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrera behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Vår förmåga att förändras och anpassa oss är inte bara en dygd, utan en
        nödvändighet för att skapa värde för våra klienter, mitt i en ständigt
        föränderlig och allt mer komplicerad affärsvärld. En djupgående
        förståelse för våra klienters affärsverksamhet och en insikt i global
        utveckling är kritiska komponenter; utan dessa skulle vår rådgivning
        vara otillräcklig. Därför går vi utöver juridiken och rustar våra
        medarbetare med en mångfacetterad förståelse, erbjuder dem en bredare vy
        och fler perspektiv, för att verkligen sätta klientens behov och framtid
        i centrum." Denna text kan självklart justeras ytterligare beroende på
        den exakta ton och budskap du vill förmedla. Om du har några specifika
        punkter eller nyckelord som du vill betona mer, låt mig veta så jag kan
        justera texten därefter!
      </p>
      <h2
        style={{
          fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
          color: "white",
          display: "flex",
          fontSize: "calc(18px + 0.5vw)", // Responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Spaning på globala trender, förpliktelse till hållbarhet och en kultur
        av innovation.
      </h2>
      <p
        style={{
          color: "white",
          display: "flex",
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
          fontSize: "calc(18px + 0.5vw)", // Exempel på responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrera behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        I flera år har vi stärkt vårt team med en senior ekonom samt en chef för
        hållbarhet, vilka båda berikar vår juridiska expertis genom att
        integrera omvärldsanalys och strategisk utveckling. Hållbarhet är inte
        bara en biprodukt, utan en införlivad komponent i hela vår organisation
        och genomgående i all den rådgivning vi erbjuder. Dessutom har vi
        introducerat MSA Innovation Lab, vår egen affärsenhet dedikerad till
        innovation och digital omvandling.
      </p>
      <h2
        style={{
          fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
          color: "white",
          display: "flex",
          fontSize: "calc(18px + 0.5vw)", // Responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Helhetsomfattande expertis
      </h2>
      <p
        style={{
          color: "white",
          display: "flex",
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
          fontSize: "calc(18px + 0.5vw)", // Responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        I flera år har vi stärkt vårt team med en senior ekonom samt en chef för
        hållbarhet, vilka båda berikar vår juridiska expertis genom att
        integrera omvärldsanalys och strategisk utveckling. Hållbarhet är inte
        bara en biprodukt, utan en införlivad komponent i hela vår organisation
        och genomgående i all den rådgivning vi erbjuder. Dessutom har vi
        introducerat MSA Innovation Lab, vår egen affärsenhet dedikerad till
        innovation och digital omvandling.
      </p>
      <HorisontalRule />
      <h2
        style={{
          color: "white",
          display: "flex",
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
          textAlign: "center",
          fontSize: "calc(48px + 0.5vw)", // Exempel på responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Managing Partner har ordet
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: "100vh",
        }}
      >
        <img
          src={managingDirector}
          alt="Managing Director"
          style={{ alignSelf: "center", maxWidth: "100%" }}
        />
      </div>
      <strong
        style={{
          fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
          color: "white",
          display: "flex",
          fontSize: "calc(22px + 0.5vw)", // Responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Jessica Wernberg
      </strong>
      <h3
        style={{
          fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
          color: "white",
          display: "flex",
          fontSize: "calc(22px + 0.5vw)", // Responsiv fontstorlek
          maxWidth: "800px", // Maxbredd för textbehållaren
          lineHeight: "1.6", // Optimal line-height för läsbarhet
          margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
          padding: "10px", // Utrymme runt texten
        }}
      >
        Managing Partner
      </h3>
      <div style={{ flexDirection: "row", textAlign: "left" }}>
        <p
          style={{
            fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
            color: "white",
            display: "flex",
            fontSize: "calc(18px + 0.5vw)", // Responsiv fontstorlek
            maxWidth: "800px", // Maxbredd för textbehållaren
            lineHeight: "1.6", // Optimal line-height för läsbarhet
            margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Vi önskar att vår hemsida ger dig en inblick i Wernberg Advokatbyrå -
          inte bara med avseende på vår expertis och det vi gör, utan även vem
          vi är som team och företag.
        </p>
        <p
          style={{
            fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
            color: "white",
            display: "flex",
            fontSize: "calc(18px + 0.5vw)", // Responsiv fontstorlek
            maxWidth: "800px", // Maxbredd för textbehållaren
            lineHeight: "1.6", // Optimal line-height för läsbarhet
            margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Sedan vår start för 2 år sedan har vi fasthållit en klar ambition: att
          vara den främsta advokatbyrån på vår marknad. Vår strävan är att
          erbjuda rådgivning av högsta möjliga kvalitet, medan vi agerar
          proaktivt och ansvarsfullt gentemot våra klienter, kollegor och
          samhället i stort. Vi aspirerar på att vara mer än bara rådgivare. Vi
          vill inte bara möta förväntningar – vi siktar på att konsekvent
          överträffa dem.
        </p>
        <p
          style={{
            fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
            color: "white",
            display: "flex",
            fontSize: "calc(18px + 0.5vw)", // Responsiv fontstorlek
            maxWidth: "800px", // Maxbredd för textbehållaren
            lineHeight: "1.6", // Optimal line-height för läsbarhet
            margin: "26px auto", // Centrerar behållaren horisontellt med 'auto'
            padding: "10px", // Utrymme runt texten
          }}
        >
          Trots vår relativt korta existens har denna drivkraft alltid varit en
          kärnkomponent i vår verksamhet. Det fyller mig med stolthet att kunna
          fastställa att dessa drivkrafter är lika närvarande och inflytelserika
          idag som när vi först öppnade våra dörrar.
        </p>
      </div>
      <HorisontalRule />
      <Footer />
    </>
  );
}

export default About;
