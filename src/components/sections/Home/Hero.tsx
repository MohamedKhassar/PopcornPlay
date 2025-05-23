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
        const fetchData = async () => {
            try {
                await dispatch(fetchPopularMovies())
                await dispatch(fetchTopRatedMovies())
                await dispatch(fetchUpcomingMovies())
                await dispatch(fetchNowPlayingMovies())
                await dispatch(fetchPopularSeries())
                await dispatch(fetchTopRatedSeries())
                await dispatch(fetchOnTheAirSeries())
                await dispatch(fetchGenres())
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
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
