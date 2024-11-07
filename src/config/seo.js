const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thibaultguilhem.com";

const defaultSEOConfig = {
  title: "Thibault Guilhem - Développeur Web Fullstack",
  titleTemplate: "%s | Thibault Guilhem",
  defaultTitle: "Thibault Guilhem - Développeur Web Fullstack React & Node.js",
  description:
    "Développeur React et Node.js créant des expériences web dynamiques et innovantes.",
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Thibault Guilhem Portfolio",
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Thibault Guilhem - Développeur Web Fullstack",
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
      content: "Thibault Guilhem",
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
