export type NewsItem = {
  category: string;
  description: string;
  id: string;
  image: string;
  publishedAt?: string;
  title: string;
  url?: string;
};

type RawArticle = {
  description?: unknown;
  publishedAt?: unknown;
  sourceName?: unknown;
  title?: unknown;
  url?: unknown;
  urlToImage?: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function asNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function safeUrl(value: unknown) {
  const stringValue = asNonEmptyString(value);

  if (!stringValue) {
    return undefined;
  }

  try {
    return new URL(stringValue).toString();
  } catch {
    return undefined;
  }
}

function parseRawArticle(
  article: RawArticle,
  fallbackImage: string,
  index: number
): NewsItem | null {
  const title = asNonEmptyString(article.title);

  if (!title) {
    return null;
  }

  const url = safeUrl(article.url);
  const publishedAt = asNonEmptyString(article.publishedAt);

  return {
    category: asNonEmptyString(article.sourceName) ?? "Extern bevakning",
    description:
      asNonEmptyString(article.description) ??
      "Kort omvärldsbevakning från det externa nyhetsflödet.",
    id: url ?? `${title}-${index}`,
    image: safeUrl(article.urlToImage) ?? fallbackImage,
    title,
    ...(publishedAt ? { publishedAt } : {}),
    ...(url ? { url } : {}),
  };
}

export function parseNewsPayload(payload: unknown, fallbackImage: string) {
  if (!isRecord(payload) || !Array.isArray(payload.articles)) {
    return [];
  }

  return payload.articles
    .map((article, index) => {
      if (!isRecord(article)) {
        return null;
      }

      return parseRawArticle(article, fallbackImage, index);
    })
    .filter((article): article is NewsItem => article !== null)
    .slice(0, 3);
}

export function formatNewsDate(date?: string) {
  if (!date) {
    return "Kontinuerlig bevakning";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Kontinuerlig bevakning";
  }

  return new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}
