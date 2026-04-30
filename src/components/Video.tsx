import React, { useState, useEffect, useRef } from "react";
import BackgroundVideo1 from "../videos/BackgroundVideo1.mp4";
import BackgroundVideo2 from "../videos/BackgroundVideo2.mp4";
import BackgroundVideo3 from "../videos/BackgroundVideo3.mp4";
import BackgroundVideo4 from "../videos/BackgroundVideo4.mp4";
import Container from "./Container";

function Video() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    BackgroundVideo1,
    BackgroundVideo2,
    BackgroundVideo3,
    BackgroundVideo4,
  ];
  const intervalRef = useRef<number | null>(null);
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

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentVideo((videoIndex) => (videoIndex + 1) % videos.length);
    }, 7000);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [videos.length]);

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
        <div className="video-showcase">
          <video
            key={currentVideo}
            className="video-showcase__media"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
