const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const name = process.env.NEXT_PUBLIC_USERNAME || "Thibault";

const defaultSEOConfig = {
  title: `${name} - Développeur Web Fullstack`,
  titleTemplate: `%s | ${name}`,
  defaultTitle: `${name} - Développeur Web Fullstack React & Node.js`,
  description:
    "Développeur React et Node.js créant des expériences web dynamiques et innovantes.",
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: `${name} Portfolio`,
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${name} - Développeur Web Fullstack`,
      },
    ],
  },
  //   twitter: {
  //     handle: "@votrehandle",
  //     site: "@votresite",
  //     cardType: "summary_large_image",
  //   },
  additionalMetaTags: [
    {
      name: "author",
      content: name,
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

// Helper pour générer les URLs canoniques
export const createCanonicalUrl = (path = "") => {
  const canonicalUrl = path ? `${siteUrl}${path}` : siteUrl;
  return canonicalUrl.replace(/\/+$/, "");
};

export default defaultSEOConfig;
