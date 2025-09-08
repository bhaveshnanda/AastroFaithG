"use client";

import Layout from "@/components/Layout/Layout";
import styles from "./about.module.css";
import { Star, Award, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.guaranteeBadge}>
                ⭐ 48 Hours Guarantee Solution ⭐
              </div>
              <h1 className={styles.heroTitle}>
                AstroFaithG
              </h1>
              <span className={styles.highlight}>
                  Astrologer Gopal Agrawal
              </span>
              <p className={styles.heroSubtitle}>
                Trusted Guide to Ancient Vedic Wisdom & Modern Life Solutions
              </p>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.mainContent}>
              {/* Left Side - Star Icon and Stats */}
              <div className={styles.leftColumn}>
                <div className={styles.starContainer}>
                  <div className={styles.starCircle}>
                    <Star className={styles.starIcon} />
                  </div>
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <Users className={styles.statIcon} />
                    <div className={styles.statNumber}>10,000+</div>
                    <div className={styles.statLabel}>Happy Clients</div>
                  </div>

                  <div className={styles.statCard}>
                    <Award className={styles.statIcon} />
                    <div className={styles.statNumber}>15+</div>
                    <div className={styles.statLabel}>Years Experience</div>
                  </div>

                  <div className={styles.statCard}>
                    <Clock className={styles.statIcon} />
                    <div className={styles.statNumber}>48 Hours</div>
                    <div className={styles.statLabel}>Solution Guarantee</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className={styles.rightColumn}>
                <div className={styles.header}>
                  <h2 className={styles.title}>Meet Your Trusted Astrologer</h2>
                  <div className={styles.titleUnderline}></div>
                </div>

                <div className={styles.description}>
                  <p>
                    Gopal Agrawal is a distinguished astrologer with deep
                    expertise in Vedic Astrology, Horoscope Analysis, Palmistry,
                    and Numerology. With over 15 years of dedicated practice, he
                    has become India&apos;s most trusted spiritual guide, helping
                    thousands of individuals navigate life&apos;s complexities with
                    ancient wisdom and modern insights.
                  </p>

                  <p>
                    Known for his accurate predictions and compassionate
                    approach, Gopal ji combines traditional Vedic knowledge with
                    practical, solution-oriented guidance. His expertise spans
                    across all aspects of life including career advancement,
                    relationship harmony, financial prosperity, and personal
                    spiritual growth.
                  </p>

                  <p>
                    What sets Gopal Agrawal apart is his unique ability to
                    translate complex astrological concepts into actionable
                    advice that empowers individuals to make informed decisions.
                    He believes astrology is not just about predicting the
                    future, but about providing tools for self-awareness and
                    overcoming life&apos;s challenges.
                  </p>
                </div>

                {/* Philosophy Section */}
                <div className={styles.philosophySection}>
                  <h3 className={styles.philosophyTitle}>My Philosophy</h3>
                  <div className={styles.philosophyUnderline}></div>

                  <div className={styles.quoteContainer}>
                    <div className={styles.quoteIcon}>❝</div>
                    <blockquote className={styles.quote}>
                      Astrology is not about accepting fate, but about
                      understanding the cosmic energies that influence our lives
                      and using that knowledge to create positive change. Every
                      challenge is an opportunity for growth, and every
                      planetary position offers guidance for transformation.
                    </blockquote>
                    <div className={styles.quoteIconRight}>❞</div>

                    <div className={styles.attribution}>
                      - Astrologer Gopal Agrawal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className={styles.expertiseSection}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionTitle} ${styles.centered}`}>
              Areas of Expertise
            </h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Star className={styles.icon} />
                </div>
                <h3>Vedic Astrology</h3>
                <p>
                  Deep knowledge of ancient Vedic texts and planetary influences
                  on human life
                </p>
              </div>

              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Star className={styles.icon} />
                </div>
                <h3>Horoscope Analysis</h3>
                <p>
                  Detailed birth chart readings revealing life patterns and
                  future possibilities
                </p>
              </div>

              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Star className={styles.icon} />
                </div>
                <h3>Palmistry</h3>
                <p>
                  Reading life lines, fate lines, and palm patterns to
                  understand destiny
                </p>
              </div>

              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Star className={styles.icon} />
                </div>
                <h3>Numerology</h3>
                <p>
                  Understanding the mystical relationship between numbers and
                  life events
                </p>
              </div>

              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Star className={styles.icon} />
                </div>
                <h3>Love & Relationships</h3>
                <p>
                  Specialized guidance for love problems, marriage
                  compatibility, and relationship healing
                </p>
              </div>

              <div className={styles.expertiseCard}>
                <div className={styles.cardIcon}>
                  <Star className={styles.icon} />
                </div>
                <h3>Career & Finance</h3>
                <p>
                  Strategic insights for professional growth and financial
                  prosperity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Transform Your Life?</h2>
              <p>
                Get personalized guidance from India's most trusted astrologer
              </p>
              <button className={styles.ctaButton}>
                Book Your Consultation
              </button>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  );
}
