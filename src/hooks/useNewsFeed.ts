import { startTransition, useEffect, useState } from "react";
import { siteContent } from "../content/siteContent";
import { parseNewsPayload, type NewsItem } from "../lib/news";

type NewsFeedStatus = "loading" | "ready" | "fallback";

type NewsFeedState = {
  articles: NewsItem[];
  note: string;
  status: NewsFeedStatus;
};

const NEWS_ENDPOINT = import.meta.env.VITE_NEWS_ENDPOINT ?? "/api/news";

function createFallbackState(note?: string): NewsFeedState {
  return {
    articles: siteContent.fallbackInsights,
    note:
      note ??
      "Det externa nyhetsflödet är tillfälligt otillgängligt. Vi visar vårt eget urval under tiden.",
    status: "fallback",
  };
}

export function useNewsFeed() {
  const [refreshToken, setRefreshToken] = useState(0);
  const [state, setState] = useState<NewsFeedState>({
    articles: [],
    note: "Hämtar aktuell juridisk omvärldsbevakning...",
    status: "loading",
  });

  useEffect(() => {
    const abortController = new AbortController();

    async function loadNews() {
      startTransition(() => {
        setState((current) => ({
          ...current,
          status: "loading",
          note: "Hämtar aktuell juridisk omvärldsbevakning...",
        }));
      });

      try {
        const response = await fetch(NEWS_ENDPOINT, {
          headers: {
            Accept: "application/json",
          },
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Nyhetsflödet svarade med ${response.status}.`);
        }

        const payload = (await response.json()) as unknown;
        const articles = parseNewsPayload(payload, siteContent.imagery.hero);

        if (articles.length === 0) {
          throw new Error("Inga artiklar kunde tolkas från svaret.");
        }

        startTransition(() => {
          setState({
            articles,
            note: "Senaste externa bevakningen med fokus på juridik och affär.",
            status: "ready",
          });
        });
      } catch (error) {
        if (abortController.signal.aborted) {
          return;
        }

        if (error instanceof Error) {
          console.warn("Nyhetsflödet föll tillbaka till intern bevakning:", error);
        }

        startTransition(() => {
          setState(createFallbackState());
        });
      }
    }

    void loadNews();

    return () => {
      abortController.abort();
    };
  }, [refreshToken]);

  return {
    ...state,
    refresh: () => {
      setRefreshToken((current) => current + 1);
    },
  };
}
