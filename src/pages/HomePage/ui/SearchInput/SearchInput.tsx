import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../../components/Header/Header.module.css";

export const SearchInput: React.FC = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      navigate(`/search?query=${encodeURIComponent(value)}`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Поиск фильма"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.headerSearch}
      />
    </form>
  );
};
