"use client";

import { Star } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  "Love Problem Solution",
  "Love Marriage Specialist", 
  "Husband Wife Problems",
  "Divorce Problems Solution",
  "Vashikaran Mantra",
  "Black Magic Removal",
  "Jadu Tona Expert",
  "Inter Caste Marriage",
  "Mohini Vashikaran",
  "Kala Jadu Specialist",
  "Love Spell Caster",
  "Family Problem Solution"
];

export default function Services() {
  return (
    <section className={styles.astrologyServices}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Expert Astrology Services
          </h2>
          <p className={styles.description}>
            Pandit Nitin Sharma is a renowned Vashikaran master and astrologer with expertise in solving all 
            life problems using ancient Vedic techniques and powerful mantras.
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
                <h3 className={styles.serviceName}>
                  {service}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}