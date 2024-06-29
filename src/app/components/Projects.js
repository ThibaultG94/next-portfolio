"use client";

import React, { useState } from "react";

const projets = [
  {
    title: "Task Manager",
    description:
      "Application de gestion de tâches et de workspace conçue pour être performante et sécurisée.",
    image: "/img/task-manager.png",
    github: "https://github.com/ThibaultG94/Task-manager-frontend",
  },
  {
    title: "myOKR Website",
    description: "Marketing site for OKR Platform by huminos",
    image: "/path/to/image2.png",
    github: "https://github.com/yourusername/myokr-website",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projets.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projets.length) % projets.length);
  };

  return (
    <section className="py-20 bg-dark text-light">
      <h2 className="text-5xl text-center font-bold">Mes Travaux</h2>
      <p className="text-xl text-center mt-4">
        J'ai développer plusieurs projets fullstack from scratch dont voici les
        principaux.
      </p>
      <div className="mt-12 flex justify-center items-center space-x-4">
        <div className="relative">
          <div className="laptop">
            <div className="laptop__screen">
              <img
                src={projets[currentProject].image}
                alt={projets[currentProject].title}
              />
            </div>
            <div className="laptop__bottom">
              <div className="laptop__under"></div>
            </div>
            <div className="laptop__shadow"></div>
          </div>
        </div>
        <div className="relative tablet">
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-200 transition duration-300 z-10"
          >
            &lt;
          </button>
          <div className="tablet__screen">
            <div className="tablet__content">
              <h3 className="text-2xl font-semibold">
                {projets[currentProject].title}
              </h3>
              <p className="mt-2">{projets[currentProject].description}</p>
              <a
                href={projets[currentProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:text-blue-400"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-gray-400 hover:text-gray-200 transition duration-300 z-10"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
