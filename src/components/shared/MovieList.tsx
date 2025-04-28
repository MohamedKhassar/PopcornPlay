import { MovieType } from "../../lib/types"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import useMediaQuery from "../../features/UseMediaQuery";

const MovieList = ({ category, movies }: { category: string, movies: MovieType[] }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const isSmallScreen = useMediaQuery("(max-width: 780px)"); // Tailwind's `sm` breakpoint
  const isMediumScreen = useMediaQuery("(max-width: 1400px)"); // Tailwind's `md` breakpoint

  const slidesToScroll = isSmallScreen ? 2 : isMediumScreen ? 4 : 5;

  return (
    <main className="max-w-screen-2xl lg:mx-auto mx-5 lg:mt-20 mt-10 space-y-3">
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
        slidesPerView={slidesToScroll}
        spaceBetween={slidesToScroll === 5 ? 20 : (slidesToScroll === 4 ? 10 : 0)
        }
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        loop
        aria-hidden
        className="flex rounded-xl justify-center items-center"
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
