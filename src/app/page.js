"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollContainer, { useScroll } from "./components/ScrollContainer";
import Dashboard from "./components/Dashboard";
import TextSection from "./components/TextSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
import useViewportType from "./hooks/useViewportType";

const introTexts = [
  "Je suis un développeur web fullstack passionné.",
  "Créant des expériences utilisateur dynamiques.",
  "Utilisant une architecture frontend moderne et réactive.",
];

const sections = [
  { id: "dashboard", Component: Dashboard },
  ...introTexts.map((text, index) => ({
    id: `intro-${index}`,
    Component: () => <TextSection text={text} />,
  })),
  { id: "projects", Component: Projects },
  {
    id: "skills",
    Component: () => (
      <div className="h-screen flex items-center justify-center">
        <Skills />
      </div>
    ),
  },
  {
    id: "contact",
    Component: () => (
      <div className="h-screen flex items-center justify-center">
        <Contact />
      </div>
    ),
  },
];

const MainContent = () => {
  return (
    <div className="relative">
      {sections.map(({ id, Component }, index) => (
        <Section key={id} index={index} id={id}>
          <Component />
        </Section>
      ))}
    </div>
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

const MobileSection = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen w-full py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  const viewportType = useViewportType();

  if (viewportType === "desktop") {
    return (
      <ScrollContainer sections={sections}>
        <Header />
        <main id="main-content" tabIndex="-1">
          <MainContent />
        </main>
      </ScrollContainer>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex="-1">
        <div className="overflow-auto">
          {sections.map(({ id, Component }) => (
            <section key={id} id={id} className="min-h-screen w-full py-16">
              <Component />
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
