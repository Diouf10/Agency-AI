import React from "react";
import config from "../config";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4" style={{ backgroundColor: config.brand.accent }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title" style={{ color: config.brand.secondary }}>
          Nos Services
        </h2>
        <p className="section-subtitle">
          {config.business.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 text-center group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: config.brand.secondary }}
              >
                {service.title}
              </h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <span
                className="inline-block font-semibold text-sm"
                style={{ color: config.brand.primary }}
              >
                {service.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={config.hero.ctaLink} className="btn-primary">
            Réserver maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
