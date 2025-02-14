"use client";
import { motion } from "framer-motion";

const TextSection = ({ text }) => {
  return (
    <div className="h-screen flex items-center justify-center px-10 sm:px-12 md:px-14 lg:px-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-center"
      >
        {text}
      </motion.p>
    </div>
  );
};

export default TextSection;
