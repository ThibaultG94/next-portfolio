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
      }, 400);
    }
  };

  const handleTouchStart = (e) => {
    if (isScrollingRef.current) {
      e.preventDefault();
      return;
    }
    touchStartY.current = e.touches[0].clientY;
    e.preventDefault(); // Prevent pull-to-refresh
  };

  const handleTouchMove = (e) => {
    if (isScrollingRef.current) {
      e.preventDefault();
      return;
    }

    e.preventDefault(); // Prevent pull-to-refresh
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
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && activeSection < sections.length - 1) {
        scrollToSection(activeSection + 1);
      } else if (diff < 0 && activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
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

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      container.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [activeSection, sections.length]);

  const contextValue = {
    activeSection,
    scrollToSection,
    sections,
    sectionIds,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={`h-screen overflow-hidden relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
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
