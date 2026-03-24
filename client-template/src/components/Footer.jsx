import React from "react";
import config from "../config";

export default function Footer() {
  const { business, brand } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 text-center text-sm text-gray-400"
      style={{ backgroundColor: brand.secondary }}>
      <p className="text-white font-semibold mb-1">{business.name}</p>
      <p>{business.address}</p>
      <p className="mt-2">
        © {year} {business.name} — Tous droits réservés
      </p>
    </footer>
  );
}
