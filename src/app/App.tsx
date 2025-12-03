import { useState, useEffect } from "react";
import { AppRoutes } from "./routes";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.appContainer}>
        <div className={styles.loaderOverlay}>
          <div className={styles.loader}>Загрузка...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.contentWrapper}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
