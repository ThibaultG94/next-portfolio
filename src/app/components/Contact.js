"use client";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const recaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sitekey, setSitekey] = useState("");

  useEffect(() => {
    setSitekey(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  }, []);

  const handleCaptchaChange = (token) => {
    if (token) {
      setIsVerified(true);
    }
  };

  const handleExpired = () => {
    setIsVerified(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage("Tous les champs doivent être remplis.");
      setIsSuccess(false);
      return false;
    }
    if (!isVerified) {
      setResponseMessage("Veuillez compléter le reCAPTCHA.");
      setIsSuccess(false);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token: recaptchaRef.current.getValue(),
        }),
      });

      if (response.ok) {
        setResponseMessage("Message envoyé avec succès !");
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        recaptchaRef.current.reset();
        setIsVerified(false);
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || "Une erreur s'est produite.");
        setIsSuccess(false);
      }
    } catch (error) {
      setResponseMessage("Échec de l'envoi du message.");
      setIsSuccess(false);
    }

    setIsLoading(false);

    setTimeout(() => {
      setResponseMessage("");
    }, 5000);
  };

  return (
    <div className="flex flex-col justify-between">
      <section className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 px-3">
        <h2 className="text-3xl text-center">Contactez-moi</h2>
        <form
          className="mt-8 max-w-lg mx-auto space-y-4"
          onSubmit={handleSubmit}
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
          {sitekey && (
            <ReCAPTCHA
              sitekey={sitekey}
              ref={recaptchaRef}
              onChange={handleCaptchaChange}
              onExpired={handleExpired}
            />
          )}
          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-blue-300 dark:bg-blue-600"
            disabled={!isVerified || isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Envoyer"
            )}
          </button>
          {responseMessage && (
            <p
              className={`text-center mt-4 ${
                isSuccess ? "text-green-500" : "text-red-500"
              }`}
            >
              {responseMessage}
            </p>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
