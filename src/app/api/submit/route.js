import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();
  const id = await createItem(data);
  return NextResponse.json({ id });
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

  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASSWORD);

  // Configurer le mail
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "Contact Form Submission",
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  };

  // Envoyer le mail
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return "123";
  } catch (error) {
    console.log(error);
    throw new Error("Email not sent");
  }
};
