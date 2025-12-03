
import styles from "./Header.module.css"; 

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>KINOMONSTER</h1>
      <input
        type="text"
        placeholder="Поиск фильма..."
        className={styles.headerSearch}
      />
    </header>
  );
};
