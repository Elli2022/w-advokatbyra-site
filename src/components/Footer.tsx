import React from "react";
import Container from "./Container";
import instagramIcon from "../images/instagramIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import linkedInIcon from "../images/linkedInIcon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <footer className="footer">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <p
            style={{
              fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
              fontSize: "calc(13px + 0.5vw)",
              textAlign: "center",
              margin: "0px"
            }}
          >
            2021-2023 © W Advokatbyrå AB med säte i Malmö
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center" }}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block" }}
            >
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                style={{ height: "40px", width: "auto", borderRadius: "5px" }}
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block" }}
            >
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                style={{ height: "40px", width: "auto", borderRadius: "5px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block" }}
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn Icon"
                // Minska LinkedIn-ikonens höjd för att göra den mindre än de andra
                style={{ height: "35px", width: "auto", borderRadius: "5px" }}
              />
            </a>
            <Link to="/disclaimer" style={{ color: "grey", alignSelf: "center" }}>DISCLAIMER</Link>
          </div>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
