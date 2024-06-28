import React from "react";

const Dashboard = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-dark text-white">
      <h1 className="text-5xl">Hello 👋</h1>
      <h2 className="text-3xl mt-4">Je suis Thibault Guilhem</h2>
      <p className="text-xl mt-2">
        Je conçois des expériences utilisateur dynamiques
      </p>
      <div className="mt-4 flex space-x-4">
        <button className="btn-primary">Resume</button>
        <button className="btn-secondary">Let's Talk</button>
      </div>
    </section>
  );
};

export default Dashboard;
