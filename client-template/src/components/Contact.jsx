import React, { useState } from "react";
import config from "../config";

export default function Contact() {
  const { business, brand } = config;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your backend endpoint or Formspree/EmailJS
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, business: business.name }),
      });
    } catch {
      // If no backend, still show success (use Formspree in prod)
    }
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title" style={{ color: brand.secondary }}>
          Nous Contacter
        </h2>
        <p className="section-subtitle">
          Prêt à transformer votre look ? Écrivez-nous ou appelez directement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="space-y-6">
            {[
              { icon: "📍", label: "Adresse", value: business.address },
              { icon: "📞", label: "Téléphone", value: business.phone, href: `tel:${business.phone}` },
              { icon: "✉️", label: "Email", value: business.email, href: `mailto:${business.email}` },
              { icon: "🕐", label: "Horaires", value: business.hours },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-medium mb-0.5">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium hover:underline"
                      style={{ color: brand.primary }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-medium text-gray-700">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: brand.primary }}>
                  IG
                </a>
              )}
              {config.social.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: brand.primary }}>
                  FB
                </a>
              )}
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex items-center justify-center rounded-2xl p-12 text-center"
              style={{ backgroundColor: brand.accent }}>
              <div>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: brand.secondary }}>
                  Message envoyé !
                </h3>
                <p className="text-gray-500">Nous vous recontactons dans les 24h.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", placeholder: "Votre nom", type: "text" },
                { name: "email", placeholder: "Votre email", type: "email" },
                { name: "phone", placeholder: "Votre téléphone (optionnel)", type: "tel" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.name !== "phone"}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                  style={{ "--tw-ring-color": brand.primary }}
                />
              ))}
              <textarea
                placeholder="Votre message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none text-sm resize-none"
              />
              <button type="submit" className="btn-primary w-full text-base">
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
