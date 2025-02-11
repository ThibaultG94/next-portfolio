"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const quote = "Créer des expériences web dynamiques et innovantes";

  return (
    <footer className="pt-10 pb-5 sm:pt-12 sm:pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10 px-3 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 - À propos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">À propos</h3>
          <p className="text-gray-600 dark:text-gray-300">{quote}</p>
          <div className="mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/thibault-g-10b37a271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/ThibaultG94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-gray-900 dark:text-gray-100"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Colonne 2 - Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <nav className="space-y-2">
            <a
              href="#dashboard"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Accueil
            </a>
            <a
              href="#projects"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Projets
            </a>
            <a
              href="#skills"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Compétences
            </a>
            <a
              href="#contact"
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Colonne 3 - Technologies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <div className="grid grid-cols-4 gap-4">
            <img src="/img/logos/js.png" alt="JavaScript" className="w-8 h-8" />
            <img src="/img/logos/react.png" alt="React" className="w-8 h-8" />
            <img
              src="/img/logos/next-js.svg"
              alt="Next.js"
              className="w-8 h-8"
            />
            <img
              src="/img/logos/nodejs.png"
              alt="Node.js"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Thibault Guilhem. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
