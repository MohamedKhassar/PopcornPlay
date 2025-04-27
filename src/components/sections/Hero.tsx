import axios from "axios"
import { useEffect, useState } from "react"
import { MovieType } from "../../lib/types"
import { LuLoaderCircle } from "react-icons/lu"
import MoviesCarousel from "../shared/MoviesCarousel"

const Hero = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState<MovieType[]>([])
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const data = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US", {
                params: {
                    api_key: "eae7a031b92c3144dfadfc41445a781c"
                }
            })
            setMovies(data.data.results)
        }
        fetchData()
        setIsLoading(false)
    }, [])

    useEffect(()=>{
        document.addEventListener("keydown",(e)=>{
            if(e.key==="f"||e.key==="F"){
                if(document.fullscreenElement){
                    document.exitFullscreen()
                }else{
                    document.body.requestFullscreen()
                }
            }else if(e.key==="Escape"){
                if(document.fullscreenElement){
                    document.exitFullscreen()
                }
            }
        })
    },[])
    return (
        <main>
            {
                !isLoading && movies.length !== 0 ?
                    <MoviesCarousel movies={movies} />
                    :
                    <div>
                        <LuLoaderCircle className="animate-spin text-blue-500 text-5xl absolute top-1/2 left-1/2" />
                    </div>
            }
        </main>
    )
}

export default Hero
