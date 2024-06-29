import React from "react";

const projets = [
  {
    title: "FigGen - Figma to Code converter",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    image: "/path/to/image1.png",
  },
  {
    title: "myOKR Website",
    description: "Marketing site for OKR Platform by huminos",
    image: "/path/to/image2.png",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-dark">
      <h2 className="text-3xl text-center">Mes Travaux</h2>
      <p className="text-xl text-center mt-4">
        J'ai contribué à plus de 20 projets allant du développement frontend,
        UI/UX design, Open Source et Motion Graphics.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projets.map((projet, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <img
              src={projet.image}
              alt={projet.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-2xl mt-4">{projet.title}</h3>
            <p className="mt-2">{projet.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
