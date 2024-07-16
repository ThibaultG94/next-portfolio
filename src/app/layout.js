import { Inter } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";
import "../style/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thibault Guilhem - Développeur Web",
  description:
    "Le portfolio de Thibault Guilhem, un développeur web passionné par les technologies modernes et la création d'expériences utilisateur dynamiques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="text-foreground">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
