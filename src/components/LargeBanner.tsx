import React from "react";
import lawFirmBanner from "../images/lawFirmBanner.jpg";
// import TextInsideBanner from "./TextInsideBanner";
import { Link } from "react-router-dom";

function LargeBanner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={lawFirmBanner}
        alt="Stor bannerbild"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "left",
          backgroundColor: "rgba(0, 0, 0, 0)", // Lätt genomskinlig svart bakgrund för att förbättra textläsbarheten
        }}
      >
        <h2
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            color: "white",
            position: "relative",
            // top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "left",
            fontFamily: "Caslon224Std-Book,times,georgia,serif",
            fontWeight: 300,
            lineHeight: 1.2,
            fontSize: "34px",
          }}
        >
          Välkommen till Wernberg
        </h2>
        <div
          className="föräldrarelement"
          style={{ backgroundColor: "transparent" }}
        >
          <Link to="/about" className="buttonStyle">
            Om oss
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LargeBanner;
