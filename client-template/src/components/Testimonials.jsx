import React from "react";
import config from "../config";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 justify-center mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: config.brand.primary }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4"
      style={{ backgroundColor: config.brand.secondary }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-white">Ce que disent nos clients</h2>
        <p className="section-subtitle text-gray-300">
          Des centaines de clients satisfaits nous font confiance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map((t, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
              <Stars count={t.rating} />
              <p className="text-gray-200 text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div className="font-semibold text-sm" style={{ color: config.brand.primary }}>
                — {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
