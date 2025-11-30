import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AllMoviePage from "../pages/AllMoviePage/AllMoviePage";
import MoviePage from "../pages/MoviePage/MoviePage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";


export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<AllMoviePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}

