import React from "react";

const Skills = () => {
  return (
    <section className="py-20 bg-dark">
      <h2 className="text-3xl text-center">Mes Compétences</h2>
      <p className="text-xl text-center mt-4">
        J'aime prendre la responsabilité de créer une expérience utilisateur
        esthétique en utilisant une architecture frontend moderne.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <img src="/path/to/js.png" alt="JavaScript" className="w-16 h-16" />
        <img src="/path/to/react.png" alt="React" className="w-16 h-16" />
        <img src="/path/to/next.png" alt="Next.js" className="w-16 h-16" />
        {/* Ajoute d'autres icônes selon les compétences */}
      </div>
    </section>
  );
};

export default Skills;
