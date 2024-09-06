import { Inter } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";
import "../style/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import preloadLinks from "../../preloadLinks.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thibault Guilhem - Développeur Web",
  description:
    "Développeur React et Node.js créant des expériences web dynamiques et innovantes. Passionné par les technologies de pointe et l'optimisation de l'expérience utilisateur.",
  links: [...preloadLinks],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="text-foreground">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
