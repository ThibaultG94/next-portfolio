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

  // Ajout d'un état pour les dimensions du viewport
  const [viewportDimensions, setViewportDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Fonction pour mettre à jour les dimensions
    const updateDimensions = () => {
      setViewportDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Mise à jour initiale
    updateDimensions();

    // Écouteur pour le redimensionnement
    window.addEventListener("resize", updateDimensions);

    // Nettoyage
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setShowModal]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-300">
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-4 top-4 z-[60] p-2 text-white hover:text-gray-300 transition-colors"
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

        {/* Container modifié pour une meilleure gestion du centrage */}
        <div className="flex items-center justify-center h-screen">
          <div className="relative w-full h-full flex items-center justify-center px-12">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-4 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
              aria-label="Image précédente"
            >
              <FaArrowLeft size={24} />
            </button>

            {/* Conteneur pour SwiperImage avec gestion dynamique de la taille */}
            <div className="max-w-[90vw] max-h-[90vh] w-full">
              <SwiperImage
                setShowModal={setShowModal}
                currentImages={currentImages}
                projets={projets}
                currentProject={currentProject}
                swiperRef={swiperRef}
                widthScreen={viewportDimensions.width * 0.9}
                heightScreen={viewportDimensions.height * 0.9}
                isModal={true}
              />
            </div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-4 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
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
