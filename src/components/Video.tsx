import React from "react";
import Container from "./Container";

/**
 * Visuellt Malmö-inslag: AI-genererad bild (public/media) med mjuk Ken Burns-rörelse.
 * Lägg en egen loop som public/videos/malmo-hero.mp4 om du vill byta till riktig video.
 */
const MALMO_AMBIENT_WEBP = `${process.env.PUBLIC_URL}/media/malmo-ambient-hero.webp`;

function Video() {
  const highlights = [
    {
      title: "Affärsmässiga råd",
      copy:
        "Vi översätter juridik till praktiska beslut som hjälper ledning och ägare att agera snabbare.",
    },
    {
      title: "Närhet till uppdraget",
      copy:
        "Varje uppdrag får ett dedikerat team som följer affären från första fråga till avslutad förhandling.",
    },
    {
      title: "Fokus på risk och tempo",
      copy:
        "Vårt arbetssätt ger tydliga rekommendationer även när tidslinjen är kort och konsekvenserna stora.",
    },
  ];

  return (
    <Container>
      <section className="feature-grid">
        <div className="content-stack">
          <p className="eyebrow">Vår approach</p>
          <h2 className="section-title">
            Lokal närvaro i Malmö, internationell blick i varje uppdrag.
          </h2>
          <p className="copy-block">
            Vi arbetar nära våra klienters vardag, men tänker alltid ett steg
            längre fram. Därför kombinerar vi juridiskt djup med förståelse för
            affär, organisation och förändring.
          </p>
          <ul className="feature-list">
            {highlights.map((highlight) => (
              <li key={highlight.title}>
                <strong>{highlight.title}</strong>
                <span>{highlight.copy}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="video-showcase video-showcase--malmo-ambient"
          aria-label="Stämning från Malmö och Öresundsregionen"
        >
          <div
            className="video-showcase__ambient"
            style={{ backgroundImage: `url(${MALMO_AMBIENT_WEBP})` }}
            aria-hidden="true"
          />
          <div className="video-showcase__overlay">
            <span>Malmö</span>
            <p>Mångfald, möten och möjligheter</p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Video;
