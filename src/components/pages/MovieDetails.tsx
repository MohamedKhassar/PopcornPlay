import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MoviePost from "../sections/Movie/MoviePost"
import { fetchMovieDetails } from "../../features/movieSlice"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { BiChevronLeft } from "react-icons/bi"
import CrewDetails from "../shared/CrewDetails"
import TrailerPlayer from "../shared/TrailerPlayer"
import RelatedItems from "../shared/RelatedItems"
const MovieDetails = () => {
    const { id } = useParams()
    const { status, movies } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (id) dispatch(fetchMovieDetails(id))
    }, [id])
    const nav = useNavigate()
    console.log(movies.movieDetails)
    return (
        <main className="h-screen relative">
            <button onClick={() => nav(-1)} className="absolute top-28 left-10 bg-white/30 backdrop-blur-2xl rounded-full p-1 hover:bg-white/40 duration-300 cursor-pointer z-40">
                <BiChevronLeft className="size-8" />

            </button>
            {status == "succeeded" ?
                <MoviePost movie={movies.movieDetails} />
                :
                <section className="h-full">
                    <div className="size-full rounded-xl skeleton-shimmer" />
                </section>
            }
            <CrewDetails {...movies.movieDetails} />
            <TrailerPlayer id={movies.movieDetails.details.id} type="movie" />
            <RelatedItems genreIds={movies.movieDetails.details.genre_ids} currentId={movies.movieDetails.details.id} type="movie" />
        </main>
    )
}

export default MovieDetails