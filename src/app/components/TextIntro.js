"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextIntro = ({ texts }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;

      setIsScrolling(true);
      if (e.deltaY > 0) {
        // Scroll down
        if (activeIndex < texts.length - 1) {
          setActiveIndex((prev) => prev + 1);
        }
      } else {
        // Scroll up
        if (activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
        }
      }

      // Scroll debounce
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, texts.length, isScrolling]);

  return (
    <div className="flex items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={activeIndex}
          className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {texts[activeIndex]}
        </motion.p>
      </AnimatePresence>

      {/* Navigation indicators (optional) */}
      <div className="absolute bottom-4 flex space-x-2 justify-center">
        {texts.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex
                ? "bg-gray-800 dark:bg-gray-200"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextIntro;
