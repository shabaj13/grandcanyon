import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./React-website/Home";
import Service from "./React-website/Service";
import About from "./React-website/About";
import Contact from "./React-website/Contact";
import Navbar from "./React-website/Navbar";
import Footer from "./React-website/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* for github */}
        <Route path="/grandcanyon" element={<Home />} />
        <Route path="/grandcanyon/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
