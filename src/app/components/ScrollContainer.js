"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

const ScrollContainer = ({ children, sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const isScrollingRef = useRef(false);
  const containerRef = useRef(null);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      isScrollingRef.current = true;
      setActiveSection(index);

      // Smooth scroll
      containerRef.current?.children[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      if (isScrollingRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(activeSection + direction);
    };

    const handleKeyDown = (e) => {
      if (isScrollingRef.current) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };

    // Touch events
    let touchStart = 0;
    let touchEnd = 0;

    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientY();
    };

    const handleTouchMove = (e) => {
      touchEnd = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (isScrollingRef.current) return;

      const swipeDistance = touchStart - touchEnd;
      if (Math.abs(swipeDistance) > 50) {
        const direction = swipeDistance > 0 ? 1 : -1;
        scrollToSection(activeSection + direction);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [activeSection, sections.length]);

  return (
    <ScrollContext.Provider
      value={{
        activeSection,
        setActiveSection,
        totalSections: sections.length,
      }}
    >
      <div ref={containerRef} className="h-screen overflow-hidden relative">
        {/* Progress Bar */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
                ${
                  activeSection === index
                    ? "bg-blue-500 scale-150"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              onClick={() => scrollToSection(index)}
            />
          ))}
        </div>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollContainer;
