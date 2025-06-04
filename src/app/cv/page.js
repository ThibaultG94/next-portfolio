"use client";
import React from "react";
import Link from "next/link";
import CVSection from "./components/CVSection";
// import ExportPDF from "./components/ExportPDF";
import { motion } from "framer-motion";

export default function CVPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Header */}
      <motion.header
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-blue-400">Thibault Guilhem</h1>
        <p className="text-lg text-gray-300 mt-2">
          Développeur React.js | Next.js | Tailwind CSS
        </p>
        <div className="flex justify-center space-x-6 mt-4 text-xl">
          <Link
            href="https://linkedin.com"
            className="text-blue-500 hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com"
            className="text-gray-300 hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="mailto:contact@thibaultguilhem.com"
            className="text-red-500 hover:underline"
          >
            Email
          </Link>
        </div>
      </motion.header>

      {/* Laptop Illustration */}
      <div className="relative w-full flex justify-center mt-10">
        <div className="relative w-64 h-40 bg-gray-700 rounded-lg shadow-lg flex items-center justify-center">
          <span className="text-white text-xl">💻 Mon CV Interactif</span>
        </div>
        {/* Connexions */}
        <div className="absolute top-0 left-1/2 w-32 h-32 border-2 border-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 border-2 border-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-28 h-28 border-2 border-green-400 rounded-full animate-spin"></div>
      </div>

      {/* Sections du CV */}
      <CVSection title="Compétences" icon="🛠️">
        <ul className="grid grid-cols-2 gap-4 mt-4 text-lg">
          <li>React.js / Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js / Express</li>
          <li>TypeScript</li>
        </ul>
      </CVSection>

      <CVSection title="Expériences" icon="💼">
        <ul className="mt-4 text-lg">
          <li>
            <strong>Freelance</strong> – Création de sites vitrines et d’apps
            web (2023 - Présent)
          </li>
          <li>
            <strong>Projet X</strong> – Application React avec Firebase
          </li>
        </ul>
      </CVSection>

      <CVSection title="Formations" icon="🎓">
        <p className="text-lg">
          Autodidacte en Développement Web (React.js, Node.js)
        </p>
      </CVSection>

      <div className="text-center mt-8">{/* <ExportPDF /> */}</div>
    </div>
  );
}
