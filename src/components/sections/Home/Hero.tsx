import { useEffect } from "react"
import MoviesCarousel from "../../shared/MoviesCarousel"
import { useAppDispatch, useAppSelector } from "../../../lib/hooks"
import { fetchMovies } from "../../../features/movieSlice"
import 'react-loading-skeleton/dist/skeleton.css';
const Hero = () => {
    const { status } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <main className="h-screen">
            {
                status === "succeeded" ?
                    <MoviesCarousel />
                    :
                    <div className="h-full">
                        <div className="size-full rounded-xl skeleton-shimmer"/>
                    </div>
            }
        </main>
    )
}

export default Hero
