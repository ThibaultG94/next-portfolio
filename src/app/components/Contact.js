import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-dark">
      <h2 className="text-3xl text-center">Contactez-moi</h2>
      <form className="mt-8 max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
          rows="5"
        ></textarea>
        <button type="submit" className="w-full p-2 rounded-lg bg-blue-600">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
