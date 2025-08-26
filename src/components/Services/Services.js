import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.cards}>
        <div className={styles.card}>Horoscope Reading</div>
        <div className={styles.card}>Kundli Matching</div>
        <div className={styles.card}>Vastu Consultation</div>
      </div>
    </div>
  );
}
