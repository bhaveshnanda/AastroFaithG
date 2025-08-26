import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>AstroFaith</div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Services">Services</Link></li>
          <li><Link href="/Appointment">Book Appointment</Link></li>
        </ul>
      </nav>
    </header>
  );
}
