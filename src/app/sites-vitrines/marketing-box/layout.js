import { Inter } from "next/font/google";
import "./marketing-box.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketing Box - Version Démonstration",
  description:
    "[DEMO] Mettez le Digital et la Tech au service de votre business. Version de démonstration.",
};

export default function MarketingBoxLayout({ children }) {
  return (
    <div className="marketing-box-layout font-poppins min-h-screen bg-white">
      {children}
    </div>
  );
}
