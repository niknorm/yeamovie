import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useGetMovieBySearchQuery } from "../../app/api";
import moviesStyles from "../HomePage/ui/PopularMovies/PopularMovies.module.css";

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, isLoading, error } = useGetMovieBySearchQuery(query);

  if (isLoading) return <div>Загрузка...</div>;
  if (error || !data?.items?.length)
    return <div>Фильмы по запросу "{query}" не найдены</div>;

  return (
    <div className={moviesStyles.popularMovies}>
      {data.items.map((m) => (
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
  );
};
