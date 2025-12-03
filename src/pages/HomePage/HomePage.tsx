import { FiltersBlock } from "./ui/FiltersBlock/FiltersBlock";
import { HeroMovie } from "./ui/HeroMovie/HeroMovie";
import { PopularMovies } from "./ui/PopularMovies/PopularMovies";
import styles from "./layout.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <HeroMovie />
      <PopularMovies />
      <FiltersBlock />
    </div>
  );
}

export default HomePage;
