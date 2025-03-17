"use client";
import React, { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ScrollContainer, { useScroll } from "../components/ScrollContainer";
import "./main.css";
import Dashboard from "../components/Dashboard";
import TextSection from "../components/TextSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <div className="min-h-[96vh] xs:min-h-[97vh] sm:min-h-[98vh] md:min-h-[99vh] lg:min-h-screen p-2 flex items-center justify-center">
        <Skills />
      </div>
    ),
  },
  {
    id: "contact",
    Component: () => (
      <div className="min-h-[96vh] xs:min-h-[97vh] sm:min-h-[98vh] md:min-h-[99vh] lg:min-h-screen p-3 flex items-center justify-center">
        <Contact />
      </div>
    ),
  },
  {
    id: "footer",
    Component: () => (
      <div className="min-h-[96vh] xs:min-h-[97vh] sm:min-h-[98vh] md:min-h-[99vh] lg:min-h-screen p-3 flex items-center justify-center">
        <Footer />
      </div>
    ),
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

const LoadingSkeleton = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo or image with pulse animation */}
        <div className="w-16 h-16 relative mb-4">
          <motion.div
            className="w-full h-full rounded-full bg-blue-300 dark:bg-blue-600 absolute"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          />
        </div>

        {/* Text with fade animation */}
        <motion.p
          className="text-lg text-gray-800 dark:text-gray-200"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          Chargement...
        </motion.p>
      </motion.div>
    </div>
  );
};

const HomeWithSearchParams = () => {
  const searchParams = useSearchParams();

  return (
    <ScrollContainer sections={baseSections}>
      <HomeContent searchParams={searchParams} />
    </ScrollContainer>
  );
};

const Home = () => {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <HomeWithSearchParams />
    </Suspense>
  );
};

const HomeContent = ({ searchParams }) => {
  const { scrollToSection, sectionIds } = useScroll();
  const router = useRouter();

  useEffect(() => {
    document.body.setAttribute("data-page", "portfolio");
  }, []);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && sectionIds.includes(section)) {
      router.replace("/", { scroll: false });
      setTimeout(() => {
        scrollToSection(section);
      }, 30);
    }
  }, [searchParams, scrollToSection, sectionIds]);

  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex="-1"
        className="h-screen overflow-hidden"
      >
        <MainContent />
      </main>
    </>
  );
};

export default Home;
