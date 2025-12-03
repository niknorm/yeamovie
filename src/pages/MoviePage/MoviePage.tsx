import { Link, useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../app/api";
import styles from "./MoviePage.module.css";

export const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetMovieByIdQuery(Number(id));

  if (isLoading) return <div>Загрузка...</div>;
  if (error || !data) return <div>ошибка загрузки фильма</div>;

  return (
    <>
      
    <Link to="/" className={styles.showAllLink}>
            {"< Вернуться на главную"}
    </Link>
    <div className={styles.moviePage}>
      <div className={styles.posterWrapper}>
        <img src={data.posterUrl} alt={data.nameRu} className={styles.poster} />
      </div>

      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>{data.nameRu}</h1>
        <p className={styles.shortDescription}>
          {data.description || data.shortDescription}
        </p>

        <div className={styles.details}>
          <p>Год: {data.year}</p>
          <p>Жанры: {data.genres?.map((g) => g.genre).join(", ")}</p>
          <p>Страна: {data.countries?.map((c) => c.country).join(", ")}</p>
          <p>Рейтинг: {data.ratingKinopoisk} / 10</p>
        </div>

        <h2 className={styles.galleryTitle}>Кадры из фильма</h2>
        <div className={styles.gallery}>
          <p>Кадры отсутствуют</p>
        </div>
      </div>
    </div>
    </>
  );
};
