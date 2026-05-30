import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Footer from "../components/Footer";

function Contact() {
  console.log("Kontakt");
  return (
    <>
      <Navbar />
      <Title />
      <Banner />
      <div
        style={{
          color: "white",
          fontFamily: "adobe-caslon-pro,times,georgia,serif",
          textAlign: "center",
          fontSize: 28,
        }}
      >
        <p>Kontakt</p>
        <p>Lilla Varvsgatan 21D</p>
        <p>211 76</p>
      </div>
      <Container>
        <p>
          <strong
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              fontFamily: "adobe-caslon-pro,times,georgia,serif",
            }}
          >
            Hitta hit:
          </strong>
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
