"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DemoBadge = () => {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    // Récupérer TOUS les éléments avec un fond noir
    const getDarkElements = () => {
      // On sélectionne les sections ET le footer avec fond noir
      const darkSections = Array.from(
        document.querySelectorAll("section, footer")
      ).filter(
        (element) =>
          window.getComputedStyle(element).backgroundColor === "rgb(0, 0, 0)"
      );
      return darkSections;
    };

    const handleScroll = () => {
      // Position du badge (en bas de l'écran - 40px pour sa hauteur)
      const badgePosition = window.scrollY + window.innerHeight - 40;

      // Vérifier si le badge est au-dessus d'un élément noir
      const darkElements = getDarkElements();
      const isOverDarkElement = darkElements.some((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = window.scrollY + rect.bottom;
        return badgePosition >= elementTop && badgePosition <= elementBottom;
      });

      if (isOverDarkElement !== isOverDark) {
        setIsOverDark(isOverDarkElement);
      }
    };

    // Vérification initiale
    handleScroll();

    // Écouter le défilement avec passive: true pour de meilleures performances
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Nettoyer l'écouteur au démontage
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOverDark]); // Dépendance à isOverDark pour éviter les mises à jour inutiles

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <motion.a
        href="https://github.com/ThibaultG94/market-kit-web-showcase"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg 
          backdrop-blur-sm text-sm font-medium
          ${
            isOverDark
              ? "bg-white hover:bg-white/90 text-black"
              : "bg-black/90 hover:bg-black text-white"
          }
          transition-all duration-200
        `}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center gap-1.5">
          <span
            className={`
            w-2 h-2 rounded-full animate-pulse
            ${isOverDark ? "bg-green-600" : "bg-green-400"}
          `}
          />
          Projet d'étude personnel • Non affilié
        </span>
      </motion.a>
    </motion.div>
  );
};

export default DemoBadge;
