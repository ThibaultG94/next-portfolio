import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ReseauxSociaux = () => {
  return (
    <footer className="pt-10 pb-5 sm:pt-12 sm:pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-10 px-3">
      <h2 className="text-3xl text-center">
        Suivez-moi sur les réseaux sociaux
      </h2>
      <div className="mt-8 flex justify-center space-x-6">
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
          href="mailto:contact@thibaultguilhem.com"
          className="text-gray-900 dark:text-gray-100"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </footer>
  );
};

export default ReseauxSociaux;
