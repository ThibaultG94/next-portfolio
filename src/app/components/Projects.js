"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";

const projets = [
  {
    title: "Task Manager",
    description:
      "Application de gestion de tâches et de workspace conçue pour être performante et sécurisée.",
    images: [
      "/img/task-manager/task-manager-dashboard.png",
      "/img/task-manager/task-manager-home.jpg",
      "/img/task-manager/task-manager-invitation-received.jpg",
      "/img/task-manager/task-manager-invitation-send.jpg",
      "/img/task-manager/task-manager-messagerie.jpg",
      "/img/task-manager/task-manager-new-contact.jpg",
      "/img/task-manager/task-manager-new-task.jpg",
      "/img/task-manager/task-manager-new-workspace.jpg",
      "/img/task-manager/task-manager-taskspage.jpg",
    ],
    github: "https://github.com/ThibaultG94/Task-manager-frontend",
    url: "https://task-manager-front.admin.serv.ndplugins.com/",
  },
  {
    title: "Thiblog",
    description:
      "Blog personnel pour partager mes expériences et mes projets de développeur web. Codé avec Quasar",
    images: [
      "/img/quasar-blog/thiblog-home.jpg",
      "/img/quasar-blog/thiblog.jpg",
      "/img/quasar-blog/thiblog-projects.jpg",
      "/img/quasar-blog/thiblog-about.jpg",
    ],
    darkImages: [
      "/img/quasar-blog/thiblog-home-dark.jpg",
      "/img/quasar-blog/thiblog-dark.jpg",
      "/img/quasar-blog/thiblog-projects-dark.jpg",
      "/img/quasar-blog/thiblog-about-dark.jpg",
    ],
    github: "https://github.com/ThibaultG94/quasar-blog",
    url: "https://github.com/ThibaultG94/quasar-blog",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState("");
  const { theme } = useTheme();

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projets.length);
    setCurrentImage(0); // Reset image index when changing project
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projets.length) % projets.length);
    setCurrentImage(0); // Reset image index when changing project
  };

  const nextImage = () => {
    setDirection("right");
    setCurrentImage(
      (prev) => (prev + 1) % projets[currentProject].images.length
    );
  };

  const prevImage = () => {
    setDirection("left");
    setCurrentImage(
      (prev) =>
        (prev - 1 + projets[currentProject].images.length) %
        projets[currentProject].images.length
    );
  };

  const currentImages =
    theme === "dark" && projets[currentProject].darkImages
      ? projets[currentProject].darkImages
      : projets[currentProject].images;

  return (
    <section className="py-20 bg-dark text-light">
      <h2 className="text-5xl text-center font-bold">Mes Travaux</h2>
      <p className="text-xl text-center mt-4">
        J'ai développé plusieurs projets fullstack from scratch dont voici les
        principaux.
      </p>
      <div className="mt-12 flex justify-center items-center space-x-4">
        <div className="relative">
          <div className="laptop">
            <button
              onClick={prevImage}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowLeft />
            </button>
            <div className={`laptop__screen`}>
              <img
                src={currentImages[currentImage]}
                alt={projets[currentProject].title}
              />
            </div>
            <div className="laptop__bottom">
              <div className="laptop__under"></div>
            </div>
            <div className="laptop__shadow"></div>
            <button
              onClick={nextImage}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="relative tablet">
          <button
            onClick={prevProject}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10"
          >
            <FaArrowLeft />
          </button>
          <div className="tablet__screen bg-white dark:bg-black">
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
              <a
                href={projets[currentProject].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:text-blue-400"
              >
                Voir le site
              </a>
            </div>
          </div>
          <button
            onClick={nextProject}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
