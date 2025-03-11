"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DemoBadge = () => {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    // Retrieve ALL elements with a black background
    const getDarkElements = () => {
      // Select sections AND footer with black background
      const darkSections = Array.from(
        document.querySelectorAll("section, footer")
      ).filter(
        (element) =>
          window.getComputedStyle(element).backgroundColor === "rgb(0, 0, 0)"
      );
      return darkSections;
    };

    const handleScroll = () => {
      const badgePosition = window.scrollY + window.innerHeight - 40;

      // Check if the badge is above a black element
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

    // Initial check
    handleScroll();

    // Listen to scrolling with passive: true for best performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOverDark]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <motion.a
        href="https://github.com/ThibaultG94/marketing-box-web-showcase"
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
          Version Demo • React + Next.js
        </span>
      </motion.a>
    </motion.div>
  );
};

export default DemoBadge;
