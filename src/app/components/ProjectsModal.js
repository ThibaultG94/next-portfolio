"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SwiperImage from "./SwiperImage";
import projets from "../../../public/data/projects.json";

export default function ProjectsModal({
  setShowModal,
  desktopImages,
  tabletImages,
  currentProject,
}) {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [deviceType, setDeviceType] = useState("laptop");
  const [displayImages, setDisplayImages] = useState([]);

  useEffect(() => {
    setDisplayImages(deviceType === "laptop" ? desktopImages : tabletImages);
  }, [deviceType, desktopImages, tabletImages]);

  const updateDimensions = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const padding = 32; // 2rem padding on each side

    // Determine device type based on screen width
    if (width >= 1024) {
      setDeviceType("laptop");
    } else if (width >= 768) {
      setDeviceType("tablet");
    } else {
      setDeviceType("mobile");
    }

    if (deviceType === "laptop") {
      // Pour le laptop, on garde le ratio 16:9
      const maxWidth = Math.min(width - padding * 2, 1200);
      const maxHeight = height - padding * 2;
      const heightFromWidth = (maxWidth * 9) / 16;

      if (heightFromWidth > maxHeight) {
        const width = (maxHeight * 16) / 9;
        setDimensions({ width, height: maxHeight });
      } else {
        setDimensions({ width: maxWidth, height: heightFromWidth });
      }
    } else {
      // Pour tablette et mobile, on utilise un ratio 3:4 (vertical)
      const maxHeight = height - padding * 2;
      // La largeur est calculée en fonction de la hauteur pour maintenir le ratio 3:4
      const width = (maxHeight * 3) / 4;

      // Si la largeur est trop grande, on recalcule à partir de la largeur max
      const maxWidth = Math.min(width - padding * 2, width * 0.75);
      if (width > maxWidth) {
        const height = (maxWidth * 4) / 3;
        setDimensions({ width: maxWidth, height });
      } else {
        setDimensions({ width, height: maxHeight });
      }
    }
  }, [deviceType]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [setShowModal]);

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

        <div className="flex items-center justify-center h-screen p-8">
          <div
            ref={containerRef}
            className="relative"
            style={{
              width: dimensions.width,
              height: dimensions.height,
            }}
          >
            <div className={`${deviceType}-modal`}>
              <div className={`${deviceType}-modal__screen`}>
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="absolute left-4 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all transform -translate-y-1/2 top-1/2"
                  aria-label="Image précédente"
                >
                  <FaArrowLeft size={deviceType === "mobile" ? 16 : 24} />
                </button>

                <SwiperImage
                  setShowModal={setShowModal}
                  currentImages={displayImages}
                  projets={projets}
                  currentProject={currentProject}
                  swiperRef={swiperRef}
                  widthScreen={dimensions.width}
                  heightScreen={dimensions.height}
                  isModal={true}
                />

                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="absolute right-4 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all transform -translate-y-1/2 top-1/2"
                  aria-label="Image suivante"
                >
                  <FaArrowRight size={deviceType === "mobile" ? 16 : 24} />
                </button>
              </div>
              {deviceType === "laptop" ? (
                <>
                  <div className="laptop-modal__bottom">
                    <div className="laptop-modal__under"></div>
                  </div>
                  <div className="laptop-modal__shadow"></div>
                </>
              ) : (
                <div className={`${deviceType}-modal__shadow`}></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
