"use client";

import React from "react";
import ScrollContainer from "./components/ScrollContainer";
import Dashboard from "./components/Dashboard";
import TextIntro from "./components/TextIntro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { useScroll } from "./components/ScrollContainer";

const sections = [
  { id: "dashboard", Component: Dashboard },
  { id: "text-intro", Component: TextIntro },
  { id: "projects", Component: Projects },
  { id: "skills", Component: Skills },
  // { id: "timeline", Component: Timeline },
  { id: "contact", Component: Contact },
];

const Home = () => {
  return (
    <ScrollContainer sections={sections}>
      <div className="relative">
        {sections.map(({ id, Component }, index) => (
          <Section key={id} index={index}>
            <Component />
          </Section>
        ))}
      </div>
    </ScrollContainer>
  );
};

const Section = ({ children, index }) => {
  const { activeSection } = useScroll();

  return (
    <motion.div
      className="absolute w-full min-h-screen"
      initial={{ opacity: 0, y: "100vh" }}
      animate={{
        opacity: activeSection === index ? 1 : 0,
        y: `${(index - activeSection) * 100}vh`,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Home;
