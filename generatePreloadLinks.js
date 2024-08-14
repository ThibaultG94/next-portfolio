const fs = require("fs");
const path = require("path");

function generatePreloadLinks(directory) {
  const imagesDir = path.join(process.cwd(), directory);
  const files = fs.readdirSync(imagesDir);

  return files.map((file) => ({
    rel: "preload",
    href: `/img/${directory}/${file}`,
    as: "image",
    type: "image/webp",
  }));
}

const preloadLinks = [
  ...generatePreloadLinks("public/img/task-manager"),
  ...generatePreloadLinks("public/img/task-manager/tablet"),
  ...generatePreloadLinks("public/img/quasar-blog"),
  ...generatePreloadLinks("public/img/quasar-blog/tablet"),
];

fs.writeFileSync("preloadLinks.json", JSON.stringify(preloadLinks, null, 2));
