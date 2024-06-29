// components/Projects.tsx
"use client";

import React, { useState } from "react";

const projets = [
  {
    title: "Task Manager",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    image: "/img/task-manager.png",
    github: "https://github.com/yourusername/figgen",
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
        J'ai contribué à plus de 20 projets allant du développement frontend,
        UI/UX design, Open Source et Motion Graphics.
      </p>
      <div className="mt-12 flex justify-center items-center space-x-4">
        <button
          onClick={prevProject}
          className="text-4xl text-gray-400 hover:text-gray-200 transition duration-300"
        >
          &lt;
        </button>
        <div className="relative w-[355px] h-[200px] md:w-[680px] md:h-[405px] bg-black dark:bg-white p-4 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-x-0 inset-y-1 m-4 overflow-hidden">
            <img
              src={projets[currentProject].image}
              alt={projets[currentProject].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="relative w-[150px] h-[202px] md:w-[300px] md:h-[405px] bg-black dark:bg-white p-4 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 m-4 border-2 border-gray-700 overflow-hidden">
            <div className="h-full flex flex-col bg-white dark:bg-black justify-center items-center p-4 text-center">
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
        </div>
        <button
          onClick={nextProject}
          className="text-4xl text-gray-400 hover:text-gray-200 transition duration-300"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;
