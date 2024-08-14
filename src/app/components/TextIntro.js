"use client";

import React, { useEffect, useRef, useState } from "react";

const TextIntro = () => {
  const blocksRef = useRef([]);
  const [maxDistance, setMaxDistance] = useState(100);

  const getOpacity = (element) => {
    if (!element) return 0.1;
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const screenCenter = window.innerHeight / 2;
    const distanceToCenter = Math.abs(screenCenter - elementCenter);
    return distanceToCenter < maxDistance ? 1 : 0.1;
  };

  useEffect(() => {
    const handleScroll = () => {
      blocksRef.current.forEach((el) => {
        el.style.opacity = getOpacity(el);
      });
    };

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setMaxDistance(30); // small screens
      } else if (width < 768) {
        setMaxDistance(75); // medium screens
      } else {
        setMaxDistance(100); // large screens
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll(); // Initial call to set opacity based on initial scroll position
    handleResize(); // Initial call to set maxDistance based on initial screen size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [getOpacity]);

  return (
    <section className="pl-10 sm:pl-8 md:pl-6 lg:pl-4 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto text-left flex flex-col justify-center bg-dark text-light scroll-smooth snap-y snap-mandatory transition">
      {[
        "Je suis un développeur web fullstack passionné.",
        "Créant des expériences utilisateur dynamiques.",
        "Utilisant une architecture frontend moderne et réactive.",
      ].map((text, index) => (
        <p
          key={index}
          ref={(el) => (blocksRef.current[index] = el)}
          className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold transition-opacity duration-300 snap-start"
          style={{ opacity: getOpacity(blocksRef.current[index]) }}
        >
          {text}
        </p>
      ))}
    </section>
  );
};

export default TextIntro;
