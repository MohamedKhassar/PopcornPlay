import { useEffect, useState } from "react"
import { MovieType } from "../../lib/types"
import { useParams } from "react-router-dom"
import axios from "axios"
import { VITE_APP_API_KEY } from "../../lib/data"

const MovieDetails = () => {
    const [movie, setMovie] = useState<MovieType>()
    const { id } = useParams()
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/`,
                {
                    params: {
                        api_key: VITE_APP_API_KEY
                    }
                }
            )
            setMovie(data.data.results[0])
        }
        fetchMovieDetails()
    }, [])
    console.log(movie)
    return (
        <>
        </>
    )
}

export default MovieDetails