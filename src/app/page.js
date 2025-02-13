"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollContainer, { useScroll } from "./components/ScrollContainer";
import Dashboard from "./components/Dashboard";
import TextSection from "./components/TextSection";
import TextIntro from "./components/TextIntro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
import useViewportType from "./hooks/useViewportType";
import Footer from "./components/Footer";

const introTexts = [
  "Je suis un développeur web fullstack passionné.",
  "Créant des expériences utilisateur dynamiques.",
  "Utilisant une architecture frontend moderne et réactive.",
];

const baseSections = [
  { id: "dashboard", Component: Dashboard },
  {
    id: "intro",
    Component: ({ isDesktop }) =>
      isDesktop ? (
        <>
          {introTexts.map((text, index) => (
            <TextSection key={index} text={text} />
          ))}
        </>
      ) : (
        <TextIntro texts={introTexts} />
      ),
  },
  {
    id: "projects",
    Component: () => (
      <div className="h-screen flex items-center justify-center">
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
    Component: () => (
      <div>
        <Footer />
      </div>
    ),
  },
];

const MainContent = ({ isDesktop }) => {
  return (
    <div className="relative">
      {baseSections.map(({ id, Component }, index) => (
        <Section key={id} index={index} id={id}>
          <Component isDesktop={isDesktop} />
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
      className="w-full py-16"
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
  const isDesktop = viewportType === "desktop";

  if (isDesktop) {
    return (
      <ScrollContainer sections={baseSections}>
        <Header />
        <main id="main-content" tabIndex="-1">
          <MainContent isDesktop={isDesktop} />
        </main>
      </ScrollContainer>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" tabIndex="-1">
        <div className="overflow-hidden">
          {baseSections.map(({ id, Component }) => (
            <MobileSection key={id} id={id}>
              <Component isDesktop={isDesktop} />
            </MobileSection>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
