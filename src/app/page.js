import React from "react";
import Dashboard from "./components/Dashboard";
import TextIntro from "./components/TextIntro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <TextIntro />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
};

export default Home;