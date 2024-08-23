"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const recaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleCaptchaSubmission = async (token) => {
    try {
      if (token) {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, token }),
        });

        if (response.ok) {
          setIsVerified(true);
          setResponseMessage("Message envoyé avec succès !");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          recaptchaRef.current.reset(); // Réinitialiser reCAPTCHA
        } else {
          const errorData = await response.json();
          setResponseMessage(errorData.error || "Une erreur s'est produite.");
        }
      }
    } catch (error) {
      setIsVerified(false);
      setResponseMessage("Échec de l'envoi du message.");
    }

    setTimeout(() => {
      setResponseMessage("");
    }, 5000);
  };

  const handleChange = (token) => {
    handleCaptchaSubmission(token);
  };

  const handleExpired = () => {
    setIsVerified(false);
  };

  const handleFormChange = (e) => {
    console.log(typeof process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-3">
      <h2 className="text-3xl text-center">Contactez-moi</h2>
      <form
        className="mt-8 max-w-lg mx-auto space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleFormChange}
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFormChange}
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200"
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleFormChange}
          className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200"
          rows="5"
        ></textarea>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          ref={recaptchaRef}
          onChange={handleChange}
          onExpired={handleExpired}
        />
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-blue-300 dark:bg-blue-600"
          disabled={!isVerified}
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
