import { useEffect, useState } from "react"
import { useAppSelector } from "../../../lib/hooks"
import MovieList from "../../shared/MovieList"
import axios from "axios"
import { VITE_APP_API_KEY } from "../../../lib/data"
import { MovieType } from "../../../lib/types"
import { LuFilm } from "react-icons/lu"
import { BiTv } from "react-icons/bi"

const MovieCategory = () => {
  const movies = useAppSelector(state => state.movies.movies)
  const [topRated, setTopRated] = useState<MovieType[]>([])
  const [upcoming, setUpcoming] = useState<MovieType[]>([])
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          params: {
            api_key: VITE_APP_API_KEY,
          },
        }
      );
      setNowPlaying(data.data.results)
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          params: {
            api_key: VITE_APP_API_KEY,
          },
        }
      );
      setUpcoming(data.data.results)
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            api_key: VITE_APP_API_KEY,
          },
        }
      );
      setTopRated(data.data.results)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div className="mx-auto max-w-[104rem] gap-4 text-slate-500 mt-20 mb-10 flex items-center">
        <h1 className="text-5xl">Movie Lists</h1>
        <LuFilm className="size-9" />
      </div>
      <MovieList movies={movies} category="Popular Movies" />
      <MovieList movies={topRated} category="top rated Movies" />
      <MovieList movies={nowPlaying} category="Now Playing (In Theaters)" />
      <MovieList movies={upcoming} category="Upcoming Movies" />
      <div className="mx-auto max-w-[104rem] gap-4 text-slate-500 mt-20 mb-10 flex items-center">
        <h1 className="text-5xl">TV Series Lists</h1>
        <BiTv className="size-9" />
      </div>
      {/* list of series categories */}
    </div>
  )
}

export default MovieCategory