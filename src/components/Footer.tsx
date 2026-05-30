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
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <p
            style={{
              fontFamily: "MonumentGrotesk-Regular,helvetica,arial,sans-serif",
              display: "flex",
              fontSize: "calc(13px + 0.5vw)",
              textAlign: "center",
            }}
          >
            2021-2023 © Wernberg Advokatbyrå AB med säte i Malmö
          </p>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: "none", outline: "none", display: "inline-block" }}
          >
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              style={{ height: "50px", width: "60px", borderRadius: "5px" }}
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: "none", outline: "none", display: "inline-block" }}
          >
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              style={{ height: "50px", width: "50px", borderRadius: "5px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: "none", outline: "none", display: "inline-block" }}
          >
            <img
              src={linkedInIcon}
              alt="LinkedIn Icon"
              style={{ height: "36px", width: "36px", borderRadius: "10px" }}
            />
          </a>
          <Link to="/disclaimer" style={{ color: "grey" }}>
            DISCLAIMER
          </Link>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
