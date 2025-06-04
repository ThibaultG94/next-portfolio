"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CVSection({ title, children, icon }) {
  return (
    <motion.section
      className="my-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center space-x-3 border-b-2 border-gray-300 pb-2">
        {icon && <span className="text-3xl">{icon}</span>}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          {title}
        </h2>
      </div>
      <div className="mt-4">{children}</div>
    </motion.section>
  );
}
