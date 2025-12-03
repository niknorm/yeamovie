import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.footerTitle}>KINOMONSTER</h1>
      <div className={styles.footerLinks}>
        <Link to="/">На главную</Link>
        <Link to="/all-movies">Все фильмы</Link>
      </div>
    </footer>
  );
};
