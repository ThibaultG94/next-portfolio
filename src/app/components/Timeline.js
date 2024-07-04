import React from "react";

const Timeline = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-dark px-3">
      <h2 className="text-3xl text-center">Mon Parcours</h2>
      <div className="mt-8">
        <div className="flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2022</div>
            <div className="text-xl">Formation autodidate Développeur Web</div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2020</div>
            <div className="text-xl">Monteur Freelance</div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2017</div>
            <div className="text-xl">Géomètre Topographe</div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2015</div>
            <div className="text-xl">BTS Géomètre Topographe</div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2014</div>
            <div className="text-xl">BTS Paysagiste</div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2013</div>
            <div className="text-xl">Licence MIPI UPMC</div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className="h-1 w-4 bg-white"></span>
          <div className="w-full flex justify-between items-center ml-4">
            <div className="text-xl">2009</div>
            <div className="text-xl">Lycée Evariste Galois</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
