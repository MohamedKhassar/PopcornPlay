import { BiSolidMoviePlay } from "react-icons/bi"

const Search = () => {
    return (
        <main className="h-screen flex items-center justify-center">
            <section className="flex justify-center items-center flex-col gap-10 opacity-80 select-none">
                <h1 className="text-5xl font-semibold text-slate-600 capitalize">you can search</h1>
                <div className="flex justify-center items-center flex-col gap-2">
                    <BiSolidMoviePlay className="size-20 text-slate-600" />
                    <h2 className="text-xl font-bold text-slate-600 capitalize">Movies, Series, TV Shows</h2>
                </div>
            </section>
        </main>
    )
}

export default Search