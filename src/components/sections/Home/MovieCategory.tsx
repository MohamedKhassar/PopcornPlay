import { useAppSelector } from "../../../lib/hooks"
import MovieList from "../../shared/MovieList"

const MovieCategory = () => {
  const movies=useAppSelector(state=>state.movies.movies)
  return (
    <div>
        <MovieList movies={movies}  category="Popular Movies"/>
    </div>
  )
}

export default MovieCategory