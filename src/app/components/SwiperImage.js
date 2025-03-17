"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import OptimizedImage from "./OptimizedImage";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";

const SwiperImage = ({
  setShowModal,
  currentImages,
  projets,
  currentProject,
  swiperRef,
  widthScreen,
  heightScreen,
  isModal,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]); // Track which images are loaded

  // Adds a tracker state if the Swiper is initialized
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (currentImages) {
      // Reset loaded state when images change
      setIsLoading(true);
      setLoadedImages([]);

      Promise.all(
        currentImages.map((src, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              // Mark this specific image as loaded
              setLoadedImages((prev) => [...prev, index]);
              resolve();
            };
          });
        })
      ).then(() => {
        setIsLoading(false);
        // If Swiper is already initialized, force an update
        if (swiperRef.current) {
          swiperRef.current.update();
          swiperRef.current.loopDestroy();
          swiperRef.current.loopCreate();
        }
      });
    }
  }, [currentImages, swiperRef]);

  // Check if current slide is loaded
  const isCurrentSlideLoaded = loadedImages.includes(currentSlide);

  return (
    <div className="relative" aria-busy={isLoading}>
      <AnimatePresence>
        {(isLoading || !isCurrentSlideLoaded) && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <div className="flex flex-col items-center">
              {/* Spinner animation */}
              <div className="relative w-12 h-12 mb-4">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-t-transparent border-gray-300 dark:border-gray-600"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              {/* Loading text with pulse animation */}
              <motion.p
                className="text-sm text-gray-700 dark:text-gray-300"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Chargement de l'image...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Swiper
        modules={[Navigation, A11y, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        loop={!isLoading && isInitialized}
        speed={500}
        onSwiper={(swiper) => {
          if (swiperRef.current !== swiper) {
            swiperRef.current = swiper;
            // We wait until everything is loaded before initializing
            requestAnimationFrame(() => {
              swiper.update();
              setIsInitialized(true);
            });
          }
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex);
        }}
        watchSlidesProgress={true}
      >
        {currentImages?.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} sur ${currentImages.length}`}
            >
              <motion.div
                initial={{ filter: "blur(10px)", opacity: 0.7 }}
                animate={{
                  filter: loadedImages.includes(index)
                    ? "blur(0px)"
                    : "blur(10px)",
                  opacity: loadedImages.includes(index) ? 1 : 0.7,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <OptimizedImage
                  src={currentImages[index]}
                  alt={`${projets[currentProject].title} - Vue ${index + 1}`}
                  width={widthScreen}
                  height={heightScreen}
                  onClick={() => setShowModal(true)}
                  onTouchStart={() => setShowModal(true)}
                  priority={index === 0}
                  isModal={isModal}
                  className="swiper-slide-image"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress indicator */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-sm"
        aria-live="polite"
      >
        {currentSlide + 1} / {currentImages?.length}
      </div>
    </div>
  );
};

export default SwiperImage;
