import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import styles from "./book-appointment.module.css";

export default function BookAppointment() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      date: e.target.date.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Appointment booked successfully!");
        e.target.reset(); // clear form
      } else {
        setMessage("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Server error. Please try later.");
    }

    setLoading(false);
  }

  return (
    <Layout>
      <div className={styles.appointment}>
        <h1>Book an Appointment</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input name="name" type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input name="email" type="email" placeholder="Your Email" required />

          <label>Date of Birth:</label>
          <input name="date" type="date" required />

          <label>Time of Birth:</label>
          <input name="timeOfBirth" type="time" required />

          <label>Message:</label>
          <textarea name="message" placeholder="Your Query"></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {message && <p>{message}</p>}
      </div>
    </Layout>
  );
}
