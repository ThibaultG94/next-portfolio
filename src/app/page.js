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
      <section id="home">
        <Dashboard />
      </section>
      <section id="text">
        <TextIntro />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
