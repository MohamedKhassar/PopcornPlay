import { useAppSelector } from "../../../lib/hooks"
import MovieList from "../../shared/MovieList"
import { LuFilm } from "react-icons/lu"
import { BiTv } from "react-icons/bi"

const MovieCategory = () => {
  const { popularMovies, nowPlaying, topRated, upcoming } = useAppSelector(state => state.movies.movies)
  const { popularSeries, onTheAir, topRatedSeries } = useAppSelector(state => state.series.series)
  console.log(popularSeries)
  return (
    <div>
      <div id="movies" className="scroll-mt-25 mx-auto lg:max-w-[104rem] max-w-sm lg:gap-4 gap-2 text-slate-500 lg:mt-20 lg:mb-10 mt-10 mb-5 flex items-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold">Movie Lists</h1>
        <LuFilm className="lg:size-9 size-5" />
      </div>
      <MovieList type="movie" movies={popularMovies} category="Popular Movies" />
      <MovieList type="movie" movies={topRated} category="top rated Movies" />
      <MovieList type="movie" movies={nowPlaying} category="Now Playing (In Theaters)" />
      <MovieList type="movie" movies={upcoming} category="Upcoming Movies" />
      <div id="series" className="scroll-mt-25 mx-auto lg:max-w-[104rem] max-w-sm lg:gap-4 gap-2 text-slate-500 lg:mt-20 lg:mb-10 mt-10 mb-5 flex items-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-extrabold">TV Series Lists</h1>
        <BiTv className="lg:size-12 size-5" />
      </div>
      {/* list of series categories */}
      <MovieList type="serie" movies={popularSeries} category="Popular TV Shows	" />
      <MovieList type="serie" movies={topRatedSeries} category="Top Rated TV Shows	" />
      <MovieList type="serie" movies={onTheAir} category="Currently Airing TV Shows" />
    </div>
  )
}

export default MovieCategory