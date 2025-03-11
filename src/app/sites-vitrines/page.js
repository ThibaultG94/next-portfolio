"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "..//(portfolio)//main.css";
import Link from "next/link";
import OptimizedImage from "../components/OptimizedImage";
import sitesVitrines from "../../../public/data/vitrines.json";

export default function SitesVitrinesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extract all unique categories
  const allCategories = [
    "all",
    ...new Set(sitesVitrines.flatMap((site) => site.categories || [])),
  ];

  // Filter sites by category
  const filteredSites =
    selectedCategory === "all"
      ? sitesVitrines
      : sitesVitrines.filter((site) =>
          site.categories?.includes(selectedCategory)
        );

  // Animation for container elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for each card
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    document.body.setAttribute("data-page", "portfolio");
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <main id="main-content" className="flex-grow py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Sites Vitrines
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez ma collection de sites vitrines développés pour divers
                secteurs d'activité.
              </p>
            </motion.div>

            {/* Filters by category */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center flex-wrap gap-2 mb-8"
            >
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Site grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredSites.map((site) => (
                <motion.div
                  key={site.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
                >
                  <a
                    href={site.url ? site.url : site.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-grow flex-col"
                  >
                    <div className="relative overflow-hidden">
                      <OptimizedImage
                        src={site.image}
                        alt={site.title}
                        width={307}
                        height={172}
                        className="transition-transform duration-300 scale-105 hover:scale-110"
                      />
                    </div>

                    <div className="p-3 flex flex-col flex-grow">
                      <h2 className="text-lg font-semibold mb-1">
                        {site.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mb-2 line-clamp-2">
                        {site.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {site.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {filteredSites.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-8 text-gray-500 dark:text-gray-400"
              >
                Aucun site ne correspond à cette catégorie.
              </motion.p>
            )}
          </div>
        </main>

        <div className="absolute top-0 left-0 p-4">
          <Link href="/?section=projects">← Retour au portfolio</Link>
        </div>
      </div>
    </>
  );
}
