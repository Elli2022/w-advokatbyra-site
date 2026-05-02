import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "./Container";

/** Krymp och leverera WebP via proxy — nyhets-URL:er är ofta megapixel-stora. */
function newsThumbSources(originalUrl: string): {
  src: string;
  srcSet?: string;
  sizes: string;
} {
  const trimmed = originalUrl.trim();
  if (!/^https?:\/\//i.test(trimmed)) {
    return {
      src: trimmed,
      sizes: "(max-width: 767px) 100vw, (max-width: 991px) 50vw, 23vw",
    };
  }

  const enc = encodeURIComponent(trimmed);
  const base = `https://wsrv.nl/?url=${enc}&fit=cover&q=82&output=webp`;
  return {
    src: `${base}&w=720&h=540`,
    srcSet: `${base}&w=480&h=360 480w, ${base}&w=720&h=540 720w, ${base}&w=960&h=720 960w`,
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 50vw, 23vw",
  };
}

function NewsArticleThumb({ url }: { url: string }) {
  const optimized = useMemo(() => newsThumbSources(url), [url]);
  const [src, setSrc] = useState(optimized.src);
  const [loaded, setLoaded] = useState(false);
  const triedOriginal = useRef(false);

  useEffect(() => {
    setSrc(optimized.src);
    setLoaded(false);
    triedOriginal.current = false;
  }, [url, optimized.src]);

  return (
    <img
      src={src}
      {...(optimized.srcSet
        ? { srcSet: optimized.srcSet, sizes: optimized.sizes }
        : { sizes: optimized.sizes })}
      alt=""
      loading="lazy"
      decoding="async"
      width={720}
      height={540}
      className={
        loaded ? "news-card__thumb news-card__thumb--loaded" : "news-card__thumb"
      }
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (!triedOriginal.current && url && src !== url) {
          triedOriginal.current = true;
          setSrc(url);
        }
      }}
    />
  );
}

type Article = {
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  category?: string;
  source?: { name?: string };
};

function isHttpImageUrl(url: string | undefined): boolean {
  if (!url || typeof url !== "string") {
    return false;
  }
  const u = url.trim();
  return /^https?:\/\//i.test(u);
}

/** Prioriterar artiklar med giltig bild-URL så kort inte fastnar på “W Advokatbyrå”. */
function pickDisplayArticles(list: Article[], max: number): Article[] {
  const titled = list.filter((a) => a.title && String(a.title).trim().length > 0);
  const withImg = titled.filter((a) => isHttpImageUrl(a.urlToImage));
  const withoutImg = titled.filter((a) => !isHttpImageUrl(a.urlToImage));
  const merged = [...withImg, ...withoutImg];
  const seen = new Set<string>();
  const unique: Article[] = [];
  for (const a of merged) {
    const key = (a.url ?? a.title ?? "").trim();
    if (!key || seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(a);
    if (unique.length >= max) {
      break;
    }
  }
  return unique.slice(0, max);
}

type LoadState = "loading" | "success" | "error";

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("loading");
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
    const ac = new AbortController();
    const retryDelaysMs = [0, 750, 1600];

    async function loadArticles() {
      setLoadState("loading");
      setError(null);

      for (let attempt = 0; attempt < retryDelaysMs.length; attempt++) {
        if (ac.signal.aborted) {
          return;
        }
        if (retryDelaysMs[attempt] > 0) {
          await new Promise((r) => setTimeout(r, retryDelaysMs[attempt]));
        }
        if (ac.signal.aborted) {
          return;
        }

        try {
          const response = await fetch("/.netlify/functions/news-proxy", {
            signal: ac.signal,
            headers: { Accept: "application/json" },
            cache: "no-store",
          });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const data = (await response.json()) as {
            articles?: Article[];
            status?: string;
            message?: string;
          };

          if (ac.signal.aborted) {
            return;
          }

          const raw = data.articles;
          if (!Array.isArray(raw) || raw.length === 0) {
            throw new Error("Inga artiklar i svar");
          }

          const picked = pickDisplayArticles(raw, 4);
          if (picked.length === 0) {
            throw new Error("Tomt urval");
          }

          setArticles(picked);
          setLoadState("success");
          return;
        } catch {
          if (ac.signal.aborted) {
            return;
          }
          if (attempt === retryDelaysMs.length - 1) {
            setArticles([]);
            setLoadState("error");
            setError(
              "Det uppstod ett fel när vi försökte hämta artiklar. Här visar vi i stället några ämnen vi ofta hjälper våra klienter med."
            );
          }
        }
      }
    }

    void loadArticles();

    return () => ac.abort();
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

  const itemsToRender = loadState === "success" ? articles : fallbackArticles;

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
          {loadState === "loading"
            ? Array.from({ length: 4 }).map((_, index) => (
                <article
                  className="news-card news-card--skeleton"
                  key={`news-skeleton-${index}`}
                  aria-busy="true"
                  aria-label="Laddar nyhet"
                >
                  <div className="news-card__media" />
                  <div className="content-stack">
                    <span className="news-card__skeleton-line news-card__skeleton-line--short" />
                    <span className="news-card__skeleton-line news-card__skeleton-line--title" />
                    <span className="news-card__skeleton-line" />
                    <span className="news-card__skeleton-line" />
                  </div>
                </article>
              ))
            : itemsToRender.map((article, index) => (
                <article
                  className="news-card"
                  key={article.url ?? article.title ?? index}
                >
                  <div
                    className="news-card__media"
                    aria-hidden={!article.urlToImage}
                  >
                    {article.urlToImage && isHttpImageUrl(article.urlToImage) ? (
                      <NewsArticleThumb url={article.urlToImage} />
                    ) : (
                      <div className="news-card__fallback">W Advokatbyrå</div>
                    )}
                  </div>
                  <div className="content-stack">
                    <p className="news-card__meta">
                      {article.category ??
                        article.source?.name ??
                        "Affärsjuridik"}{" "}
                      • {formatDate(article.publishedAt)}
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
