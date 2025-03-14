"use client";

import React from "react";
import { motion } from "framer-motion";
import OptimizedImage from "../../../components/OptimizedImage";

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-white hover:text-white/90 transition-colors duration-200"
    whileHover={{ x: 2 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-white font-semibold text-md md:text-lg">{title}</h3>
    <div className="flex flex-col gap-2">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href}>
          {link.text}
        </FooterLink>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const footerLinks = {
    marketKit: {
      title: "MarketKit",
      links: [{ href: "#", text: "Nous contacter" }],
    },
    contact: {
      title: "Contact",
      links: [{ href: "#", text: "Prendre rendez-vous" }],
    },
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex flex-col">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <OptimizedImage
                src="/img/sites-vitrines/market-kit/logo-white_transparent.png"
                alt="Market Kit"
                width={72}
                height={72}
                className="w-18 h-18 object-contain"
              />
            </motion.a>
            <p className="text-white/60 text-sm mt-4">Tous droits réservés.</p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-16 lg:gap-24">
            {Object.entries(footerLinks).map(([key, section]) => (
              <FooterColumn
                key={key}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
