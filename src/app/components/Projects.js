"use client";

import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTheme } from "next-themes";
import ProjectsModal from "./ProjectsModal";
import SwiperImage from "./SwiperImage";

import projets from "../../../public/data/projects.json";

const Projects = () => {
  const laptopSwiperRef = useRef(null);
  const tabletSwiperRef = useRef(null);

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
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
    setCurrentImage(
      (prev) => (prev + 1) % projets[currentProject].images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + projets[currentProject].images.length) %
        projets[currentProject].images.length
    );
  };

  const handlePrevLaptop = () => {
    if (laptopSwiperRef.current) {
      laptopSwiperRef.current.slidePrev();
    }
  };

  const handlePrevTablet = () => {
    if (tabletSwiperRef.current) {
      tabletSwiperRef.current.slidePrev();
    }
  };

  const handleNextLaptop = () => {
    if (laptopSwiperRef.current) {
      laptopSwiperRef.current.slideNext();
    }
  };

  const handleNextTablet = () => {
    if (tabletSwiperRef.current) {
      tabletSwiperRef.current.slideNext();
    }
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
    <section className="py-20 bg-dark text-light">
      <h2 className="text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center font-bold">
        Mes Travaux
      </h2>
      <p className="text-sm xs:text-md lg:text-lg 2xl:text-xl text-center mt-1 2xl:mt-2">
        J&apos;ai développé plusieurs projets fullstack from scratch dont voici
        les principaux.
      </p>
      <div className="mt-0.5 xs:mt-1 sm:mt-2 md:mt-3 lg:mt-4 2xl:mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 scale-90 md:scale-100 lg:scale-75 xl:scale-90 2xl:scale-100">
        {/* Laptop view for larger screens */}
        <div className="hidden lg:block relative">
          <div className="laptop">
            <button
              onClick={handlePrevLaptop}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowLeft />
            </button>
            <div className={`laptop__screen`}>
              <SwiperImage
                setShowModal={setShowModal}
                currentImages={currentImages}
                currentImage={currentImage}
                projets={projets}
                currentProject={currentProject}
                swiperRef={laptopSwiperRef}
                heightScreen={360}
                widthScreen={640}
                isModal={true}
              />
            </div>
            <div className="laptop__bottom">
              <div className="laptop__under"></div>
            </div>
            <div className="laptop__shadow"></div>
            <button
              onClick={handleNextLaptop}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Tablet view for smaller screens */}
        <div className="lg:hidden relative">
          <div className="tablet">
            <button
              onClick={handlePrevTablet}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowLeft />
            </button>
            <div className="tablet__screen">
              <SwiperImage
                setShowModal={setShowModal}
                currentImages={tabletImages}
                currentImage={currentImage}
                projets={projets}
                currentProject={currentProject}
                swiperRef={tabletSwiperRef}
                widthScreen={272}
                heightScreen={360}
                isModal={true}
              />
            </div>
            <button
              onClick={handleNextTablet}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-800 dark:text-gray-400 hover:text-gray-200 transition duration-300 z-10 bg-white rounded-full p-0.5"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        {/* Tablet view for project info */}
        <div className="relative tablet tablet--horizontal">
          <button
            onClick={prevProject}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 hover:text-gray-200 transition duration-300 z-10"
          >
            <FaArrowLeft />
          </button>
          <div className="tablet__screen bg-white dark:bg-black text-black">
            <div className="tablet__content">
              <h3 className="text-xl font-semibold mb-2">
                {projets[currentProject].title}
              </h3>
              <p className="text-sm mb-3">
                {projets[currentProject].description}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={projets[currentProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-sm"
                >
                  Voir le site
                </a>
                <a
                  href={projets[currentProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 text-sm"
                >
                  Voir sur GitHub
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={nextProject}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 hover:text-gray-200 transition duration-300 z-10"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      {showModal && (
        <ProjectsModal
          setShowModal={setShowModal}
          desktopImages={currentImages}
          tabletImages={tabletImages}
          currentProject={currentProject}
        />
      )}
    </section>
  );
};

export default Projects;
