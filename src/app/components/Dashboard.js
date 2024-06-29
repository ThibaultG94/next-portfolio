"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { handleSmoothScroll } from "../lib/scrollUtils";

const Dashboard = () => {
  const [text] = useTypewriter({
    words: [
      "Je conçois des expériences utilisateur dynamiques",
      "Je développe des sites web modernes",
      "Je crée des interfaces intuitives",
    ],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-dark text-center text-light">
      <h1 className="text-xl sm:text-2xl md:text-3xl">Bonjour 👋</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 md:mt-3">
        Je suis Thibault Guilhem
      </h2>
      <p className="text-2xl sm:text-3xl md:text-4xl my-4 md:my-5">
        {text}
        <Cursor />
      </p>
      <div className="mt-4 md:mt-5 flex space-x-6">
        <a
          href="https://www.linkedin.com/in/thibault-g-10b37a271/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/ThibaultG94"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-white"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:thibault.guilhem@gmail.com"
          className="text-gray-900 dark:text-gray-100"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
      <div className="absolute bottom-10">
        <a href="#text" onClick={(e) => handleSmoothScroll(e, "text")}>
          <FiChevronDown
            size={50}
            className="animate-bounce text-gray-600 dark:text-gray-300"
          />
        </a>
      </div>
    </section>
  );
};

export default Dashboard;
