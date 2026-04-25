import {
  createBrowserRouter,
  createMemoryRouter,
  type RouteObject,
} from "react-router";
import App from "./App";
import { PageLoader } from "./components/PageLoader";
import { RouteErrorPage } from "./pages/RouteErrorPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    HydrateFallback: PageLoader,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        lazy: () => import("./pages/HomePage"),
      },
      {
        path: "about",
        lazy: () => import("./pages/AboutPage"),
      },
      {
        path: "services",
        lazy: () => import("./pages/ServicesPage"),
      },
      {
        path: "contact",
        lazy: () => import("./pages/ContactPage"),
      },
      {
        path: "disclaimer",
        lazy: () => import("./pages/DisclaimerPage"),
      },
      {
        path: "*",
        lazy: () => import("./pages/NotFoundPage"),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export function createTestRouter(initialEntries: string[]) {
  return createMemoryRouter(routes, { initialEntries });
}

export default appRouter;
