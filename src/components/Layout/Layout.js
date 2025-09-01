import Header from "../Header/Header";
import styles from "./Layout.module.css";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
