import Layout from "@/components/Layout/Layout";
import styles from "./services.module.css";

export default function ServicesPage() {
  return (
    <Layout>
      <div className={styles.services}>
        <h1>Our Services</h1>
        <ul>
          <li>Personal Horoscope Reading</li>
          <li>Kundli Matching</li>
          <li>Vastu Consultation</li>
          <li>Numerology Guidance</li>
          <li>Career & Finance Predictions</li>
        </ul>
      </div>
    </Layout>
  );
}
