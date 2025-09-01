import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} AstroFaith | All Rights Reserved
    </footer>
  );
}
