"use client";

import React, { useEffect, useRef } from "react";

const TextIntro = () => {
  const blocksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      blocksRef.current.forEach((el, index) => {
        el.style.opacity = getOpacity(el);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set opacity based on initial scroll position
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getOpacity = (element) => {
    if (!element) return 0.1;
    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const screenCenter = window.innerHeight / 2;
    const distanceToCenter = Math.abs(screenCenter - elementCenter);
    const maxDistance = 60; // Adjust this value to control the range of "in focus" area
    return distanceToCenter < maxDistance ? 1 : 0.1;
  };

  return (
    <section className="h-screen max-w-5xl mt-4 mx-auto text-left flex flex-col justify-center bg-dark text-light">
      {[
        "Je suis un développeur web fullstack autodidacte.",
        "Passionné par la création d'expériences utilisateur dynamiques.",
        "Utilisant une architecture frontend moderne et réactive.",
        "Capable de transformer des idées en applications fonctionnelles et élégantes.",
        "Je m'engage à améliorer continuellement mes compétences et à suivre les dernières tendances technologiques.",
      ].map((text, index) => (
        <p
          key={index}
          ref={(el) => (blocksRef.current[index] = el)}
          className="text-5xl mb-6 font-semibold transition-opacity duration-300"
          style={{ opacity: getOpacity(blocksRef.current[index]) }}
        >
          {text}
        </p>
      ))}
    </section>
  );
};

export default TextIntro;
