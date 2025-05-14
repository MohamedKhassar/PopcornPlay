import { useAppSelector } from "../../../lib/hooks"
import MovieList from "../../shared/MovieList"
import { LuFilm } from "react-icons/lu"
import { BiTv } from "react-icons/bi"

const MovieCategory = () => {
  const { popularMovies, nowPlaying, topRated, upcoming } = useAppSelector(state => state.movies.movies)
  return (
    <div>
      <div className="mx-auto lg:max-w-[104rem] max-w-sm lg:gap-4 gap-2 text-slate-500 lg:mt-20 lg:mb-10 mt-10 mb-5 flex items-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold">Movie Lists</h1>
        <LuFilm className="lg:size-9 size-5" />
      </div>
      <MovieList movies={popularMovies} category="Popular Movies" />
      <MovieList movies={topRated} category="top rated Movies" />
      <MovieList movies={nowPlaying} category="Now Playing (In Theaters)" />
      <MovieList movies={upcoming} category="Upcoming Movies" />
      <div className="mx-auto lg:max-w-[104rem] max-w-sm lg:gap-4 gap-2 text-slate-500 lg:mt-20 lg:mb-10 mt-10 mb-5 flex items-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold">TV Series Lists</h1>
        <BiTv className="lg:size-12 size-5" />
      </div>
      {/* list of series categories */}
    </div>
  )
}

export default MovieCategory