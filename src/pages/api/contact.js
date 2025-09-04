// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password (not Gmail password)
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`, // your Gmail
      to: "nandabhavesh2003@gmail.com", // your inbox
      replyTo: email, // ✅ user’s email (when you click reply, it goes to them)
      subject: `Contact Form: ${subject}`,
      html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "N/A"}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
    `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Message sent successfully! We will reply to you on mail as soon as possible." });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
}
