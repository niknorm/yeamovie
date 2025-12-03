import { Link } from "react-router-dom";
import { useGetMoviesQuery, useGetShowsQuery } from "../../../../app/api";
import styles from "./PopularMovies.module.css";
import { useState } from "react";

export const PopularMovies: React.FC = () => {
  const [type, setType] = useState("movies");

  const { data: moviesData, isLoading: moviesLoading } = useGetMoviesQuery();
  const { data: showsData, isLoading: showsLoading } = useGetShowsQuery();

  const items = type === "movies" ? moviesData?.items : showsData?.items;

  const itemToShow = items?.slice(0, 10);

  if (moviesLoading || showsLoading)
    return <div>Загрузка списка фильмов...</div>;
  if (!moviesData || !showsData) return <div>Ошибка загрузки </div>;

  return (
    <>
      <div className={styles.popularMoviesWrapper}>
        <div className={styles.popularMoviesHeader}>
          <div className={styles.switcher}>
            <button
              className={type === "movies" ? styles.active : ""}
              onClick={() => setType("movies")}
            >
              популярные фильмы
            </button>
            <button
              className={type === "shows" ? styles.active : ""}
              onClick={() => setType("shows")}
            >
              популярные сериалы
            </button>
          </div>
          <Link to="/all-movies" className={styles.showAllLink}>
            {"Смотреть все >"}
          </Link>
        </div>
        <div className={styles.popularMovies}>
          {itemToShow?.map((movie) => (
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
    </>
  );
};
