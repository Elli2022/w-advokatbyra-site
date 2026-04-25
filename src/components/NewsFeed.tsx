import { useNewsFeed } from "../hooks/useNewsFeed";
import { formatNewsDate } from "../lib/news";

function NewsCardSkeleton() {
  return (
    <article className="news-card news-card--skeleton" aria-hidden="true">
      <div className="news-card__media" />
      <div className="news-card__body">
        <div className="news-card__line news-card__line--short" />
        <div className="news-card__line" />
        <div className="news-card__line" />
      </div>
    </article>
  );
}

export function NewsFeed() {
  const { articles, note, refresh, status } = useNewsFeed();

  return (
    <section className="page-section page-section--accent">
      <div className="news-feed">
        <div className="news-feed__header">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Omvärldsbevakning</p>
            <h2>Aktuella perspektiv inom juridik och affär.</h2>
          </div>
          {status === "fallback" ? (
            <button
              type="button"
              className="button button--ghost"
              onClick={refresh}
            >
              Försök igen
            </button>
          ) : null}
        </div>

        <p className="news-feed__note" aria-live="polite">
          {note}
        </p>

        <div className="news-grid">
          {status === "loading"
            ? Array.from({ length: 3 }, (_, index) => (
                <NewsCardSkeleton key={index} />
              ))
            : articles.map((article) => {
                const content = (
                  <>
                    <div className="news-card__media">
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="news-card__body">
                      <p className="card__kicker">{article.category}</p>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <span className="news-card__meta">
                        {formatNewsDate(article.publishedAt)}
                      </span>
                    </div>
                  </>
                );

                return article.url ? (
                  <a
                    key={article.id}
                    className="news-card"
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <article key={article.id} className="news-card">
                    {content}
                  </article>
                );
              })}
        </div>
      </div>
    </section>
  );
}
