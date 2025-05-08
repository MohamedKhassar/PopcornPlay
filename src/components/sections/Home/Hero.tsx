import { useEffect } from "react"
import MoviesCarousel from "../../shared/MoviesCarousel"
import { useAppDispatch, useAppSelector } from "../../../lib/hooks"
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from "../../../features/movieSlice"
const Hero = () => {
    const { status } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchTopRatedMovies())
        dispatch(fetchUpcomingMovies())
        dispatch(fetchNowPlayingMovies())
    }, [])

    return (
        <main className="h-screen">
            {
                status === "succeeded" ?
                    <MoviesCarousel />
                    :
                    <div className="h-full">
                        <div className="size-full rounded-xl skeleton-shimmer" />
                    </div>
            }
        </main>
    )
}

export default Hero
