import { Inter } from "next/font/google";
import "./market-kit.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Market Kit - Version Démonstration",
  description:
    "[DEMO] Mettez le Digital et la Tech au service de votre business. Version de démonstration.",
};

export default function MarketKitLayout({ children }) {
  return (
    <div className="market-kit-layout font-poppins min-h-screen bg-white">
      {children}
    </div>
  );
}
