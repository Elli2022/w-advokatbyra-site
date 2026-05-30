import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contacts";
import Services from "./pages/Services";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
