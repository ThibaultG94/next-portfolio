"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const timelineEvents = [
  {
    year: "2022",
    title: "Formation autodidacte Développeur Web",
    description: "",
    image: "/path/to/formation-image.jpg",
  },
  {
    year: "2020",
    title: "Monteur Freelance",
    description: "",
    image: "/path/to/freelance-image.jpg",
  },
  {
    year: "2017",
    title: "Géomètre Topographe",
    description: "",
    image: "/path/to/topographe-image.jpg",
  },
  {
    year: "2015",
    title: "BTS Géomètre Topographe",
    description: "",
    image: "/path/to/bts-topographe-image.jpg",
  },
  {
    year: "2014",
    title: "BTS Paysagiste",
    description: "",
    image: "/path/to/paysagiste-image.jpg",
  },
  {
    year: "2013",
    title: "Licence MIPI UPMC",
    description: "",
    image: "/path/to/licence-image.jpg",
  },
  {
    year: "2009",
    title: "Lycée Evariste Galois",
    description: "",
    image: "/path/to/lycee-image.jpg",
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(timelineEvents[0].year);
  const eventsRefs = useRef([]);

  const handleScroll = () => {
    for (let i = 0; i < eventsRefs.current.length; i++) {
      const eventElement = eventsRefs.current[i];
      if (eventElement) {
        const rect = eventElement.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setSelectedYear(timelineEvents[i].year);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const selectedEvent = timelineEvents.find(
    (event) => event.year === selectedYear
  );

  return (
    <section className="relative flex bg-dark py-10 sm:py-12 md:py-16 lg:py-20 px-3">
      <div className="flex-1">
        <h2 className="text-3xl text-center">Mon Parcours</h2>
        <div className="relative mt-8 pl-10">
          <div className="absolute left-12 top-0 bottom-0 h-full w-0.5 bg-black dark:bg-white"></div>
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={(el) => (eventsRefs.current[index] = el)}
              className={`flex items-center mb-8 ${
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
                <div className="text-xl font-bold">{event.year}</div>
                <div className="text-lg">{event.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 ml-8 hidden lg:block">
        {selectedEvent && (
          <div className="relative h-full w-full">
            <Image
              src={selectedEvent.image}
              alt={selectedEvent.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full">
              <h3 className="text-2xl">{selectedEvent.title}</h3>
              <p>{selectedEvent.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
