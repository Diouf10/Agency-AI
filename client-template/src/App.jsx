import React from "react";
import config from "./config";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Inject brand colors as CSS variables
const style = document.documentElement.style;
style.setProperty("--color-primary", config.brand.primary);
style.setProperty("--color-secondary", config.brand.secondary);
style.setProperty("--color-accent", config.brand.accent);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
