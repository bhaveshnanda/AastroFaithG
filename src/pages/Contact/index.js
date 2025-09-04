"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout/Layout";
import styles from "./contact.module.css";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(`❌ Failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong. Try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className={styles.container}>
        {/* Full-page loader overlay */}
        {isSubmitting && (
          <div className={styles.loaderOverlay}>
            <div className={styles.loaderContent}>
              <div className={styles.spinner} />
              <p className={styles.loaderMessage}>Your message is sending...</p>
            </div>
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/contactImage.png"
                alt="Support illustration"
                className={styles.contactImage}
                fill
              />
            </div>

            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>Contact Information</h3>

              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <div>
                  <p className={styles.contactValue}>
                    B2-B3 shree ram bhavan, station road
                    <br />
                    bhayander west, Thane - 401101
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <div>
                  <p className={styles.contactValue}>+91 97302 05554</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <div>
                  <p className={styles.contactValue}>hello@company.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.nameRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName" className={styles.label}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Your First Name"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Your Last Name"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Your Email Address"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Your Phone Number"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="How can we help you?"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={styles.textarea}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                <Send className={styles.buttonIcon} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
