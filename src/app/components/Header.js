"use client";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 mr-3.5 sm:mr-4 md:mr-5 lg:mr-6 rounded-full overflow-hidden relative">
          <Image
            src="/img/profil.jpg"
            alt="profil"
            width={80}
            height={111}
            className="absolute top-0 left-0 transform translate-y-[-4px]"
          />
        </div>
        <span className="text-sm sm:text-md md:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100">
          Thibault Guilhem
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-4">
        <a
          href="#home"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Accueil
        </a>
        <a
          href="#projects"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Projets
        </a>
        <a
          href="#skills"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Compétences
        </a>
        <a
          href="#timeline"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Timeline
        </a>
        <a
          href="#contact"
          className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
        >
          Contact
        </a>
        <ThemeToggle />
      </nav>
      <div className="md:hidden flex items-center">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 dark:text-gray-200 focus:outline-none ml-2"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white bg-opacity-90 dark:bg-gray-800 p-4">
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 focus:outline-none"
              >
                <X className="h-6 w-6" />
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
              <a
                href="#timeline"
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                Timeline
              </a>
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
  );
};

export default Header;
