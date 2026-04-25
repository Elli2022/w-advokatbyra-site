const NEWS_ENDPOINT = "https://newsapi.org/v2/everything";
const NEWS_QUERY = "juridik OR affärsjuridik OR advokatbyrå OR legal";

const defaultHeaders = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=0, s-maxage=900, stale-while-revalidate=3600",
  "Content-Type": "application/json",
};

function jsonResponse(statusCode, payload) {
  return {
    statusCode,
    headers: defaultHeaders,
    body: JSON.stringify(payload),
  };
}

function asNonEmptyString(value) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function safeUrl(value) {
  const candidate = asNonEmptyString(value);

  if (!candidate) {
    return undefined;
  }

  try {
    return new URL(candidate).toString();
  } catch {
    return undefined;
  }
}

function normalizeArticle(article) {
  const title = asNonEmptyString(article.title);

  if (!title) {
    return null;
  }

  return {
    description: asNonEmptyString(article.description),
    publishedAt: asNonEmptyString(article.publishedAt),
    sourceName: asNonEmptyString(article.source?.name),
    title,
    url: safeUrl(article.url),
    urlToImage: safeUrl(article.urlToImage),
  };
}

async function safeJson(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}

exports.handler = async function handler() {
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return jsonResponse(200, {
      articles: [],
      message: "NEWS_API_KEY är inte konfigurerad.",
      source: "fallback",
    });
  }

  const params = new URLSearchParams({
    pageSize: "6",
    q: NEWS_QUERY,
    searchIn: "title,description",
    sortBy: "publishedAt",
  });

  try {
    const response = await fetch(`${NEWS_ENDPOINT}?${params.toString()}`, {
      headers: {
        "X-Api-Key": apiKey,
      },
      signal: AbortSignal.timeout(8000),
    });

    const payload = await safeJson(response);

    if (!response.ok) {
      return jsonResponse(response.status, {
        articles: [],
        message:
          asNonEmptyString(payload.message) ??
          "Det gick inte att hämta nyheter just nu.",
        source: "upstream-error",
      });
    }

    const articles = Array.isArray(payload.articles)
      ? payload.articles
          .map(normalizeArticle)
          .filter(Boolean)
          .slice(0, 3)
      : [];

    return jsonResponse(200, {
      articles,
      source: "newsapi",
    });
  } catch {
    return jsonResponse(200, {
      articles: [],
      message: "Det externa nyhetsflödet kunde inte nås.",
      source: "fallback",
    });
  }
};
