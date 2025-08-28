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
  <h1>🕉️ SPECIALIST IN SOLVING 🕉️</h1>
  <p>Your trusted guide to astrology and life predictions</p>
  <Link href="/Appointment">
    <button className={styles.btn}>Book Appointment</button>
  </Link>

{/* Cards Section */}
<div className={styles.cardsContainer}>
  {/* Card 1 */}
  <div className={styles.card}>
    <div className={styles.icon}>❤️</div>
    <h2>LOVER PROBLEMS</h2>
    <ul>
      <li>Get Your Lost Love Back</li>
      <li>One Sided Love Solution</li>
      <li>Love Marriage Problems</li>
      <li>Breakup Problems</li>
      <li>Girlfriend/Boyfriend Issues</li>
    </ul>
  </div>

  {/* Card 2 */}
  <div className={styles.card}>
    <div className={styles.icon}>👩‍❤️‍👨</div>
    <h2>MARRIAGE PROBLEMS</h2>
    <ul>
      <li>Husband Wife Disputes</li>
      <li>Divorce Problems</li>
      <li>Inter Caste Marriage</li>
      <li>Family Opposition</li>
      <li>Court Marriage Issues</li>
    </ul>
  </div>

  {/* Card 3 */}
  <div className={styles.card}>
    <div className={styles.icon}>🛡️</div>
    <h2>BLACK MAGIC</h2>
    <ul>
      <li>Black Magic Removal</li>
      <li>Evil Eye Protection</li>
      <li>Negative Energy Cleansing</li>
      <li>Jadu Tona Specialist</li>
      <li>Vashikaran Solutions</li>
    </ul>
  </div>
</div>
</div>

    </div>
  );
}
