import React from "react";

const Skills = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3">
      <h2 className="text-3xl text-center">Mes Compétences</h2>
      <p className="text-xl text-center mt-4">
        J'aime prendre la responsabilité de créer une expérience utilisateur
        esthétique en utilisant une architecture frontend moderne.
      </p>
      <div className="mt-8 flex flex-wrap justify-around space-x-4 space-y-2 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-5xl mx-auto">
        <img src="/img/logos/js.png" alt="JavaScript" className="w-16 h-16" />
        <img src="/img/logos/react.png" alt="React" className="w-16 h-14" />
        <img src="/img/logos/next-js.svg" alt="Next.js" className="w-16 h-16" />
        <img src="/img/logos/quasar.svg" alt="Quasarjs" className="w-16 h-16" />
        <img
          src="/img/logos/tailwind-css.svg"
          alt="Tailwind CSS"
          className="w-20 h-14"
        />
        <img src="/img/logos/sass.png" alt="SASS" className="w-20 h-14" />
        <img src="/img/logos/css.png" alt="CSS3" className="w-16 h-16" />
        <img
          src="/img/logos/html.png"
          alt="HTML5"
          className="w-14 h-14 my-auto"
        />
        <img src="/img/logos/nodejs.png" alt="Node js" className="w-16 h-16" />
      </div>
    </section>
  );
};

export default Skills;
