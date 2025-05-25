import { BiSolidMoviePlay, BiTv } from "react-icons/bi"
import Title from "../shared/Title"
import { LuFilm } from "react-icons/lu"
import MovieList from "../shared/MovieList"
import { useAppSelector } from "../../lib/hooks"

const Search = () => {
    const { query, loading } = useAppSelector(state => state.query)
    const movieResults = query?.filter((item) => item.media_type === "movie").sort((a, b) => b.vote_average - a.vote_average) || [];
    const tvResults = query?.filter((item) => item.media_type === "tv").sort((a, b) => b.vote_average - a.vote_average) || [];
    return (
        <div className="">
            {
                query.length === 0 ?
                    <main className="flex items-center justify-center lg:h-lvh md:h-dvh h-svh">
                        <section className="flex justify-center items-center flex-col gap-10 opacity-80 select-none">
                            <h1 className="lg:text-5xl text-3xl font-semibold text-slate-600 capitalize">you can search</h1>
                            <div className="flex justify-center items-center flex-col gap-2">
                                <BiSolidMoviePlay className="lg:size-20 size-15 text-slate-600" />
                                <h2 className="lg:text-xl text-lg font-bold text-slate-600 capitalize">Movies, Series, TV Shows</h2>
                            </div>
                        </section>
                    </main>
                    :
                    <div className="mt-30 lg:min-h-lvh md:min-h-dvh min-h-svh">
                        {movieResults.length > 0 && (
                            <div className="space-y-10">
                                <div
                                    className="lg:mx-auto mx-5 lg:max-w-[104rem]"
                                    >
                                    <Title>
                                        Movies List
                                        <LuFilm className="lg:size-7 size-5" />
                                    </Title>
                                </div>
                                <MovieList loading={loading} type="movie" movies={movieResults} />
                            </div>
                        )}

                        {tvResults.length > 0 && (
                            <div className="space-y-10">
                                <div
                                    className="lg:mx-auto mx-5 lg:max-w-[104rem]"
                                    >
                                    <Title>
                                        TV Series List
                                        <BiTv className="lg:size-9 size-5" />
                                    </Title>
                                </div>
                                <MovieList loading={loading} type="serie" movies={tvResults} />
                            </div>
                        )}

                        {movieResults.length === 0 && tvResults.length === 0 && (
                            <div className="text-center text-gray-400 lg:text-2xl text-lg flex items-center justify-center">  
                                No results found. Please try a different keyword.
                            </div>
                        )}
                    </div>
            }
        </div>
    )
}

export default Search