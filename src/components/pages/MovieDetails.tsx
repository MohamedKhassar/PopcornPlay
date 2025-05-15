import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MoviePost from "../shared/MoviePost"
import { fetchMovieDetails } from "../../features/movieSlice"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { BiChevronLeft } from "react-icons/bi"

const MovieDetails = () => {
    const { id } = useParams()
    const { status, movies } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (id) dispatch(fetchMovieDetails(id))
    }, [id])
const nav=useNavigate()
    return (
        <div className="h-screen relative">
            <button onClick={()=>nav(-1)} className="absolute top-28 left-10 bg-white/30 backdrop-blur-2xl rounded-full p-1 hover:bg-white/40 duration-300 cursor-pointer z-50">
                <BiChevronLeft className="size-8" />

            </button>            {status == "succeeded" ?
                <MoviePost movie={movies.movieDetails} />
                :
                <div className="h-full">
                    <div className="size-full rounded-xl skeleton-shimmer" />
                </div>
            }
        </div>
    )
}

export default MovieDetails