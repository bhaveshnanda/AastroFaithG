import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div>
      <div className={styles.pageWrapper}> </div>
      {/* 🔥 Fixed Background Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.bannerText}>
          <h1>Ancient Vedic Wisdom</h1>
          <p>Begin Your Journey Toward a Better, Peaceful Life</p>
        </div>
      </div>

      {/* 🔽 Your Existing Content (unchanged) */}
      <div className={styles.content}>
        <div className={styles.guaranteeContainer}>
          <h2>🕉️ Trusted Vedic Solutions That Truly Work 🕉️</h2>
        </div>

        <div className={styles.mainHeading}>
          <h1>
            Transform Your Life with <span>Ancient Vedic Wisdom</span>
          </h1>
        </div>

        <div className={styles.subHeading}>
          <p>
            Expert in Love, Marriage, Career & Life Guidance Through Vedic
            Astrology
          </p>
          <p className={styles.boldText}>
            One Call Can Bring Clarity, Confidence & Positive Change to Your
            Life
          </p>
        </div>

        <div className={styles.banner}>
          <span className={styles.star}>✨</span>
          <span className={styles.moon}>🌕</span>
          <h1>🕉️ SPECIALIST IN SOLVING 🕉️</h1>

          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}>❤️</div>
              <h1>💕LOVER PROBLEMS</h1>
              <ul>
                <li>•Get Your Lost Love Back</li>
                <li>•One Sided Love Solution</li>
                <li>•Love Marriage Problems</li>
                <li>•Breakup Problems</li>
                <li>•Girlfriend/Boyfriend Issues</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>👩‍❤️‍👨</div>
              <h1>💒MARRIAGE PROBLEMS</h1>
              <ul>
                <li>•Husband Wife Disputes</li>
                <li>•Divorce Problems</li>
                <li>•Inter Caste Marriage</li>
                <li>•Family Opposition</li>
                <li>•Court Marriage Issues</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>🛡️</div>
              <h1>🔮BLACK MAGIC</h1>
              <ul>
                <li>•Black Magic Removal</li>
                <li>•Evil Eye Protection</li>
                <li>•Negative Energy Cleansing</li>
                <li>•Jadu Tona Specialist</li>
                <li>•Vashikaran Solutions</li>
              </ul>
            </div>
          </div>

          <div className={styles.TextBelowCards}>
            <p>🚀 AUTHENTIC ADVICE • DEEP INSIGHT • TRUSTED BY MANY 🚀</p>
          </div>

          <Link href="/Appointment">
            <button className={styles.btn}>Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
