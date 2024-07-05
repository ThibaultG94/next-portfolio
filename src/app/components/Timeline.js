"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const timelineEvents = [
  {
    year: "2022",
    title: "Formation autodidacte Développeur Web",
    description: "",
    image: "/img/timeline/slider-developpeur-web.jpeg",
  },
  {
    year: "2020",
    title: "Monteur Freelance",
    description: "",
    image: "/img/timeline/montage.webp",
  },
  {
    year: "2017",
    title: "Géomètre Topographe",
    description: "",
    image: "/img/timeline/geometre.jpg",
  },
  {
    year: "2015",
    title: "BTS Géomètre Topographe",
    description: "",
    image: "/img/timeline/doriancours.jpg",
  },
  {
    year: "2014",
    title: "BTS Paysagiste",
    description: "",
    image: "/img/timeline/paysagiste.jpg",
  },
  {
    year: "2013",
    title: "Licence MIPI UPMC",
    description: "",
    image: "/img/timeline/upmc.jpg",
  },
  {
    year: "2009",
    title: "Lycée Evariste Galois",
    description: "",
    image: "/img/timeline/evariste.png",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const eventsRefs = useRef([]);
  const timelineRef = useRef(null);

  const handleScroll = () => {
    let found = false;
    for (let i = 0; i < eventsRefs.current.length; i++) {
      const eventElement = eventsRefs.current[i];
      if (eventElement) {
        const rect = eventElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setSelectedYear(timelineEvents[i].year);
          found = true;
          break;
        }
      }
    }
    if (!found) {
      setSelectedYear(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative flex bg-dark py-10 sm:py-12 md:py-16 lg:py-20 px-3"
    >
      <div className="flex-1">
        <h2 className="text-3xl text-center">Mon Parcours</h2>
        <div className="relative mt-8 pl-10">
          <div className="absolute left-12 top-0 bottom-0 h-full w-0.5 bg-black dark:bg-white"></div>
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={(el) => (eventsRefs.current[index] = el)}
              className={`flex items-center mb-20 ${
                selectedYear === event.year ? "text-dark" : "text-gray-400"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-black dark:bg-white"></div>
                {index < timelineEvents.length - 1 && (
                  <div className="flex-grow w-px bg-black dark:bg-white"></div>
                )}
              </div>
              <div className="ml-6">
                <div className="text-4xl font-bold">{event.year}</div>
                <div className="text-lg">{event.title}</div>
              </div>
              {selectedYear === event.year &&
                (index === 0 || index === timelineEvents.length - 1) && (
                  <div className="flex justify-end w-full mr-32">
                    <div className="relative h-full w-[500px]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={500}
                        height={500}
                        objectFit="contain"
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full p-4 rounded-b-lg">
                        <h3 className="text-2xl">{event.title}</h3>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
      {timelineEvents.map((event, index) => (
        <div
          key={index}
          className={`fixed top-1/2 right-0 transform -translate-y-1/2 w-1/2 p-4 ${
            selectedYear === event.year &&
            index !== 0 &&
            index !== timelineEvents.length - 1
              ? "block"
              : "hidden"
          }`}
        >
          <div className="relative h-full w-[500px]">
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={500}
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-[500px] p-4 rounded-b-lg">
              <h3 className="text-2xl">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
