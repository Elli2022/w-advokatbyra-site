import { useEffect, useState, type RefObject } from "react";

type Options = {
  rootMargin?: string;
  threshold?: number;
};

/** Kör fetch/tung logik först när elementet närmar sig viewport. */
export function useWhenVisible(
  ref: RefObject<Element | null>,
  { rootMargin = "200px 0px", threshold = 0.01 }: Options = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, isVisible, rootMargin, threshold]);

  return isVisible;
}
