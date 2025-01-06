"use client";
import { motion } from "framer-motion";

const TextIntro = () => {
  const phrases = [
    "Je suis un développeur web fullstack passionné.",
    "Créant des expériences utilisateur dynamiques.",
    "Utilisant une architecture frontend moderne et réactive.",
  ];

  return (
    <section className="h-screen flex flex-col justify-center px-4">
      {phrases.map((text, index) => (
        <motion.p
          key={index}
          className="text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: index * 0.2 }}
        >
          {text}
        </motion.p>
      ))}
    </section>
  );
};

export default TextIntro;
