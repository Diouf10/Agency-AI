import React from "react";
import config from "../config";

export default function Hero() {
  const { hero, business } = config;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{ backgroundColor: config.brand.secondary }}
    >
      {/* Background image with overlay */}
      {hero.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
      )}

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{ backgroundColor: config.brand.primary, color: "#fff" }}
        >
          {business.name}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {hero.headline}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto">
          {hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={hero.ctaLink} className="btn-primary text-base px-10 py-4">
            {hero.ctaText}
          </a>
          <a
            href="#services"
            className="inline-block px-10 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
          >
            Nos services
          </a>
        </div>

        {/* Quick info bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
          <span>📍 {business.address}</span>
          <span>📞 {business.phone}</span>
          <span>🕐 {business.hours}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
