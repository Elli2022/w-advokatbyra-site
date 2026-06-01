import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageFallback from "./components/PageFallback";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contacts"));
const Services = lazy(() => import("./pages/Services"));
const Error = lazy(() => import("./pages/Error"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
