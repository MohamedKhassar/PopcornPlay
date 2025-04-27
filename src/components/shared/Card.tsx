import { FaPlay } from 'react-icons/fa';
import { MovieType } from '../../lib/types'
import { Link } from 'react-router-dom';

const Card = ({ movie }: { movie: MovieType }) => {
    const getRatingColor = (rating: number) => {
        if (rating >= 7) return 'bg-green-500'; // Good
        if (rating >= 4) return 'bg-yellow-400'; // Average
        return 'bg-red-500'; // Bad
    };
    const colorClass = getRatingColor(movie.vote_average);
    return (
        <Link to={""}>
            <div className="space-y-5 hover:bg-slate-600/30 rounded-2xl p-3 duration-200 overflow-hidden">
                <div className='relative'>
                    <div className='flex justify-center items-center group overflow-hidden rounded-xl
                '>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='w-full rounded-2xl group-hover:scale-105 duration-300' alt="" />
                        <FaPlay className='absolute size-7 group-hover:opacity-100 opacity-0 transition-opacity duration-300' />
                    </div>
                    <div className={`flex items-center justify-center ${colorClass} text-black font-bold rounded-full size-8 text-sm absolute top-2 right-2`}>
                        {movie.vote_average.toFixed(1)}
                    </div>
                </div>
                <h4 className='text-lg text-center'>{movie.original_title}</h4>
            </div>
        </Link>
    )
}

export default Card