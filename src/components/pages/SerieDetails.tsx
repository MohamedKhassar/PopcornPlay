import { useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { clearSerieDetails, fetchSeriesDetails } from "../../features/SeriesSlice"
import { BiChevronLeft } from "react-icons/bi"
import SeriePost from "../sections/TV/SeriePost"
import CrewDetails from "../shared/CrewDetails"
import TrailerPlayer from "../shared/TrailerPlayer"
import RelatedItems from "../shared/RelatedItems"
import MetaData from "../shared/MetaData"


const SerieDetails = () => {
    const { id } = useParams()
    const { status, series } = useAppSelector(state => state.series)
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const nav = useNavigate()

    useEffect(() => {
        if (id) dispatch(fetchSeriesDetails(id))
    }, [id])

    useEffect(() => {
        dispatch(clearSerieDetails())
    }, [pathname])

    return (
        <main>
            <MetaData description={`Watch ${series.seriesDetails.details.name} — ${series.seriesDetails.details.overview?.slice(0, 120)}...`} image={`https://image.tmdb.org/t/p/original${series.seriesDetails.details.backdrop_path}`} title={`PopcornPlay - ${series.seriesDetails.details.name}`} url={`https://popcornplay-lyart.vercel.app/serie/${series.seriesDetails.details.id}`} />
            <button onClick={() => nav(-1)} className="absolute top-28 left-10 bg-white/30 backdrop-blur-2xl rounded-full p-1 hover:bg-white/40 duration-300 cursor-pointer z-40">
                <BiChevronLeft className="size-8" />
            </button>
            {status == "succeeded" &&
                <SeriePost serie={series.seriesDetails} />
            }
            <CrewDetails {...series.seriesDetails} />
            <TrailerPlayer id={series.seriesDetails.details.id} type="tv" />
            <RelatedItems genres={series.seriesDetails.details.genres?.map(item => item.id)} currentId={series.seriesDetails.details.id} type="tv" />
        </main>
    )
}

export default SerieDetails