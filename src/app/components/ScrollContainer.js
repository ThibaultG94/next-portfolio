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
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (container) container.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, sections.length]);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      <div ref={containerRef} className="h-screen overflow-hidden">
        {children}
      </div>
    </ScrollContext.Provider>
  );
};

export default ScrollContainer;
