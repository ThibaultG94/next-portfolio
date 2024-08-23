import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";

export async function POST(req) {
  const data = await req.json();
  const { token, name, email, message } = data;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return NextResponse.json(
      { error: "Token reCAPTCHA manquant." },
      { status: 400 }
    );
  }

  try {
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    if (!recaptchaResponse.data.success) {
      return NextResponse.json(
        { error: "Échec de la validation reCAPTCHA." },
        { status: 400 }
      );
    }

    const id = await createItem({ name, email, message });
    return NextResponse.json({ id });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur interne." },
      { status: 500 }
    );
  }
}

const createItem = async (data) => {
  // Configurer le transporteur
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Configurer le mail
  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission",
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  };

  // Envoyer le mail
  try {
    await transporter.sendMail(mailOptions);
    return "123"; // ID fictif, à remplacer selon votre logique
  } catch (error) {
    throw new Error("Email non envoyé");
  }
};
