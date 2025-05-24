import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MovieType } from "../../lib/types";
import { VITE_APP_API_KEY } from "../../lib/data";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useMediaQuery from "../../features/UseMediaQuery";
import SwiperCore from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "../../lib/cn";
import Title from "./Title";
interface RelatedProps {
    genreIds: number[];
    currentId: number;
    type: "movie" | "tv";
}

const RelatedItems: React.FC<RelatedProps> = ({ genreIds, currentId, type }) => {
    const [related, setRelated] = useState<MovieType[]>([]);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const isXSmallScreen = useMediaQuery("(max-width: 580px)"); // Tailwind's `sm` breakpoint
    const isSmallScreen = useMediaQuery("(max-width: 780px)"); // Tailwind's `sm` breakpoint
    const isMediumScreen = useMediaQuery("(max-width: 1400px)"); // Tailwind's `md` breakpoint
    const slidesToScroll = isXSmallScreen ? 1 : isSmallScreen ? 2 : isMediumScreen ? 4 : 5;


    const handleSwiper = (swiper: SwiperCore) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };
    useEffect(() => {
        const fetchRelated = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/discover/${type}`, {
                params: {
                    api_key: VITE_APP_API_KEY,
                    with_genres: genreIds,
                    sort_by: "popularity.desc",
                },
            });
            setRelated(res.data.results.filter((item: MovieType) => item.id !== currentId));
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        fetchRelated();
    }, [genreIds, currentId, type]);
    return (
        <div className="xl:max-w-[109rem] xl:mx-auto md:mx-20 mx-5 md:space-y-10 space-y-8 md:mt-10 mt-8">
            <div className="flex justify-between items-center">
                <Title>
                    related {type == "tv" ? "series" : "Movies"} :
                </Title>
                <div className="flex gap-4 items-start">
                    <button disabled={isBeginning} ref={prevRef} className={cn("hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full  duration-300",
                        isBeginning ? "cursor-not-allowed" : "cursor-pointer"
                    )}><FaChevronLeft className={cn(isBeginning && "opacity-45")} /></button>
                    <button disabled={isEnd} ref={nextRef} className={cn("hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full  duration-300",
                        isEnd ? "cursor-not-allowed" : "cursor-pointer"
                    )}><FaChevronRight className={cn(isEnd && "opacity-45")} /></button>
                </div>
            </div>
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

                {related?.map((item) => (
                    <SwiperSlide>
                        <a
                            href={`/${type === "tv" ? "serie" : "movie"}/${item.id}`}
                        >
                            <Card movie={item} />
                        </a>


                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RelatedItems;
