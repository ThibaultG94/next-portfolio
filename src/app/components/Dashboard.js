"use client";

import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
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

  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [name, setName] = useState("Thibault");
  const [email, setEmail] = useState("");

  const iconClass =
    "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10";

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > window.innerHeight / 2) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setName(process.env.NEXT_PUBLIC_USERNAME || "Thibault");
    setEmail(process.env.NEXT_PUBLIC_EMAIL || "");
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-dark text-center text-light relative">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Bonjour 👋
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-2 md:mt-4 lg:mt-6 xl:mt-8">
        Je suis {name}
      </h2>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl my-4 md:my-5 lg:my-6 xl:my-8">
        {text}
        <Cursor />
      </p>
      <address className="mt-4 md:mt-5 lg:mt-6 xl:mt-8 flex space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
        {/* <a
          href="https://www.linkedin.com/in/thibault-g-10b37a271/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400"
        >
          <FaLinkedin className={iconClass} />
        </a> */}
        <a
          href="https://github.com/ThibaultG94"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-white"
        >
          <FaGithub className={iconClass} />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-gray-900 dark:text-gray-100"
        >
          <FaEnvelope className={iconClass} />
        </a>
      </address>
      <div id="text"></div>
      <div className="absolute bottom-10">
        {showScrollToTop ? (
          <a href="#top" onClick={scrollToTop}>
            <FiChevronUp
              size={50}
              className="animate-bounce text-gray-600 dark:text-gray-300"
            />
          </a>
        ) : (
          <a href="#text" onClick={(e) => handleSmoothScroll(e, "text")}>
            <FiChevronDown
              size={50}
              className="animate-bounce text-gray-600 dark:text-gray-300"
            />
          </a>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
