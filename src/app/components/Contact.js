"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setResponseMessage("Message sent successfully!");
    } else {
      setResponseMessage(response.error || "An error occurred.");
    }
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3">
      <h2 className="text-3xl text-center">Contactez-moi</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200"
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-blue-300 dark:bg-blue-600"
        >
          Envoyer
        </button>
        {responseMessage && (
          <p className="text-center mt-4">{responseMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
