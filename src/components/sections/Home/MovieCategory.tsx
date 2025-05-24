import { useAppSelector } from "../../../lib/hooks"
import MovieList from "../../shared/MovieList"
import { LuFilm } from "react-icons/lu"
import { BiTv } from "react-icons/bi"
import Title from "../../shared/Title"

const MovieCategory = () => {
  const { popularMovies, nowPlaying, topRated, upcoming } = useAppSelector(state => state.movies.movies)
  const { popularSeries, onTheAir, topRatedSeries } = useAppSelector(state => state.series.series)
  return (
    <div>
      <div id="movies" className="lg:scroll-mt-25 scroll-mt-19 lg:mb-10 mt-10 mb-5 lg:mt-20 lg:mx-auto mx-5 lg:max-w-[104rem] ">
        <Title>
          Movie Lists
          <LuFilm className="lg:size-7 size-5" />
        </Title>
      </div>
      <MovieList type="movie" movies={popularMovies} category="Popular Movies" />
      <MovieList type="movie" movies={topRated} category="top rated Movies" />
      <MovieList type="movie" movies={nowPlaying} category="Now Playing (In Theaters)" />
      <MovieList type="movie" movies={upcoming} category="Upcoming Movies" />
      <div id="series" className="lg:scroll-mt-25 scroll-mt-19 lg:mb-10 mt-10 mb-5 lg:mt-20 lg:mx-auto mx-5 lg:max-w-[104rem] ">
        <Title>
          TV Series Lists
          <BiTv className="lg:size-9 size-5" />
        </Title>
      </div>
      {/* list of series categories */}
      <MovieList type="serie" movies={popularSeries} category="Popular TV Shows	" />
      <MovieList type="serie" movies={topRatedSeries} category="Top Rated TV Shows	" />
      <MovieList type="serie" movies={onTheAir} category="Currently Airing TV Shows" />
    </div>
  )
}

export default MovieCategory