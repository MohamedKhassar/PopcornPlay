import { useEffect } from "react"
import MoviesCarousel from "../../shared/MoviesCarousel"
import { useAppDispatch, useAppSelector } from "../../../lib/hooks"
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from "../../../features/movieSlice"
import { fetchOnTheAirSeries, fetchPopularSeries, fetchTopRatedSeries } from "../../../features/SeriesSlice"
import { fetchGenres } from "../../../features/genreSlice"
const Hero = () => {
    const { status } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPopularMovies())
        dispatch(fetchTopRatedMovies())
        dispatch(fetchUpcomingMovies())
        dispatch(fetchNowPlayingMovies())
        dispatch(fetchPopularSeries())
        dispatch(fetchTopRatedSeries())
        dispatch(fetchOnTheAirSeries())
        dispatch(fetchGenres())
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
