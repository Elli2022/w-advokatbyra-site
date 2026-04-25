import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import AppRouter from "./router";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Rot-elementet "#root" hittades inte.');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
