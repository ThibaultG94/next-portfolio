"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

const ScrollContainer = ({ children, sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const isScrollingRef = useRef(false);
  const containerRef = useRef(null);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length && !isScrollingRef.current) {
      isScrollingRef.current = true;
      setActiveSection(index);

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrollingRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = activeSection + direction;

      if (newIndex >= 0 && newIndex < sections.length) {
        e.preventDefault();
        scrollToSection(newIndex);
      }
    };

    const handleKeyDown = (e) => {
      if (isScrollingRef.current) return;

      if (
        (e.key === "ArrowDown" || e.key === "PageDown") &&
        activeSection < sections.length - 1
      ) {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (
        (e.key === "ArrowUp" || e.key === "PageUp") &&
        activeSection > 0
      ) {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeSection, sections.length]);

  return (
    <ScrollContext.Provider
      value={{ activeSection, scrollToSection, sections }}
    >
      <div ref={containerRef} className="h-screen overflow-hidden relative">
        {children}

        {/* Navigation arrows with better positioning and visibility */}
        {activeSection > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => scrollToSection(activeSection - 1)}
          >
            <FiChevronUp
              size={40}
              className="text-gray-600 dark:text-gray-300 animate-bounce"
            />
          </motion.div>
        )}

        {activeSection < sections.length - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => scrollToSection(activeSection + 1)}
          >
            <FiChevronDown
              size={40}
              className="text-gray-600 dark:text-gray-300 animate-bounce"
            />
          </motion.div>
        )}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollContainer;
