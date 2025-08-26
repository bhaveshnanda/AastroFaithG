import Header from "../Header/Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} AstroFaith | All Rights Reserved
      </footer>
    </div>
  );
}
