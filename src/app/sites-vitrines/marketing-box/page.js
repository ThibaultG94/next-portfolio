"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/Header"));
const Footer = dynamic(() => import("./components/Footer"));
const Hero = dynamic(() => import("./components/Hero"));
const Expertise = dynamic(() => import("./components/Expertise"));
const CTA = dynamic(() => import("./components/CTA"));
const DemoBadge = dynamic(() => import("./components/DemoBadge"));

export default function MarketingBox() {
  useEffect(() => {
    document.body.setAttribute("data-page", "marketing-box");
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="marketing-portfoliobox min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <CTA />
      </main>
      <Footer />
      <DemoBadge />
    </div>
  );
}
