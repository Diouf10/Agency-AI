/**
 * CLIENT CONFIG — Edit this file per client.
 * Run: npm run build → deploy to Vercel
 */
const config = {
  // Business info
  business: {
    name: "Salon Élégance",
    tagline: "Votre beauté, notre passion",
    description:
      "Salon de coiffure au cœur de Paris. Coupes, colorations, soins capillaires pour femmes et hommes.",
    phone: "+33 1 23 45 67 89",
    email: "contact@salon-elegance.fr",
    address: "12 Rue de la Paix, 75001 Paris",
    hours: "Lun–Sam 9h–19h",
  },

  // Brand colors (Tailwind-compatible hex)
  brand: {
    primary: "#C9A96E",   // gold
    secondary: "#1a1a2e", // dark navy
    accent: "#f8f4ef",    // cream background
  },

  // Hero section
  hero: {
    headline: "Révélez votre beauté naturelle",
    subheadline:
      "Coupes tendance, colorations et soins premium. Réservez votre séance dès aujourd'hui.",
    ctaText: "Prendre rendez-vous",
    ctaLink: "https://calendly.com/votre-lien", // or tel: or mailto:
    backgroundImage: "/images/hero.jpg", // put in /public/images/
  },

  // Services (3–6 items)
  services: [
    {
      icon: "✂️",
      title: "Coupe & Coiffage",
      description: "Coupes modernes adaptées à votre morphologie et votre style de vie.",
      price: "À partir de 45€",
    },
    {
      icon: "🎨",
      title: "Coloration",
      description: "Balayages, mèches, couleurs unies. Produits professionnels respectueux.",
      price: "À partir de 65€",
    },
    {
      icon: "💆",
      title: "Soins Capillaires",
      description: "Masques nourrissants, kératine, traitements anti-chute.",
      price: "À partir de 35€",
    },
  ],

  // About section
  about: {
    title: "Notre histoire",
    text: "Depuis 2015, le Salon Élégance accompagne les Parisiens dans leur transformation. Notre équipe de 4 coiffeurs passionnés met son expertise à votre service dans un cadre chaleureux et accueillant.",
    image: "/images/about.jpg",
    stats: [
      { value: "9 ans", label: "d'expérience" },
      { value: "2000+", label: "clients satisfaits" },
      { value: "4.9★", label: "sur Google" },
    ],
  },

  // Testimonials
  testimonials: [
    {
      name: "Marie L.",
      text: "Excellent salon ! Je suis venue pour un balayage et le résultat est parfait. Personnel très professionnel.",
      rating: 5,
    },
    {
      name: "Sophie K.",
      text: "Accueil chaleureux, coupe au top. Je reviendrai sans hésiter !",
      rating: 5,
    },
    {
      name: "Amina B.",
      text: "Enfin un salon qui comprend mes cheveux bouclés. Résultat magnifique.",
      rating: 5,
    },
  ],

  // Footer / social
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    google: "", // Google Maps link
  },

  // Google Maps embed (optional)
  mapsEmbed: "",
};

export default config;
