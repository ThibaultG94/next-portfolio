import React from "react";

const ReseauxSociaux = () => {
  return (
    <section className="py-20 bg-dark">
      <h2 className="text-3xl text-center">
        Suivez-moi sur les réseaux sociaux
      </h2>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/path/to/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/github.png" alt="GitHub" className="w-8 h-8" />
        </a>
        {/* Ajoute d'autres icônes de réseaux sociaux */}
      </div>
    </section>
  );
};

export default ReseauxSociaux;
