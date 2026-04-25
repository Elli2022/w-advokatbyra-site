import { startTransition, useEffect, useEffectEvent, useState } from "react";
import { Link } from "react-router";
import { siteContent } from "../content/siteContent";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function HeroShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const rotateVideo = useEffectEvent(() => {
    startTransition(() => {
      setActiveIndex((current) => (current + 1) % siteContent.heroVideos.length);
    });
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      rotateVideo();
    }, 9000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion, rotateVideo]);

  return (
    <section className="hero-showcase">
      <div className="hero-showcase__media">
        {prefersReducedMotion ? (
          <img
            className="hero-showcase__poster"
            src={siteContent.imagery.hero}
            alt="W Advokatbyrås kontor i Malmö"
          />
        ) : (
          siteContent.heroVideos.map((videoSource, index) => (
            <video
              key={videoSource}
              className={`hero-showcase__video${
                index === activeIndex ? " is-active" : ""
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload={index === 0 ? "auto" : "metadata"}
              aria-hidden="true"
            >
              <source src={videoSource} type="video/mp4" />
            </video>
          ))
        )}
        <div className="hero-showcase__veil" />
      </div>

      <div className="hero-showcase__content">
        <div className="hero-showcase__copy">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="hero-showcase__description">
            {siteContent.hero.description}
          </p>
          <div className="page-hero__actions">
            <Link className="button" to={siteContent.hero.primaryAction.href}>
              {siteContent.hero.primaryAction.label}
            </Link>
            <Link
              className="button button--ghost"
              to={siteContent.hero.secondaryAction.href}
            >
              {siteContent.hero.secondaryAction.label}
            </Link>
          </div>
        </div>

        <div className="hero-showcase__highlights">
          {siteContent.heroHighlights.map((highlight) => (
            <article key={highlight.value} className="hero-highlight">
              <p className="hero-highlight__value">{highlight.value}</p>
              <p className="hero-highlight__label">{highlight.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
