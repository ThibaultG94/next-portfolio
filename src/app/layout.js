import { Inter } from "next/font/google";
import "../style/app.css";
import "../style/fonts.css";
import preloadLinks from "../../preloadLinks.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${process.env.NEXT_PUBLIC_USERNAME} - Développeur Web`,
  description:
    "Développeur React et Node.js créant des expériences web dynamiques et innovantes. Passionné par les technologies de pointe et l'optimisation de l'expérience utilisateur.",
  links: [...preloadLinks],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="text-foreground" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
