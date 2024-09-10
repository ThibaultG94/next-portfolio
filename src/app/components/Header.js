"use client";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { handleSmoothScroll } from "../lib/scrollUtils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the header
        setIsVisible(false);
      } else {
        // if scroll up show the header
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY); // remember current page position
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY, controlHeader]);

  return (
    <header
      className={`fixed z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container opacity-100 mx-auto flex justify-between items-center p-4 bg-white dark:bg-[#121212]">
        <div className="flex items-center">
          <div className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 mr-3.5 sm:mr-4 md:mr-5 lg:mr-6 rounded-full overflow-hidden relative">
            <Image
              src="/img/profil.webp"
              alt="profil"
              width={100}
              height={100}
              priority
            />
          </div>
          <span className="text-sm sm:text-md md:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100">
            Thibault Guilhem
          </span>
        </div>
        <nav className="hidden md:flex items-center md:space-x-4 lg:space-x-10 md:text-md lg:text-lg font-semibold">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Accueil
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Projets
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "skills")}
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Compétences
          </a>
          {/* <a
            href="#timeline"
            onClick={(e) => handleSmoothScroll(e, "timeline")}
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Parcours
          </a> */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
          >
            Contact
          </a>
        </nav>
        <div className=" flex items-center">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none ml-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 md:hidden">
            <div className="right-0 top-0 h-screen w-screen bg-white bg-opacity-90 dark:bg-[#121212] p-4">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 focus:outline-none"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="flex flex-col items-center mt-10 space-y-6 text-2xl">
                <a
                  href="#home"
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Accueil
                </a>
                <a
                  href="#projects"
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Projets
                </a>
                <a
                  href="#skills"
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Compétences
                </a>
                {/* <a
                  href="#timeline"
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Parcours
                </a> */}
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
