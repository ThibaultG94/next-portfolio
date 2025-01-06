"use client";
import { motion } from "framer-motion";

const TextSection = ({ text }) => {
  return (
    <div className="h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default TextSection;
