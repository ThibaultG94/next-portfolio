"use client";
import React, { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { useScroll } from "./ScrollContainer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [name, setName] = useState("Thibault");

  const context = useScroll();

  const navItems = [
    { href: "#dashboard", label: "Accueil" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");

    if (isOpen) {
      setIsOpen(false);
    }

    // Use scrollToSection for all viewport sizes
    if (typeof context.scrollToSection === "function") {
      try {
        context.scrollToSection(sectionId);
      } catch (error) {
        console.error("Error during scroll:", error);
      }
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

  useEffect(() => {
    setName(process.env.NEXT_PUBLIC_USERNAME || "Thibault");
  }, []);

  return (
    <header
      role="banner"
      className="fixed z-50 w-full transition-transform duration-300 backdrop-blur-md"
    >
      <div className="md:container opacity-100 mx-auto flex justify-between items-center p-4 md:p-2.5 lg:p-3 xl:p-3.5 2xl:p-4">
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden relative">
            <OptimizedImage
              src="/img/profil.webp"
              alt="profil"
              width={100}
              height={100}
              priority
              className="w-12 sm:w-14 md:w-10 lg:w-12 xl:w-13 2xl:w-14"
            />
          </div>
          <span className="hidden md:block text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light text-gray-900 dark:text-gray-100 ml-5 sm:ml-6 md:ml-4 lg:ml-6 2xl:ml-8">
            {name}
          </span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center md:space-x-4 lg:space-x-10 xl:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-2 px-3 rounded-md transition-colors md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Theme toggle and mobile menu button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 rounded-md"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={toggleMenu}
            />

            <div className="relative right-0 top-0 h-screen w-screen bg-white/75 dark:bg-black/75 p-4 backdrop-blur-xs">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 dark:text-gray-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-2 rounded-md"
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
                    className="text-2xl text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-2 px-3 rounded-md transition-colors"
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
