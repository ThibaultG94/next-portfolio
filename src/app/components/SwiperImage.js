"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules";
import OptimizedImage from "./OptimizedImage";
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

  useEffect(() => {
    if (currentImages) {
      Promise.all(
        currentImages.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          });
        })
      ).then(() => setIsLoading(false));
    }
  }, [currentImages]);

  return (
    <div className="relative" aria-busy={isLoading}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      )}
      <Swiper
        modules={[Navigation, A11y, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSwiper={(swiper) => {
          if (swiperRef.current !== swiper) {
            swiperRef.current = swiper;
            // Force une mise à jour initiale
            swiper.update();
          }
        }}
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        a11y={{
          prevSlideMessage: "Image précédente",
          nextSlideMessage: "Image suivante",
          firstSlideMessage: "Première image",
          lastSlideMessage: "Dernière image",
          paginationBulletMessage: "Aller à l'image {{index}}",
        }}
      >
        {currentImages?.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} sur ${currentImages.length}`}
            >
              <OptimizedImage
                src={currentImages[index]}
                alt={`${projets[currentProject].title} - Vue ${index + 1}`}
                width={widthScreen}
                height={heightScreen}
                onClick={() => isModal && setShowModal(true)}
                priority={index === 0}
                className={`w-full h-auto cursor-${
                  isModal ? "pointer" : "default"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Indicateur de progression */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm"
        aria-live="polite"
      >
        {currentSlide + 1} / {currentImages?.length}
      </div>
    </div>
  );
};

export default SwiperImage;
