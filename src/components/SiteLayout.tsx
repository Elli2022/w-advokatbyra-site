import { useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useMatches,
  useNavigation,
} from "react-router";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type RouteHandle = {
  title?: string;
};

export function SiteLayout() {
  const matches = useMatches();
  const navigation = useNavigation();

  useEffect(() => {
    const matchWithTitle = [...matches].reverse().find((match) => {
      const handle = match.handle as RouteHandle | undefined;
      return Boolean(handle?.title);
    });
    const routeTitle = (matchWithTitle?.handle as RouteHandle | undefined)?.title;

    document.title = routeTitle
      ? `${routeTitle} | W Advokatbyrå`
      : "W Advokatbyrå";
  }, [matches]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Hoppa till innehåll
      </a>
      <SiteHeader />
      <div
        className={`route-progress${
          navigation.state !== "idle" ? " is-visible" : ""
        }`}
        aria-hidden="true"
      />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  );
}
