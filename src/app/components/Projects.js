"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";

const projets = [
  {
    title: "Task Manager",
    description:
      "Application de gestion de tâches et de workspace conçue pour être performante et sécurisée.",
    images: [
      "/img/task-manager/01_task-manager-dashboard.webp",
      "/img/task-manager/02_task-manager-dashboard-messagerie.webp",
      "/img/task-manager/03_task-manager-taskspage.webp",
      "/img/task-manager/04_task-manager-taskspage-messagerie.webp",
      "/img/task-manager/05_task-manager-new-task.webp",
      "/img/task-manager/06_task-manager-new-workspace.webp",
      "/img/task-manager/07_task-manager-contacts.webp",
      "/img/task-manager/08_task-manager-new-contact.webp",
      "/img/task-manager/09_task-manager-workspaces.webp",
      "/img/task-manager/10_task-manager-contact.webp",
      "/img/task-manager/11_task-manager-task.webp",
      "/img/task-manager/12_task-manager-messages.webp",
      "/img/task-manager/13_task-manager-notifications.webp",
      "/img/task-manager/14_task-manager-notifications-menu.webp",
      "/img/task-manager/15_task-manager-workspace.webp",
      "/img/task-manager/16_task-manager-invitation-received.webp",
      "/img/task-manager/17_task-manager-invitation-send.webp",
      "/img/task-manager/18_task-manager-home.jpg",
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
    tabletImages: [
      "/img/quasar-blog/thiblog-home-tablet.jpg",
      "/img/quasar-blog/thiblog-tablet.jpg",
      "/img/quasar-blog/thiblog-projects-tablet.jpg",
      "/img/quasar-blog/thiblog-about-tablet.jpg",
    ],
    tabletDarkImages: [
      "/img/quasar-blog/thiblog-home-dark-tablet.jpg",
      "/img/quasar-blog/thiblog-dark-tablet.jpg",
      "/img/quasar-blog/thiblog-projects-dark-tablet.jpg",
      "/img/quasar-blog/thiblog-about-dark-tablet.jpg",
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

  const tabletImages =
    theme === "dark" && projets[currentProject].tabletDarkImages
      ? projets[currentProject].tabletDarkImages
      : projets[currentProject].tabletImages || currentImages;

  return (
    <section className="py-20 mt-0 sm:mt-20 md:mt-40 lg:mt-60 bg-dark text-light">
      <h2 className="text-5xl text-center font-bold">Mes Travaux</h2>
      <p className="text-xl text-center mt-4">
        J&apos;ai développé plusieurs projets fullstack from scratch dont voici
        les principaux.
      </p>
      <div className="mt-12 flex flex-wrap justify-center items-center space-x-4">
        {/* Laptop view for larger screens */}
        <div className="hidden md:block relative">
          <div className="laptop">
            <button
              onClick={prevImage}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowLeft />
            </button>
            <div className={`laptop__screen`}>
              <Image
                src={currentImages[currentImage]}
                alt={projets[currentProject].title}
                width={800}
                height={600}
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
        {/* Tablet view for smaller screens */}
        <div className="md:hidden relative">
          <div className="tablet">
            <button
              onClick={prevImage}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowLeft />
            </button>
            <div className="tablet__screen">
              <Image
                src={tabletImages[currentImage]}
                alt={projets[currentProject].title}
                width={800}
                height={600}
              />
            </div>
            <div className="tablet__shadow"></div>
            <button
              onClick={nextImage}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Tablet view for project info */}
        <div className="relative tablet pt-10 xl:pt-0">
          <button
            onClick={prevProject}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10"
          >
            <FaArrowLeft />
          </button>
          <div className="tablet__screen bg-white dark:bg-black p-8">
            <div className="tablet__content">
              <h3 className="text-2xl font-semibold">
                {projets[currentProject].title}
              </h3>
              <p className="mt-2">{projets[currentProject].description}</p>
              <a
                href={projets[currentProject].url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:text-blue-400"
              >
                Voir le site
              </a>
              <a
                href={projets[currentProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:text-blue-400"
              >
                Voir sur GitHub
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
