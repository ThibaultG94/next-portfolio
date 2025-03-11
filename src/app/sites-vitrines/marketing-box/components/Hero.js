"use client";

import { motion } from "framer-motion";

const ActionButton = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center bg-black text-white px-0 sm:px-12 py-4 rounded-lg text-xl font-semibold hover:opacity-90 w-4/5 sm:w-auto"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1.1, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-[482px] pt-29 overflow-hidden">
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
        style={{
          background:
            'url("/images/marketing-box/hero-bg.webp") center 0% / cover no-repeat',
        }}
      />

      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            className="text-center max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold pb-6 sm:pb-10 mb-2 leading-11 md:leading-13"
              variants={itemVariants}
            >
              <motion.span className="inline-block" variants={itemVariants}>
                Mettez le Digital et la Tech au service
              </motion.span>
              <br />
              <motion.span className="inline-block" variants={itemVariants}>
                de vos équipes et de votre business.
              </motion.span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ActionButton href="#contact">J'ai un projet 🤚🏼</ActionButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
