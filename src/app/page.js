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
import Footer from "./components/Footer";

const introTexts = [
  "Je suis un développeur web fullstack passionné.",
  "Créant des expériences utilisateur dynamiques.",
  "Utilisant une architecture frontend moderne et réactive.",
];

const baseSections = [
  {
    id: "dashboard",
    Component: () => (
      <div className="min-h-[85vh] sm:min-h-[90vh] md:min-h-[95vh] lg:min-h-screen flex items-center justify-center">
        <Dashboard />
      </div>
    ),
  },
  ...introTexts.map((text, index) => ({
    id: `intro-${index}`,
    Component: () => <TextSection text={text} />,
  })),
  {
    id: "projects",
    Component: () => (
      <div className="p-2 flex items-center justify-center">
        <Projects />
      </div>
    ),
  },
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
  {
    id: "footer",
    Component: Footer,
  },
];

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

const MainContent = () => {
  return (
    <div className="relative">
      {baseSections.map(({ id, Component }, index) => (
        <Section key={id} index={index} id={id}>
          <Component />
        </Section>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <ScrollContainer sections={baseSections}>
      <Header />
      <main
        id="main-content"
        tabIndex="-1"
        className="h-screen overflow-hidden"
      >
        <MainContent />
      </main>
    </ScrollContainer>
  );
};

export default Home;
