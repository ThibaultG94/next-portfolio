"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";

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
      "/img/quasar-blog/quasar-blog.jpg",
      "/img/quasar-blog/quasar-blog-projects.jpg",
      "/img/quasar-blog/quasar-blog-about.jpg",
    ],
    github: "https://github.com/ThibaultG94/quasar-blog",
    url: "https://github.com/ThibaultG94/quasar-blog",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 15,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
    }
  }, [currentProject, emblaApi]);

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
        J'ai développé plusieurs projets fullstack from scratch dont voici les
        principaux.
      </p>
      <div className="mt-12 flex justify-center items-center space-x-4">
        <div className="relative">
          <div className="laptop">
            {emblaApi && emblaApi.canScrollPrev() && (
              <button
                onClick={() => emblaApi.scrollPrev()}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-10 z-10 bg-white rounded-full p-0.5"
              >
                <FaArrowLeft />
              </button>
            )}
            <div className="overflow-hidden laptop__screen" ref={emblaRef}>
              <div className="flex">
                {projets[currentProject].images.map((image, index) => (
                  <div
                    className={`min-w-full relative z-0 ${
                      index === 0
                        ? "ml-0 mr-6"
                        : index === projets[currentProject].images.length - 1
                        ? "ml-6 mr-0"
                        : "ml-6 mr-6"
                    }`}
                    key={index}
                  >
                    <img src={image} alt={projets[currentProject].title} />
                  </div>
                ))}
              </div>
            </div>
            <div className="laptop__bottom">
              <div className="laptop__under"></div>
            </div>
            <div className="laptop__shadow"></div>
            {emblaApi && emblaApi.canScrollNext() && (
              <button
                onClick={() => emblaApi.scrollNext()}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
              >
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>
        <div className="relative tablet">
          {currentProject > 0 && (
            <button
              onClick={prevProject}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10"
            >
              <FaArrowLeft />
            </button>
          )}
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
          {currentProject < projets.length - 1 && (
            <button
              onClick={nextProject}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10"
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
