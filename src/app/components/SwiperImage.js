"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

const SwiperImage = ({
  setShowModal,
  currentImages,
  currentImage,
  projets,
  currentProject,
  swiperRef,
  widthScreen,
  isModal,
}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {currentImages &&
        currentImages.map((currentImage, index) => (
          <SwiperSlide key={index}>
            <Image
              src={currentImages[index]}
              alt={projets[currentProject].title}
              width={widthScreen}
              height={360}
              onClick={() => setShowModal(isModal)}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperImage;
