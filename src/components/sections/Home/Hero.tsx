import { useEffect } from "react"
import { LuLoaderCircle } from "react-icons/lu"
import MoviesCarousel from "../../shared/MoviesCarousel"
import { useAppDispatch, useAppSelector } from "../../../lib/hooks"
import { fetchMovies } from "../../../features/movieSlice"

const Hero = () => {
    const { status } = useAppSelector(state => state.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <main>
            {
                status !== "loading" ?
                    <MoviesCarousel />
                    :
                    <div>
                        <LuLoaderCircle className="animate-spin text-blue-500 text-5xl absolute top-1/2 left-1/2" />
                    </div>
            }
        </main>
    )
}

export default Hero
