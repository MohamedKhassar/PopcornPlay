import { Swiper, SwiperSlide } from "swiper/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Navigation } from "swiper/modules"
import useMediaQuery from "../../features/UseMediaQuery"
import SwiperCore from 'swiper';
import { cn } from "../../lib/cn"
import { useRef, useState } from "react";
import { MovieCredits, MovieType } from "../../lib/types";
import ProductionCompanies from "./ProductionCompanies";
import Title from "./Title";
const CrewDetails = ({ details, credits }: { details: MovieType, credits: MovieCredits }) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const isXSmallScreen = useMediaQuery("(max-width: 580px)"); // Tailwind's `sm` breakpoint
    const isSmallScreen = useMediaQuery("(max-width: 780px)"); // Tailwind's `sm` breakpoint
    const isMediumScreen = useMediaQuery("(max-width: 1400px)"); // Tailwind's `md` breakpoint
    const slidesToScroll = isXSmallScreen ? 1 : isSmallScreen ? 2 : isMediumScreen ? 3 : 5;
    const handleSwiper = (swiper: SwiperCore) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };
    return (
        <section className={cn("xl:max-w-[109rem] xl:mx-auto md:mx-20 mx-5 py-15 md:space-y-10 space-y-8",
        )}>
            <div className="space-y-5">
                <Title>
                    overview :
                </Title>
                <p className="lg:text-lg text-sm max-md:text-justify font-medium md:mx-6 mx-4 lg:max-w-5xl text-gray-400">
                    {details.overview}
                </p>
            </div>
            {(details.created_by?.length > 0 || credits.crew?.filter(item => item.job === "Director")?.length > 0) &&
                <div className="space-y-5">
                    <Title>
                        directed by :
                    </Title>
                    <div className="flex gap-x-10 gap-y-5 mx-4 flex-wrap">
                        {
                            details.created_by && details.created_by.length > 0
                                ? details.created_by.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 transition-colors duration-300 hover:bg-blue-950/70 py-3 px-5 cursor-pointer rounded-3xl"
                                    >
                                        <img
                                            src={
                                                item?.profile_path
                                                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                                                    : `https://static.vecteezy.com/system/resources/previews/009/292/244/large_2x/default-avatar-icon-of-social-media-user-vector.jpg`
                                            }
                                            loading="lazy"
                                            alt={item.name}
                                            className="size-16 rounded-full object-cover"
                                        />
                                        <div>
                                            <h1 className="md:text-xl">{item.name}</h1>
                                            <p className="text-sm text-gray-500">
                                                {credits.crew.find((person) => person.id === item.id)?.department}
                                            </p>
                                        </div>
                                    </div>
                                ))
                                : credits.crew
                                    .filter((item) => item.job === "Director")
                                    .map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 transition-colors duration-300 hover:bg-blue-950/70 py-3 px-5 cursor-pointer rounded-3xl"
                                        >
                                            <img
                                                src={
                                                    item?.profile_path
                                                        ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                                                        : `https://static.vecteezy.com/system/resources/previews/009/292/244/large_2x/default-avatar-icon-of-social-media-user-vector.jpg`
                                                }
                                                loading="lazy"
                                                alt={item.name}
                                                className="size-16 rounded-full object-cover"
                                            />
                                            <div>
                                                <h1 className="md:text-xl">{item.name}</h1>
                                                <p className="text-sm text-gray-500">{item.department}</p>
                                            </div>
                                        </div>
                                    ))
                        }

                    </div>
                </div>
            }
            {credits.cast?.length > 0 &&
                <div className="space-y-5">
                    <div className="flex justify-between items-center">
                        <Title>
                            actors :
                        </Title>
                        <div className="flex gap-4 items-start">
                            <button disabled={isBeginning} ref={prevRef} className={cn("hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full cursor-pointer duration-300",
                                isBeginning && "cursor-not-allowed"
                            )}><FaChevronLeft className={cn(isBeginning && "opacity-45")} /></button>
                            <button disabled={isEnd} ref={nextRef} className={cn("hover:bg-slate-600/30 active:bg-slate-600/50 p-3 rounded-full cursor-pointer duration-300",
                                isEnd && "cursor-not-allowed"
                            )}><FaChevronRight className={cn(isEnd && "opacity-45")} /></button>
                        </div>

                    </div>
                    <Swiper
                        onSwiper={handleSwiper}
                        onSlideChange={handleSwiper}
                        onInit={handleSwiper}
                        onResize={handleSwiper}
                        onReachBeginning={() => setIsBeginning(true)}
                        onReachEnd={() => setIsEnd(true)}
                        slidesPerView={slidesToScroll}
                        spaceBetween={slidesToScroll === 5 ? 30 : slidesToScroll === 3 ? 10 : slidesToScroll === 2 ? 5 : 0}
                        navigation={{
                            nextEl: nextRef.current,
                            prevEl: prevRef.current,
                        }}
                        modules={[Navigation]}
                        effect="fade"
                        className="flex gap-10 !mx-4">
                        {
                            credits.cast?.slice(0, 10).map((item, index) =>
                                <SwiperSlide>
                                    <div key={index} className="flex items-center gap-4 transition-colors duration-300 hover:bg-blue-950/70 py-3 px-5 cursor-pointer rounded-3xl select-none">
                                        <img src={item?.profile_path ? `https://image.tmdb.org/t/p/original${item?.profile_path}` : `https://static.vecteezy.com/system/resources/previews/009/292/244/large_2x/default-avatar-icon-of-social-media-user-vector.jpg`} loading="lazy" alt={item.name} className="size-16 rounded-full object-cover" />
                                        <div>
                                            <h1 className="text-lg">{item.name}</h1>
                                            <p className="text-sm text-gray-500">{item.character}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        }
                    </Swiper>
                </div>
            }
            <ProductionCompanies details={details} />
        </section>
    )
}

export default CrewDetails