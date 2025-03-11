"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CTAButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#42277e] text-white text-md px-6 py-2.5 lg:text-lg lg:px-8 lg:py-3 rounded-lg font-semibold transition-all"
    whileHover={{
      scale: 1.02,
      transition: { type: "spring", stiffness: 400 },
    }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const PhoneNumber = () => (
  <motion.a
    href="tel:01.23.45.67.89"
    className="flex items-center gap-1 text-lg lg:text-xl text-[#2b2a35] font-medium"
    whileHover={{
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="hidden sm:inline">📲</span>
    01.23.45.67.89
  </motion.a>
);

const Header = () => {
  const headerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50"
    >
      <div className="container mx-auto px-4 xs:px-12 lg:px-22 pt-3 pb-4.5">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            variants={childVariants}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 },
            }}
            className="w-20"
          >
            <Image
              src="/images/marketing-box/logo.png"
              alt="Marketing Box Logo"
              width={80}
              height={80}
              className="w-full h-auto"
            />
          </motion.a>

          {/* Right-hand navigation */}
          <motion.div
            variants={childVariants}
            className="hidden md:flex items-center gap-10"
          >
            <motion.div variants={childVariants}>
              <PhoneNumber />
            </motion.div>
            <motion.div variants={childVariants}>
              <CTAButton href="#contact">Prendre RDV</CTAButton>
            </motion.div>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
