"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ExpertiseCard = ({ icon, title }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Image
      src={`/img/sites-vitrines/marketing-box/${icon}.png`}
      alt={title}
      width={128}
      height={128}
      className="w-32 h-32 mb-6"
    />
    <h3 className="text-center text-lg font-medium leading-5.5">{title}</h3>
  </motion.div>
);

const WhiteButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    className="inline-block bg-white text-black font-bold px-6 sm:px-8 py-3 rounded-lg text-xl mt-8 w-4/5 sm:w-auto"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const Expertise = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const expertises = [
    { icon: "puzzle", title: "CONSEILS ET STRATÉGIE" },
    { icon: "cursor", title: "CRÉATION SITES WEB & APPLICATIONS" },
    { icon: "hashtag", title: "RÉSEAUX SOCIAUX ET PUBLICITÉS" },
    { icon: "rocket", title: "AUTOMATISATION & PRODUCTIVITÉ" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Nos expertises
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {expertises.map((expertise, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
            >
              <ExpertiseCard {...expertise} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
