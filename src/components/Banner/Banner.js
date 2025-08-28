import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div>
      <div className={styles.guaranteeContainer}>
        <h2> ✨ 48 Hours Guarantee Solution 💯✨ </h2>
      </div>
      
      <div className={styles.mainHeading}>
        <h1>Transform Your Life with <span>Ancient Vedic Wisdom</span></h1>
      </div>
      <div className={styles.subHeading}>
      <p>Love Problem Solution Specialist Baba ji | Vashikaran Expert | Black Magic Removal</p>
      <p className={styles.boldText}>All Issues Resolution In Just 48 Hours - Just 1 Call Can Transform Your Life</p>
      </div>

      <div className={styles.banner}>
        <h1>Welcome to AstroFaith</h1>
        <p>Your trusted guide to astrology and life predictions</p>
        <Link href="/Appointment">
          <button className={styles.btn}>Book Appointment</button>
        </Link>
      </div>
    </div>
  );
}
