"use client";
import React, { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { useScroll } from "./ScrollContainer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);
  const [name, setName] = useState("Thibault");

  const context = useScroll();

  const navItems = [
    { href: "#dashboard", label: "Accueil" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = async (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");

    if (typeof context.scrollToSection !== "function") {
      console.error("scrollToSection n'est pas une fonction !", context);
      return;
    }

    try {
      context.scrollToSection(sectionId);
    } catch (error) {
      console.error("Erreur lors du scroll:", error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      menuRef.current?.querySelector("a")?.focus();
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  useEffect(() => {
    setName(process.env.NEXT_PUBLIC_USERNAME || "Thibault");
  }, []);

  return (
    <header
      role="banner"
      className={`fixed z-50 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container opacity-100 mx-auto flex justify-between items-center p-1 lg:p-2 xl:p-3 2xl:p-4 bg-white dark:bg-[#121212]">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden relative">
            <OptimizedImage
              src="/img/profil.webp"
              alt="profil"
              width={100}
              height={100}
              priority
              className="w-10 h-auto sm:w-11 md:w-12 lg:w-14 xl:w-16 2xl:w-20"
            />
          </div>
          <span className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-gray-100 ml-3.5 sm:ml-4 md:ml-5 lg:ml-6">
            {name}
          </span>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center md:space-x-4 lg:space-x-10 xl:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-2 px-3 rounded-md transition-colors md:text-md lg:text-lg xl:text-xl font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Theme toggle et bouton menu mobile */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 rounded-md"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
          >
            <div className="right-0 top-0 h-screen w-screen bg-white bg-opacity-90 dark:bg-[#121212] p-4">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 rounded-md"
                  aria-label="Fermer le menu"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="flex flex-col items-center mt-10 space-y-6 text-2xl">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-2xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-2 px-3 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
