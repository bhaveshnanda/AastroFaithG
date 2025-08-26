import Layout from "@/components/Layout/Layout";
import styles from "./about.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>About Us</h1>
        <p>
          Welcome to our astrologer website. We provide personalized astrology,
          horoscope readings, and life guidance based on ancient Vedic practices.
        </p>
      </div>
    </Layout>
  );
}
