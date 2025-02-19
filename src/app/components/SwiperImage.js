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

  // Ajoute un état pour tracker si le Swiper est initialisé
  const [isInitialized, setIsInitialized] = useState(false);

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
      ).then(() => {
        setIsLoading(false);
        // Si le Swiper est déjà initialisé, force une mise à jour
        if (swiperRef.current) {
          swiperRef.current.update();
          swiperRef.current.loopDestroy();
          swiperRef.current.loopCreate();
        }
      });
    }
  }, [currentImages, swiperRef]);

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
        loop={!isLoading && isInitialized}
        speed={500}
        onSwiper={(swiper) => {
          if (swiperRef.current !== swiper) {
            swiperRef.current = swiper;
            // On attend que tout soit chargé avant d'initialiser
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
