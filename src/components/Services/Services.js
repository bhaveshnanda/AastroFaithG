"use client";

import { Star } from "lucide-react";
import styles from "./Services.module.css";

const services = [
  // "Love Problem Solution",
  // "Love Marriage Specialist",
  // "Husband Wife Problems",
  // "Divorce Problems Solution",
  // "Vashikaran Mantra",
  // "Black Magic Removal",
  // "Jadu Tona Expert",
  // "Inter Caste Marriage",
  // "Mohini Vashikaran",
  // "Kala Jadu Specialist",
  // "Love Spell Caster",
  // "Family Problem Solution"
  "Horoscope Reading",
  "Shubh Muhurat",
  "Varshpal 1 year Pridiction",
  "Birth Time Rectification",
  "Urgent Horoscope Consultaion",
  "Follow up",
  "Prashna Kundali",
  "Vastu analysis",
  "Kundali Milaan",
  "Pranic healing-certified aratic yogi",
  "Career counseling",
  "Medical analysis"
];

export default function Services() {
  return (
    <section className={styles.astrologyServices}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Expert Astrology Services</h2>
          <p className={styles.description}>
            Astrologer Goopal Agrawal is a renowned astrologer with expertise in
            addressing life&apos;s challenges through time-tested Vedic astrology
            principles. With a strong educational background and practical
            approach, he offers clear and insightful guidance for personal,
            professional, and spiritual growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                {/* Icon */}
                <div className={styles.iconContainer}>
                  <Star className={styles.starIcon} />
                </div>

                {/* Service Name */}
                <h3 className={styles.serviceName}>{service}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
