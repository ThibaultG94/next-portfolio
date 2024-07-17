"use client";

import React, { useEffect, useRef, useState } from "react";

const TextIntro = () => {
  const blocksRef = useRef([]);
  const [maxDistance, setMaxDistance] = useState(100);

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
  }, []);

  const getOpacity = (element) => {
    if (!element) return 0.1;
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const screenCenter = window.innerHeight / 2;
    const distanceToCenter = Math.abs(screenCenter - elementCenter);
    return distanceToCenter < maxDistance ? 1 : 0.1;
  };

  return (
    <section className="h-screen pl-10 sm:pl-8 md:pl-6 lg:pl-4 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl mt-10 xxs:mt-20 xs:mt-32 sm:mt-40 md:mt-52 lg:mt-60 mx-auto text-left flex flex-col justify-center bg-dark text-light">
      {[
        "Je suis un développeur web fullstack passionné.",
        "Créant des expériences utilisateur dynamiques.",
        "Utilisant une architecture frontend moderne et réactive.",
      ].map((text, index) => (
        <p
          key={index}
          ref={(el) => (blocksRef.current[index] = el)}
          className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-4 xxs:mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 font-semibold transition-opacity duration-300"
          style={{ opacity: getOpacity(blocksRef.current[index]) }}
        >
          {text}
        </p>
      ))}
    </section>
  );
};

export default TextIntro;
