import { Link } from "react-router-dom";
import { useGetMovieByIdQuery, useGetMoviesQuery } from "../../../../app/api";
import styles from "./HeroMovie.module.css";

export const HeroMovie: React.FC = () => {
  const { data: moviesData, isLoading: isMoviesLoading } = useGetMoviesQuery();

  const randomId = moviesData?.items?.[2]?.kinopoiskId;

  const {
    data: movieData,
    error,
  } = useGetMovieByIdQuery(randomId!, {
    skip: !randomId,
  });

  if (isMoviesLoading) return <div>Загрузка списка фильмов...</div>;
  if (error || !movieData) return <div>Ошибка загрузки</div>;

  console.log("data: ", movieData);

  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <div className={styles.topInfo}>
          <span className={styles.subtitle}>Уже в кино</span>
        </div>
        <h2 className={styles.title}>{movieData.nameRu}</h2>
        <p className={styles.description}>
          {movieData.description || movieData.shortDescription}
        </p>
        <Link to={`/movie/${movieData.kinopoiskId}`} className={styles.button}>
          Подробнее
        </Link>
      </div>

      <div className={styles.posterWrapper}>
        <img
          src={movieData.posterUrl}
          alt={movieData.nameRu}
          className={styles.poster}
        />
      </div>
    </div>
  );
};
