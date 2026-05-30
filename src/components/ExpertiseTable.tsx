import React from "react";

function Expertis() {
  const verksamhetsomraden = [
    "Arbetsrätt och pensioner",
    "Bank och finans",
    "Contentious Regulatory",
    "Corporate Commercial",
    "Corporate Investigations and Corporate Crime",
    "Corporate Sustainability and Risk Management",
    "Data Privacy",
    "Emerging and Growth Companies",
    "Entreprenadrätt",
    "EU- och konkurrensrätt",
    "Fastighetsrätt",
    "Finansiell reglering",
    "Fonder och investeringar",
    "Företagsbeskattning",
  ];

  const branscher = [
    "Construction, Infrastructure and Industrial Projects",
    "Energi",
    "Fastighet",
    "Finansiella institutioner",
    "Fintech",
    "Fordonsindustri",
    "Healthcare and Life Sciences",
    "Media och underhållning",
    "Private Equity",
    "Shipping, Transport and Logistics",
    "Technology",
    "Sustainability and ESG",
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between", // Ändrade till space-between
    alignItems: "center",
    padding: "0 16px", // Tillagt för att ge sidopadding på små skärmar
  };

  const tableStyle = {
    maxWidth: "400px", // Lägg till en max-width
    width: "100%",
    fontSize: "calc(12px + 0.5vw)",
    margin: window.innerWidth > 400 ? "50px auto" : "50px 16px 0px",
    color: "white",
    padding: "10px",
  };

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Verksamhetsområden</th>
            <th>Branscher</th>
          </tr>
        </thead>
        <tbody>
          {verksamhetsomraden.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>{branscher[index] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Expertis;
