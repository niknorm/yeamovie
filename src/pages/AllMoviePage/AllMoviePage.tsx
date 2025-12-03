import { Link } from "react-router-dom";
import { useGetMoviesQuery } from "../../app/api";
import styles from "../HomePage/ui/PopularMovies/PopularMovies.module.css";

export const AllMoviePage: React.FC = () => {
  const { data, isLoading } = useGetMoviesQuery();

  if (isLoading) return <div>Загрузка списка фильмов...</div>;
  if (!data?.items) return <div>Ошибка загрузки</div>;

  return (
    <div className={styles.popularMoviesWrapper}>
      <h2 className={styles.pageTitle}>Все фильмы</h2>

      <div className={styles.popularMovies}>
        {data.items.map((movie) => (
          <Link
            to={`/movie/${movie.kinopoiskId}`}
            key={movie.kinopoiskId}
            className={styles.movieCard}
          >
            <img src={movie.posterUrl} alt={movie.nameRu} />
            <h3 className={styles.movieName}>{movie.nameRu}</h3>
            <div className={styles.movieInfo}>
              <span>{movie.year}</span>
              {movie.ratingKinopoisk && (
                <span>{movie.ratingKinopoisk} / 10</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
