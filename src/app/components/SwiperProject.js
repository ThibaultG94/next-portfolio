"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperImage = ({ listProjects, swiperRef }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {listProjects &&
        listProjects?.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="tablet__content">
              <h3 className="text-2xl font-semibold">{project?.title}</h3>
              <p className="mt-2">{project?.description}</p>
              <a
                href={project?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-500 hover:text-blue-400"
              >
                Voir le site
              </a>
              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:text-blue-400"
              >
                Voir sur GitHub
              </a>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperImage;
