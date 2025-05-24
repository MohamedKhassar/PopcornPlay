import { MovieType } from "../../lib/types"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import useMediaQuery from "../../features/UseMediaQuery";
import { useNavigate } from "react-router-dom";
import SwiperCore from 'swiper';
import { cn } from "../../lib/cn";

const MovieList = ({ category, movies, type, loading }: { category?: string, type: string, movies: MovieType[], loading?: boolean }) => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const isXSmallScreen = useMediaQuery("(max-width: 580px)"); // Tailwind's `sm` breakpoint
  const isSmallScreen = useMediaQuery("(max-width: 780px)"); // Tailwind's `sm` breakpoint
  const isMediumScreen = useMediaQuery("(max-width: 1400px)"); // Tailwind's `md` breakpoint
  const nav = useNavigate()
  const slidesToScroll = isXSmallScreen ? 1 : isSmallScreen ? 2 : isMediumScreen ? 4 : 5;

  const handleSwiper = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <main className="max-w-screen-2xl lg:mx-auto mx-9 lg:mb-20 mb-2 space-y-3">
      <section className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="lg:text-2xl text-blue-400 font-extrabold capitalize">{category}</h1>
          <span className="w-full bg-blue-500 h-0.5 rounded-full"></span>
        </div>
        <div className="flex gap-4 items-start">
          <button disabled={isBeginning} ref={prevRef} className={cn("hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full  duration-300",
            isBeginning ? "cursor-not-allowed" : "cursor-pointer"
          )}><FaChevronLeft className={cn(isBeginning && "opacity-45")} /></button>
          <button disabled={isEnd} ref={nextRef} className={cn("hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full  duration-300",
            isEnd ? "cursor-not-allowed" : "cursor-pointer"
          )}><FaChevronRight className={cn(isEnd && "opacity-45")} /></button>
        </div>
      </section>
      <Swiper
        slidesPerView={slidesToScroll}
        spaceBetween={slidesToScroll === 5 ? 20 : slidesToScroll === 4 ? 10 : slidesToScroll === 2 ? 5 : 0}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        className="flex rounded-xl justify-center items-center"
        modules={[Navigation]}
        onSlideChange={(swiper) => setTimeout(() => handleSwiper(swiper), 0)}
        onSwiper={(swiper) => setTimeout(() => handleSwiper(swiper), 0)}
        effect="fade"
      >
        {
          movies.length === 0 && loading ?
            Array.from({ length: 5 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="h-100 rounded-xl skeleton-shimmer" />
              </SwiperSlide>
            ))
            :
            movies.map((movie, index) => (
              <SwiperSlide>
                <Card onClick={() => nav(`/${type}/${movie.id}`)} movie={movie} key={index} />
              </SwiperSlide>
            ))

        }
      </Swiper>
    </main>
  )
}

export default MovieList
