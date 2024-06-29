// components/Dashboard.tsx
"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Dashboard = () => {
  const [text] = useTypewriter({
    words: [
      "Je conçois des expériences utilisateur dynamiques",
      "Je développe des sites web modernes",
      "Je crée des interfaces intuitives",
    ],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 1000,
  });

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-dark text-light">
      <h1 className="text-5xl">Bonjour 👋</h1>
      <h2 className="text-3xl mt-4">Je suis Thibault Guilhem</h2>
      <p className="text-2xl my-2">
        {text}
        <Cursor />
      </p>
      <div>Mes réseaux</div>
      <div className="mt-4 flex space-x-4">
        <button className="btn-primary">CV</button>
        <button className="btn-secondary">Contactez-moi</button>
      </div>
    </section>
  );
};

export default Dashboard;
