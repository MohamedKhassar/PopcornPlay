
import { BsPlayCircleFill } from "react-icons/bs"
import { MovieType } from "../../lib/types"
import {  useAppSelector } from "../../lib/hooks";
import { LuLoaderCircle } from "react-icons/lu";

const MoviePost = ({ movie }: { movie: MovieType }) => {
    const genres = useAppSelector(state => state.genres.genres)
    const getGenreName = (genreId: number) => {
        if(movie.genre_ids){
            const genre = genres.find((g) => g.id === genreId);
            return genre?.name;
        }
    };
    console.log(movie)
    return (
        <>
            <img loading='lazy' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className="object-center object-cover size-full" alt={movie?.title} />
            <div className=" bg-gradient-to-t from-black/50 from-80% to-transparent inset-0 absolute flex items-end px-10 xl:py-20 py-10 h-full">
                <div className="flex gap-4 xl:max-w-3xl lg:max-w-xl max-w-fit items-center">
                    <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} className="w-70 max-lg:hidden rounded-2xl" loading="lazy" alt="" />
                    <div className="flex flex-col justify-center gap-4">
                        <div className="flex justify-between items-start gap-4">
                            <h1 className="md:text-3xl text-xl text-white font-extrabold">{movie?.title || movie?.name}</h1>
                            <span className={`flex justify-center items-center rounded-full md:min-h-10 md:min-w-10 min-w-8 min-h-8 md:text-base text-sm border-2 text-white bg-black/10 backdrop-blur-2xl font-extrabold ${movie.vote_average >= 7 ? 'border-green-500' : movie.vote_average >= 4 ? 'border-yellow-400' : 'border-red-500'}`}>{Number(movie?.vote_average).toFixed(1)}</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            {movie?.overview}
                        </p>
                        <button className="bg-blue-600 flex items-center p-3 rounded-2xl justify-center gap-2 hover:bg-blue-700 cursor-pointer transition-colors duration-300">watch <BsPlayCircleFill /></button>
                        <div className="flex flex-col gap-4">
                            <h5 className="capitalize ">genres:</h5>
                            <ul className="flex flex-wrap gap-2">
                                {
                                    movie?.genre_ids?.map((genre, index) => (
                                        <li key={index} className="px-5 py-3 hover:bg-slate-600/70 duration-300 cursor-pointer bg-slate-600/50 capitalize rounded-full text-sm">{getGenreName(genre)||<LuLoaderCircle className="animate-spin" /> }</li>
                                    ))
                                    ||
                                    movie?.genres?.map((genre, index) => (
                                        <li key={index} className="px-5 py-3 hover:bg-slate-600/70 duration-300 cursor-pointer bg-slate-600/50 capitalize rounded-full text-sm">{genre.name}</li>
                                    ))

                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MoviePost