"use client";

import React, { useEffect, useRef, useState } from "react";

const TextIntro = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const middle = window.innerHeight / 2;

      // Trouve l'élément le plus proche du centre
      let closest = { distance: Infinity, index: 0 };

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(middle - center);

        if (distance < closest.distance) {
          closest = { distance, index };
        }
      });

      setActiveIndex(closest.index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phrases = [
    "Je suis un développeur web fullstack passionné.",
    "Créant des expériences utilisateur dynamiques.",
    "Utilisant une architecture frontend moderne et réactive.",
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center space-y-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {phrases.map((text, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="flex items-center"
        >
          <p
            className={`
              text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
              font-semibold transition-all duration-500
            `}
            style={{
              opacity: activeIndex === index ? 1 : 0.1,
            }}
          >
            {text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default TextIntro;
