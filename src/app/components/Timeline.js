import React from "react";

const Timeline = () => {
  return (
    <section className="py-20 bg-dark text-white">
      <h2 className="text-3xl text-center">Mon Parcours</h2>
      <div className="mt-8">
        <div className="flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2023</div>
            <div className="text-xl">Speaker at React India</div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2022</div>
            <div className="text-xl">Started at ABC Corp</div>
          </div>
        </div>
        {/* Ajoute d'autres éléments de la timeline */}
      </div>
    </section>
  );
};

export default Timeline;
