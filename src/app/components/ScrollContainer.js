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
      }, 250);
    }
  };

  useEffect(() => {
    let scrollTimeout;

    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrollingRef.current) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = activeSection + direction;

      if (newIndex >= 0 && newIndex < sections.length) {
        scrollToSection(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      clearTimeout(scrollTimeout);
    };
  }, [activeSection, sections.length]);

  return (
    <ScrollContext.Provider
      value={{ activeSection, scrollToSection, sections }}
    >
      <div ref={containerRef} className="h-screen overflow-hidden relative">
        {children}

        {/* Navigation arrows avec meilleur positionnement */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-4">
          {activeSection > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
              onClick={() => scrollToSection(activeSection - 1)}
              aria-label="Section précédente"
            >
              <FiChevronUp className="text-white w-6 h-6" />
            </motion.button>
          )}
          {activeSection < sections.length - 1 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
              onClick={() => scrollToSection(activeSection + 1)}
              aria-label="Section suivante"
            >
              <FiChevronDown className="text-white w-6 h-6" />
            </motion.button>
          )}
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollContainer;
