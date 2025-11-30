import FiltersBlock from "./ui/FiltersBlock/FiltersBlock"
import HeroMovie from "./ui/HeroMovie/HeroMovie"
import PopularMovies from "./ui/PopularMovies/PopularMovies"


function HomePage() {
  return (
    <>
    <HeroMovie />
    <PopularMovies />
    <FiltersBlock />
    </>
  )
}

export default HomePage