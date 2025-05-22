import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { fetchSeriesDetails } from "../../features/SeriesSlice"
import { BiChevronLeft } from "react-icons/bi"
import SeriePost from "../sections/TV/SeriePost"
import CrewDetails from "../shared/CrewDetails"


const SerieDetails = () => {
    const { id } = useParams()
    const { status, series } = useAppSelector(state => state.series)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (id) dispatch(fetchSeriesDetails(id))
    }, [id])
    const nav = useNavigate()

    return (
        <main className="lg:h-lvh md:h-dvh h-svh relative">
            <button onClick={() => nav(-1)} className="absolute top-28 left-10 bg-white/30 backdrop-blur-2xl rounded-full p-1 hover:bg-white/40 duration-300 cursor-pointer z-50">
                <BiChevronLeft className="size-8" />
            </button>
            {status == "succeeded" &&
                <SeriePost movie={series.seriesDetails} />
            }
            <CrewDetails {...series.seriesDetails} />
        </main>
    )
}

export default SerieDetails