import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useScroll } from "./ScrollContainer";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { scrollToSection } = useScroll();

  useEffect(() => {
    setEmail(process.env.NEXT_PUBLIC_EMAIL || "");
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="flex flex-col justify-end py-20 sm:py-24 md:py-28 lg:py-32 2xl:py-36 max-w-7xl mx-auto">
      <div className="w-full max-w-[90rem] 2xl:max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 2xl:gap-16 p-4 sm:p-6 md:p-8 lg:p-10 2xl:p-12">
        {/* About */}
        <div className="text-center lg:text-left space-y-3 sm:space-y-4 md:space-y-5 2xl:space-y-6">
          <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-semibold">
            À propos
          </h3>
          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300">
            Je développe des sites web modernes en utilisant une architecture
            frontend moderne et réactive.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6 2xl:space-x-8">
            <a
              href="https://www.linkedin.com/in/thibault-g-10b37a271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 2xl:w-8 2xl:h-8" />
            </a>
            <a
              href="https://github.com/ThibaultG94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 2xl:w-8 2xl:h-8" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 2xl:w-8 2xl:h-8" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 2xl:mb-6">
            Navigation
          </h3>
          <nav className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 2xl:space-y-5">
            <a
              href="#dashboard"
              onClick={(e) => handleNavClick(e, "dashboard")}
              className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Accueil
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Projets
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Compétences
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Technologies */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-semibold mb-3 sm:mb-4 md:mb-5 2xl:mb-6">
            Technologies
          </h3>
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 2xl:gap-6 justify-items-center lg:justify-items-start">
            <img
              src="/img/logos/js.png"
              alt="JavaScript"
              className="w-8 sm:w-10 md:w-12 2xl:w-14 h-auto my-auto"
            />
            <img
              src="/img/logos/react.png"
              alt="React"
              className="w-8 sm:w-10 md:w-12 2xl:w-14 h-auto my-auto"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-8 sm:w-10 md:w-12 2xl:w-14 h-auto my-auto fill-black dark:fill-white"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" />
            </svg>
            <img
              src="/img/logos/tailwind-css.svg"
              alt="Tailwind CSS"
              className="w-8 sm:w-10 md:w-12 2xl:w-14 h-auto my-auto"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-1/2 mx-auto mt-6 sm:mt-8 md:mt-10 2xl:mt-12 pt-4 sm:pt-5 md:pt-6 2xl:pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-xs sm:text-sm md:text-base 2xl:text-lg text-gray-500 dark:text-gray-400 py-4">
          © {new Date().getFullYear()} Thibault Guilhem. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
