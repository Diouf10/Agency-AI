import React from "react";
import config from "../config";

export default function About() {
  const { about, brand } = config;

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            {about.image ? (
              <img
                src={about.image}
                alt="À propos"
                className="rounded-2xl w-full h-80 object-cover shadow-lg"
              />
            ) : (
              <div
                className="rounded-2xl w-full h-80 flex items-center justify-center text-6xl"
                style={{ backgroundColor: brand.accent }}
              >
                🏢
              </div>
            )}
            {/* Floating card */}
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 text-center"
              style={{ borderLeft: `4px solid ${brand.primary}` }}
            >
              <div className="text-2xl font-bold" style={{ color: brand.primary }}>
                ★ {config.about.stats.find(s => s.label.includes("Google"))?.value || "4.9"}
              </div>
              <div className="text-xs text-gray-500">Note Google</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: brand.secondary }}>
              {about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{about.text}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {about.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: brand.primary }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href={config.hero.ctaLink}
              className="btn-primary mt-8 inline-block"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
