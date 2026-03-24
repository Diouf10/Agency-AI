import React, { useState, useEffect } from "react";
import config from "../config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#about" },
    { label: "Avis", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold" style={{ color: config.brand.primary }}>
          {config.business.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={config.hero.ctaLink}
          className="hidden md:block btn-primary text-sm"
        >
          {config.hero.ctaText}
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-2 text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={config.hero.ctaLink} className="btn-primary block text-center mt-3 text-sm">
            {config.hero.ctaText}
          </a>
        </div>
      )}
    </header>
  );
}
