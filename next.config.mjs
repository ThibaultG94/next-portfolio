/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
  },
  onDemandEntries: {
    // Désactive les messages de compilation à la demande en production
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Fonction pour filtrer les logs
  logging: {
    fetches: {
      // Ne log pas les fetches d'images en production
      fullUrl: process.env.NEXT_PUBLIC_NODE_ENV === "production" ? false : true,
    },
  },
};

export default nextConfig;
