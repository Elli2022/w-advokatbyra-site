import React, { useEffect, useState, CSSProperties } from "react";

const API_KEY = "d83b8fc981ee4157944ca434e8a4c295";
const BASE_URL =
  "https://newsapi.org/v2/everything?q=juridik&top-headlines?country=se";

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
  const [gridStyles, setGridStyles] = useState<CSSProperties>(getGridStyles());

  useEffect(() => {
    console.log("Fetching articles...");
    fetchArticles();
  }, []);

  useEffect(() => {
    function handleResize() {
      setGridStyles(getGridStyles());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function fetchArticles() {
    const url = `${BASE_URL}&apiKey=${API_KEY}`;

    fetch(url)
      .then(status)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          setError("Inga artiklar hittades.");
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setError(
          "Det uppstod ett fel när vi försökte hämta artiklar. Försök igen senare."
        );
      });
  }

  function status(res: Response) {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res;
  }

  function getGridStyles(): CSSProperties {
    const width = window.innerWidth;
    let columns = "repeat(auto-fill, minmax(400px, 1fr))";

    if (width > 1200) {
      columns = "repeat(4, 1fr)";
    } else if (width > 550) {
      columns = "repeat(2, 1fr)";
    } else {
      columns = "repeat(1, 1fr)";
    }

    return {
      display: "grid",
      gap: "20px",
      gridTemplateColumns: columns,
      justifyContent: "center",
    };
  }

  return (
    <div className="wrapper">
      <h2
        className="section-title"
        style={{
          color: "white",
          fontFamily: "Caslon224Std-Book,times,georgia,serif",
          fontWeight: 300,
          lineHeight: 1.2,
          fontSize: "34px",
          padding: "21px",
          textAlign: "center",
        }}
      >
        Nyheter
      </h2>
      <div className="news-section" style={{ padding: "20px" }}>
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="news-grid" style={gridStyles}>
            {articles.map((article, index) => (
              <div
                className="news-card"
                key={article.url ?? index}
                style={newsCardStyles}
              >
                <img
                  src={article.urlToImage ?? "fallback-image-url-här"}
                  alt={article.title}
                  style={imageStyles}
                />
                <h2 style={{ margin: "10px 0", fontSize: "20px" }}>
                  <a
                    href={article.url ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title ?? "NYHETER"}
                  </a>
                </h2>
                <p style={{ margin: 0 }}>
                  {article.category ?? "Okategoriserad"} •{" "}
                  {article.publishedAt ?? "datum"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const newsCardStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "400px",
  backgroundColor: "black",
  padding: "20px",
  boxSizing: "border-box",
  margin: "40px 0px 0px",
  fontFamily: "Caslon224Std-Book,times,georgia,serif",
  color: "white",
  fontSize: "calc(18px + 0.5vw)",

  lineHeight: "1.6",
};

const imageStyles: CSSProperties = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

export default NewsSection;
