import { useEffect, useState } from "react";
import {useGetFilteredMoviesQuery,useGetFiltersQuery,} from "../../../../app/api";
import moviesStyles from "../PopularMovies/PopularMovies.module.css";
import filtersStyles from "./FiltersBlock.module.css";
import { Link } from "react-router-dom";

export const FiltersBlock: React.FC = () => {
  const { data: filters } = useGetFiltersQuery();
  const [genreId, setGenreId] = useState("");
  const [countryId, setCountryId] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (!genreId && filters) {
      const defaultGenre = filters.genres.find(
        (g) => g.genre.toLowerCase() === "криминал"
      )?.id;
      if (defaultGenre) setGenreId(defaultGenre);
    }
  }, [filters, genreId]);

  const { data: movies } = useGetFilteredMoviesQuery({
    genreId,
    countryId,
    year,
    rating,
  });
  return (
    <div>
      <div className={filtersStyles.filtersWrapper}>
        <div className={filtersStyles.filtersHeader}>
          <h3 className={filtersStyles.filtersTitle}>Фильмы по категориям</h3>
        </div>

        <div className={filtersStyles.filtersControls}>
          <select value={genreId} onChange={(e) => setGenreId(e.target.value)}>
            <option value="">Жанр</option>
            {filters?.genres?.map((g) => (
              <option key={g.id} value={g.id}>
                {g.genre}
              </option>
            ))}
          </select>

          <select
            value={countryId}
            onChange={(e) => setCountryId(e.target.value)}
          >
            <option value="">Страна</option>
            {filters?.countries?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.country}
              </option>
            ))}
          </select>

          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Год</option>
            {Array.from({ length: 40 }).map((_, i) => {
              const y = 2024 - i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select>

          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Рейтинг от</option>
            {[10, 9, 8, 7, 6, 5].map((r) => (
              <option key={r} value={r}>
                {r}+
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={moviesStyles.popularMovies}>
        {movies?.items?.map((m) => (
          <Link
            to={`/movie/${m.kinopoiskId}`}
            key={m.kinopoiskId}
            className={moviesStyles.movieCard}
          >
            <img src={m.posterUrlPreview} alt={m.nameRu} />

            <h3 className={moviesStyles.movieName}>{m.nameRu}</h3>

            <div className={moviesStyles.movieInfo}>
              <span>{m.year}</span>
              {m.ratingKinopoisk && <span>{m.ratingKinopoisk} / 10</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
