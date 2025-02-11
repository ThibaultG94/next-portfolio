"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(process.env.NEXT_PUBLIC_EMAIL || "");
  }, []);

  return (
    <footer className="min-h-screen flex flex-col justify-end items-center dark:bg-gray-900 py-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-6">À propos</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Je développe des sites web modernes en utilisant une architecture
            frontend moderne et réactive.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/thibault-g-10b37a271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/ThibaultG94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-6">Navigation</h3>
          <nav className="flex flex-col space-y-4">
            <a
              href="#dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Projets
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Compétences
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Technologies */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-6">Technologies</h3>
          <div className="flex justify-center md:justify-start items-center space-x-8">
            <img
              src="/img/logos/js.png"
              alt="JavaScript"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/img/logos/react.png"
              alt="React"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/img/logos/next-js.svg"
              alt="Next.js"
              className="w-10 h-10 object-contain"
            />
            <img
              src="/img/logos/nodejs.png"
              alt="Node.js"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-3/4 mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Thibault Guilhem. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
