const fs = require("fs");
const path = require("path");
const prettier = require("prettier");

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Liste des pages statiques
const pages = ["", "/projects", "/skills", "/contact"];

// Génère le sitemap XML
async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc");

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const route = page === "" ? "" : page;
          const url = `${siteUrl}${route}`;

          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${page === "" ? "1.0" : "0.8"}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  fs.writeFileSync(
    path.join(process.cwd(), "public", "sitemap.xml"),
    formatted
  );

  // Génère aussi le robots.txt
  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: ${siteUrl}/sitemap.xml
  `;

  fs.writeFileSync(
    path.join(process.cwd(), "public", "robots.txt"),
    robotsTxt.trim()
  );
}

generateSitemap();
