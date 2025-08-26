import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>Welcome to AstroFaith</h1>
      <p>Your trusted guide to astrology and life predictions</p>
      <Link href="/Appointment">
        <button className={styles.btn}>Book Appointment</button>
      </Link>
    </div>
  );
}
