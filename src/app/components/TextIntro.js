"use client";

import React, { useEffect, useState } from "react";

const TextIntro = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getOpacity = (lineIndex) => {
    const baseOpacity = 0.1;
    const scrollTrigger = lineIndex * 100; // Adjust the multiplier to control the scroll effect
    const opacity = baseOpacity + (scrollY - scrollTrigger) / 200;
    return Math.min(Math.max(opacity, baseOpacity), 1);
  };

  return (
    <section className="h-screen flex flex-col justify-center bg-dark text-center text-light">
      <p className="text-4xl" style={{ opacity: getOpacity(0) }}>
        Je suis un développeur web fullstack autodidacte.
      </p>
      <p className="text-4xl" style={{ opacity: getOpacity(1) }}>
        Passionné par la création d'expériences utilisateur dynamiques.
      </p>
      <p className="text-4xl" style={{ opacity: getOpacity(2) }}>
        Utilisant une architecture frontend moderne et réactive.
      </p>
      <p className="text-4xl" style={{ opacity: getOpacity(3) }}>
        Capable de transformer des idées en applications fonctionnelles et
        élégantes.
      </p>
      <p className="text-4xl" style={{ opacity: getOpacity(4) }}>
        Je m'engage à améliorer continuellement mes compétences et à suivre les
        dernières tendances technologiques.
      </p>
    </section>
  );
};

export default TextIntro;
