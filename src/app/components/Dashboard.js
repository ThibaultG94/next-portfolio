"use client";
import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Dashboard = () => {
  const [text] = useTypewriter({
    words: [
      "Je développe des sites web modernes",
      "Je conçois des expériences utilisateur dynamiques",
      "Je créer des interfaces intuitives",
    ],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });

  const [name, setName] = useState("Thibault");
  const [email, setEmail] = useState("");

  const iconClass = "w-6 h-auto md:w-7 lg:w-8 xl:w-9 2xl:w-10";

  useEffect(() => {
    setName(process.env.NEXT_PUBLIC_USERNAME || "Thibault");
    setEmail(process.env.NEXT_PUBLIC_EMAIL || "");
  }, []);

  return (
    <section className="h-full flex flex-col justify-between items-center bg-dark text-light relative px-6">
      <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
        Bonjour 👋
      </h1>
      <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-5 sm:mt-6 md:mt-7 xl:mt-8 2xl:mt-9 3xl:mt-10">
        Je suis {name}
      </h2>
      <p className="text-center h-28 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl my-6 sm:my-7 md:my-8 xl:my-9 2xl:my-10">
        {text}
        <Cursor />
      </p>
      <address className="mt-6 md:mt-7 lg:mt-8 xl:mt-9 2xl:mt-10 flex space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
        <a
          href="https://www.linkedin.com/in/thibault-g-10b37a271/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400"
        >
          <FaLinkedin className={iconClass} />
        </a>
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
    </section>
  );
};

export default Dashboard;
