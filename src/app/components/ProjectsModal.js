"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SwiperImage from "./SwiperImage";
import projets from "../../../public/data/projects.json";

export default function ProjectsModal({
  showModal,
  setShowModal,
  currentImages,
  currentProject,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef(null);

  // Gestion de l'échap pour fermer le modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setShowModal]);

  // Bloquer le scroll quand le modal est ouvert
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-300">
        {/* Overlay pour fermer en cliquant en dehors */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => setShowModal(false)}
        />

        {/* Bouton fermer */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-4 top-4 z-50 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Fermer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Container image */}
        <div className="flex items-center justify-center h-full p-4">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* Contrôles de navigation */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
              aria-label="Image précédente"
            >
              <FaArrowLeft size={24} />
            </button>

            <SwiperImage
              setShowModal={setShowModal}
              currentImages={currentImages}
              projets={projets}
              currentProject={currentProject}
              swiperRef={swiperRef}
              widthScreen={1920}
              heightScreen={1080}
              isModal={true}
            />

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
              aria-label="Image suivante"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
