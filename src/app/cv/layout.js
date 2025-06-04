import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CV - Thibault Guilhem",
  description:
    "CV interactif de Thibault Guilhem - Développeur React & Next.js",
};

export default function CVLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <main className="max-w-4xl mx-auto py-10 px-5">{children}</main>
      </body>
    </html>
  );
}
