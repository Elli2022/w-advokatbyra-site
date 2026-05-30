import React from "react";
import Navbar from "../components/Navbar";
// import Title from "../components/Title";
import Banner from "../components/Banner";
// import Container from "../components/Container";
import Footer from "../components/Footer";

function Disclaimer() {
  return (
    <>
      <Navbar />
      <Banner />
      <div>
        <h2
          style={{
            fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
            color: "white",
            // display: "flex",
            fontSize: "calc(18px + 0.5vw)",
            maxWidth: "800px",
            lineHeight: "1.6",
            margin: "26px auto",
            padding: "10px",
          }}
        >
          Friskrivning
        </h2>
        <p
          style={{
            color: "white",
            // display: "flex",
            fontFamily: "adobe-caslon-pro,times,georgia,serif",
            fontSize: "calc(18px + 0.5vw)",
            maxWidth: "800px",
            lineHeight: "1.6",
            margin: "26px auto",
            padding: "10px",
          }}
        >
          Information som publiceras på Wernberg Advokatbyrå AB:s hemsida är
          endast avsedd som allmän information och utgör inte, och ska heller
          inte användas som, professionell juridisk rådgivning. Det finns risk
          att innehållet inte är uttömmande eller fullständigt uppdaterat.
          Eventuell användning av informationen på denna hemsida sker på
          användarens egen risk. Wernberg Advokatbyrå AB ansvarar inte för, och
          har inga förpliktelser i förhållande till, information på Wernberg
          Advokatbyrå AB:s hemsida eller information på annan hemsida med länk
          till eller från Wernberg Advokatbyrå AB:s hemsida.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Disclaimer;
