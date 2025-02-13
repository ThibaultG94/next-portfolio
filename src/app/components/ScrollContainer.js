"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const ScrollContext = createContext({
  activeSection: 0,
  scrollToSection: () => {},
  sections: [],
  sectionIds: [],
});

export const useScroll = () => useContext(ScrollContext);

const ScrollContainer = ({ children, sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);
  const touchStartY = useRef(0);
  const mouseStartY = useRef(0);

  const sectionIds = sections.map((section) => section.id);

  const scrollToSection = (indexOrId) => {
    let targetIndex =
      typeof indexOrId === "number" ? indexOrId : sectionIds.indexOf(indexOrId);

    if (
      targetIndex >= 0 &&
      targetIndex < sections.length &&
      !isScrollingRef.current
    ) {
      isScrollingRef.current = true;
      setActiveSection(targetIndex);

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 400); // Délai réduit à 400ms
    }
  };

  const handleTouchStart = (e) => {
    // Check if the touch event is on any interactive element (buttons, links, menu items)
    if (
      e.target.tagName.toLowerCase() === "button" ||
      e.target.tagName.toLowerCase() === "a" ||
      e.target.closest("button") ||
      e.target.closest("a") ||
      e.target.closest('[role="dialog"]') || // For mobile menu
      e.target.closest('[role="navigation"]') // For nav elements
    ) {
      return;
    }

    if (isScrollingRef.current) {
      e.preventDefault();
      return;
    }
    touchStartY.current = e.touches[0].clientY;
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    // Check if the touch event is on any interactive element
    if (
      e.target.tagName.toLowerCase() === "button" ||
      e.target.tagName.toLowerCase() === "a" ||
      e.target.closest("button") ||
      e.target.closest("a") ||
      e.target.closest('[role="dialog"]') || // For mobile menu
      e.target.closest('[role="navigation"]') // For nav elements
    ) {
      return;
    }

    if (isScrollingRef.current) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const currentY = e.touches[0].clientY;
    const diff = touchStartY.current - currentY;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1);
      } else if (diff < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    }
  };

  const handleMouseDown = (e) => {
    if (isScrollingRef.current) return;
    setIsDragging(true);
    mouseStartY.current = e.clientY;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isScrollingRef.current) return;

    const currentY = e.clientY;
    const diff = mouseStartY.current - currentY;
    const threshold = 30;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1);
        setIsDragging(false);
      } else if (diff < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
        setIsDragging(false);
      }
      mouseStartY.current = currentY;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "ns-resize";
  };

  const handleWheel = (e) => {
    if (isScrollingRef.current) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = activeSection + direction;

    if (newIndex >= 0 && newIndex < sections.length) {
      scrollToSection(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Gestion des événements tactiles
    container.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    // Gestion des événements souris
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);

    // Gestion de la molette
    container.addEventListener("wheel", handleWheel, { passive: false });

    // Désinstallation des événements
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, sections.length, isDragging]); // Ajout de isDragging dans les dépendances

  return (
    <ScrollContext.Provider
      value={{ activeSection, scrollToSection, sections, sectionIds }}
    >
      <div
        ref={containerRef}
        className="h-screen overflow-hidden relative select-none"
        style={{ cursor: isDragging ? "grabbing" : "ns-resize" }}
      >
        {children}

        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-4 md:flex">
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
