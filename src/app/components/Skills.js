import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3">
      <h2 className="text-3xl 2xl:text-4xl text-center">Mes Compétences</h2>
      <p className="text-xl 2xl:text-2xl text-center mt-4 xl:mt-5 2xl:mt-6">
        J&apos;aime prendre la responsabilité de créer une expérience
        utilisateur esthétique en utilisant une architecture frontend moderne.
      </p>
      <div className="mt-8 xl:mt-9 2xl:mt-10 flex flex-wrap justify-around items-center space-x-4 space-y-2 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-5xl mx-auto">
        <Image
          src="/img/logos/js.png"
          alt="JavaScript"
          width={64}
          height={64}
          className="w-auto h-16"
        />
        <Image
          src="/img/logos/react.png"
          alt="React"
          width={86}
          height={75}
          className="w-auto h-16"
        />
        {/* <Image
          src="/img/logos/next-js.svg"
          alt="Next.js"
          width={64}
          height={64}
          className="w-auto h-6"
        />
        <Image
          src="/img/logos/quasar.svg"
          alt="Quasarjs"
          width={64}
          height={64}
          className="w-auto h-16"
        /> */}
        <Image
          src="/img/logos/tailwind-css.svg"
          alt="Tailwind CSS"
          width={80}
          height={56}
          className="w-auto h-16"
        />
        <Image
          src="/img/logos/sass.png"
          alt="SASS"
          width={80}
          height={56}
          className="w-auto h-16"
        />
        <Image
          src="/img/logos/css.png"
          alt="CSS3"
          width={64}
          height={64}
          className="w-auto h-20"
        />
        <Image
          src="/img/logos/html.png"
          alt="HTML5"
          width={56}
          height={56}
          className="w-auto h-16"
        />
        <Image
          src="/img/logos/nodejs.png"
          alt="Node js"
          width={64}
          height={64}
          className="w-auto h-19"
        />
      </div>
    </section>
  );
};

export default Skills;
