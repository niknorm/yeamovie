import { Link } from "react-router-dom";
import { SearchInput } from "../../pages/HomePage/ui/SearchInput/SearchInput";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <Link to="/">KINOMONSTER</Link>
      </h1>
      <SearchInput />
    </header>
  );
};
