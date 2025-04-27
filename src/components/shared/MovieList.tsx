import { MovieType } from "../../lib/types"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

const MovieList = ({ category, movies }: { category: string, movies: MovieType[] }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  return (
    <main className="max-w-screen-2xl mx-auto mt-20 space-y-3">
      <section className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl text-slate-400 font-extrabold">{category}</h1>
          <span className="w-full bg-slate-500 h-0.5 rounded-full"></span>
        </div>
        <div className="flex gap-4 items-start">
          <button ref={prevRef} className="hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full cursor-pointer duration-300"><FaChevronLeft /></button>
          <button ref={nextRef} className="hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full cursor-pointer duration-300"><FaChevronRight /></button>
        </div>
      </section>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        loop
        aria-hidden
        className="flex rounded-xl"
        modules={[Navigation]}
      >
        {
          movies.map((movie, index) => (
            <SwiperSlide>
              <Card movie={movie} key={index} />
            </SwiperSlide>
          ))

        }
      </Swiper>
    </main>
  )
}

export default MovieList
