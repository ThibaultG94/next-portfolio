import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    { src: "/img/logos/js.png", alt: "JavaScript", width: 64, height: 64 },
    { src: "/img/logos/react.png", alt: "React", width: 86, height: 75 },
    {
      src: "/img/logos/tailwind-css.svg",
      alt: "Tailwind CSS",
      width: 80,
      height: 56,
    },
    { src: "/img/logos/sass.png", alt: "SASS", width: 80, height: 56 },
    { src: "/img/logos/css.png", alt: "CSS3", width: 64, height: 64 },
    { src: "/img/logos/html.png", alt: "HTML5", width: 56, height: 56 },
    { src: "/img/logos/nodejs.png", alt: "Node js", width: 64, height: 64 },
  ];

  // Animation pour le conteneur
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre chaque enfant
      },
    },
  };

  // Animation pour chaque logo
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Animation au survol
  const hoverVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0], // Petit effet de rotation
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3">
      {/* Titre avec animation de fade in */}
      <motion.h2
        className="text-3xl 2xl:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mes Compétences
      </motion.h2>

      {/* Sous-titre avec animation de fade in décalée */}
      <motion.p
        className="text-xl 2xl:text-2xl text-center mt-4 xl:mt-5 2xl:mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        J&apos;aime prendre la responsabilité de créer une expérience
        utilisateur esthétique en utilisant une architecture frontend moderne.
      </motion.p>

      {/* Grille de logos avec animations */}
      <motion.div
        className="mt-8 xl:mt-9 2xl:mt-10 flex flex-wrap justify-around items-center gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.alt}
            className="relative group"
            variants={itemVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            custom={index}
          >
            {/* Logo avec animation au survol */}
            <motion.div variants={hoverVariants} className="relative">
              <Image
                src={skill.src}
                alt={skill.alt}
                width={skill.width}
                height={skill.height}
                className="w-auto h-16"
              />

              {/* Effet de tooltip au survol */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm whitespace-nowrap">
                {skill.alt}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
