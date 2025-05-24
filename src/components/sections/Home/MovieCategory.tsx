import { useAppSelector } from "../../../lib/hooks"
import MovieList from "../../shared/MovieList"
import { LuFilm } from "react-icons/lu"
import { BiTv } from "react-icons/bi"
import Title from "../../shared/Title"

const MovieCategory = () => {
  const { popularMovies, nowPlaying, topRated, upcoming } = useAppSelector(state => state.movies.movies)
  const { popularSeries, onTheAir, topRatedSeries } = useAppSelector(state => state.series.series)
  return (
    <main className="lg:scroll-mt-25 scroll-mt-19 lg:my-15 my-10 lg:mx-auto mx-7 lg:max-w-[104rem]">
      <section className="lg:space-y-5 space-y-2.5">
        <div id="movies" className="scroll-mt-25">
          <Title>
            Movie Lists
            <LuFilm className="lg:size-7 size-5" />
          </Title>
        </div>
        <div className="lg:space-y-8">
          <MovieList type="movie" movies={popularMovies} category="Popular Movies" />
          <MovieList type="movie" movies={topRated} category="top rated Movies" />
          <MovieList type="movie" movies={nowPlaying} category="Now Playing (In Theaters)" />
          <MovieList type="movie" movies={upcoming} category="Upcoming Movies" />
        </div>
      </section>
      <section className="lg:space-y-5 space-y-2.5">
        <div id="series" className="scroll-mt-25">
          <Title>
            TV Series Lists
            <BiTv className="lg:size-9 size-5" />
          </Title>
        </div>
        {/* list of series categories */}
        <div className="lg:space-y-8">
          <MovieList type="serie" movies={popularSeries} category="Popular TV Shows	" />
          <MovieList type="serie" movies={topRatedSeries} category="Top Rated TV Shows	" />
          <MovieList type="serie" movies={onTheAir} category="Currently Airing TV Shows" />
        </div>
      </section>
    </main>
  )
}

export default MovieCategory