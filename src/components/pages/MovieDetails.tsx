import { useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import MoviePost from "../sections/Movie/MoviePost"
import { clearMovieDetails, fetchMovieDetails } from "../../features/movieSlice"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { BiChevronLeft } from "react-icons/bi"
import CrewDetails from "../shared/CrewDetails"
import TrailerPlayer from "../shared/TrailerPlayer"
import RelatedItems from "../shared/RelatedItems"
import MetaData from "../shared/MetaData"
const MovieDetails = () => {
    const { id } = useParams()
    const { status, movies } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()

    useEffect(() => {
        try {
            if (id) dispatch(fetchMovieDetails(id))
        } catch (error) {
            console.error("Error fetching movie details:", error)

        }
    }, [id])
    useEffect(() => {
        dispatch(clearMovieDetails())
    }, [pathname])
    const nav = useNavigate()
    return (
        <>
            <MetaData description={`Watch ${movies.movieDetails.details.title} — ${movies.movieDetails.details.overview?.slice(0, 120)}...`} image={`https://image.tmdb.org/t/p/original${movies.movieDetails.details.backdrop_path}`} title={`PopcornPlay - ${movies.movieDetails.details.title}`} url={`https://popcornplay-lyart.vercel.app/movie/${movies.movieDetails.details.id}`} />
            <main>
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
                <RelatedItems genres={movies.movieDetails.details.genres?.map(item => item.id)} currentId={movies.movieDetails.details.id} type="movie" />
            </main>
        </>
    )
}

export default MovieDetails