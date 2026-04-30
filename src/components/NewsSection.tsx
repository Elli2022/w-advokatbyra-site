import React, { useEffect, useState } from "react";
import Container from "./Container";

type Article = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  category?: string;
};

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fallbackArticles: Article[] = [
    {
      title: "Avtal som håller även när affären förändras",
      description:
        "Så skapar vi tydliga ramar för kommersiella relationer där både risk och tempo behöver balanseras.",
      category: "Insikt",
    },
    {
      title: "Tre frågor att ställa inför en investering",
      description:
        "En strukturerad juridisk genomgång tidigt i processen sparar både tid och förtroende längre fram.",
      category: "M&A",
    },
    {
      title: "Vad innebär ett starkt compliance-arbete i praktiken?",
      description:
        "Vi tittar på hur policy, uppföljning och kultur kan arbeta tillsammans i ett växande bolag.",
      category: "Compliance",
    },
    {
      title: "Tvister hanteras bäst innan de uppstår",
      description:
        "Genomtänkta processer och rätt dokumentation är ofta det som avgör om en konflikt eskalerar eller löses snabbt.",
      category: "Tvistelösning",
    },
  ];

  useEffect(() => {
    let isMounted = true;

    async function fetchArticles() {
      try {
        const response = await fetch("/.netlify/functions/news-proxy");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (!isMounted) {
          return;
        }

        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles.slice(0, 4));
        } else {
          setError("Inga aktuella artiklar kunde hämtas just nu.");
        }
      } catch (fetchError) {
        if (!isMounted) {
          return;
        }

        setError(
          "Det uppstod ett fel när vi försökte hämta artiklar. Här visar vi i stället några ämnen vi ofta hjälper våra klienter med."
        );
      }
    }

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, []);

  function formatDate(date?: string) {
    if (!date) {
      return "Uppdateras löpande";
    }

    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return new Intl.DateTimeFormat("sv-SE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(parsedDate);
  }

  const itemsToRender = articles.length > 0 ? articles : fallbackArticles;

  return (
    <Container>
      <section className="news-section">
        <div className="content-stack">
          <p className="eyebrow">Aktuellt</p>
          <h2 className="section-title">Nyheter och insikter</h2>
          <p className="copy-block">
            Vi följer utvecklingen inom juridik och näringsliv för att hålla vår
            rådgivning relevant, aktuell och affärsnära.
          </p>
        </div>
        {error ? (
          <div className="notice-card">
            <h3>Nyhetsflödet är tillfälligt otillgängligt</h3>
            <p>{error}</p>
          </div>
        ) : null}
        <div className="news-grid">
          {itemsToRender.map((article, index) => (
            <article
              className="news-card"
              key={article.url ?? article.title ?? index}
            >
              <div className="news-card__media" aria-hidden={!article.urlToImage}>
                {article.urlToImage ? (
                  <img src={article.urlToImage} alt="" />
                ) : (
                  <div className="news-card__fallback">W Advokatbyrå</div>
                )}
              </div>
              <div className="content-stack">
                <p className="news-card__meta">
                  {article.category ?? "Affärsjuridik"} •{" "}
                  {formatDate(article.publishedAt)}
                </p>
                <h3>
                  {article.url ? (
                    <a
                      className="news-card__link"
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.title ?? "Ny artikel"}
                    </a>
                  ) : (
                    article.title ?? "Ny artikel"
                  )}
                </h3>
                <p>
                  {article.description ??
                    "Läs mer om hur vi arbetar med affärsjuridik, riskhantering och kommersiella beslut."}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default NewsSection;
