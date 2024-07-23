import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3">
      <h2 className="text-3xl text-center">Mes Compétences</h2>
      <p className="text-xl text-center mt-4">
        J&apos;aime prendre la responsabilité de créer une expérience
        utilisateur esthétique en utilisant une architecture frontend moderne.
      </p>
      <div className="mt-8 flex flex-wrap justify-around space-x-4 space-y-2 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-5xl mx-auto">
        <Image
          src="/img/logos/js.png"
          alt="JavaScript"
          width={64}
          height={64}
          className="w-16 h-16"
        />
        <Image
          src="/img/logos/react.png"
          alt="React"
          width={64}
          height={56}
          className="w-16 h-14"
        />
        <Image
          src="/img/logos/next-js.svg"
          alt="Next.js"
          width={64}
          height={64}
          className="w-16 h-16"
        />
        <Image
          src="/img/logos/quasar.svg"
          alt="Quasarjs"
          width={64}
          height={64}
          className="w-16 h-16"
        />
        <Image
          src="/img/logos/tailwind-css.svg"
          alt="Tailwind CSS"
          width={80}
          height={56}
          className="w-20 h-14"
        />
        <Image
          src="/img/logos/sass.png"
          alt="SASS"
          width={80}
          height={56}
          className="w-20 h-14"
        />
        <Image
          src="/img/logos/css.png"
          alt="CSS3"
          width={64}
          height={64}
          className="w-16 h-16"
        />
        <Image
          src="/img/logos/html.png"
          alt="HTML5"
          width={56}
          height={56}
          className="w-14 h-14 my-auto"
        />
        <Image
          src="/img/logos/nodejs.png"
          alt="Node js"
          width={64}
          height={64}
          className="w-16 h-16"
        />
      </div>
    </section>
  );
};

export default Skills;
