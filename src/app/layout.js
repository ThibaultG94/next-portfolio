import { Inter } from "next/font/google";
import "../style/app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thibault Guilhem - Développeur Web",
  description:
    "Le portfolio de Thibault Guilhem, un développeur web passionné par les technologies modernes et la création d'expériences utilisateur dynamiques.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
