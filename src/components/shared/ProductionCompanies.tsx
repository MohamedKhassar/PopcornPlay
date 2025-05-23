import { Swiper, SwiperSlide } from "swiper/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Navigation } from "swiper/modules"
import { cn } from "../../lib/cn"
import { useRef, useState } from "react"
import useMediaQuery from "../../features/UseMediaQuery"
import SwiperCore from 'swiper'
import { MovieType } from "../../lib/types"
const ProductionCompanies = ({ details }: { details: MovieType }) => {
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
        <>
            {
                details.production_companies?.length>0 &&

                <div className="space-y-5">
                    <div className="flex justify-between items-center">
                        <div className="flex items-stretch gap-2">
                            <span className="lg:w-1.5 w-1 rounded-full bg-blue-600"></span>
                            <h1 className="capitalize lg:text-2xl md:text-xl text-lg"><strong>production companies :</strong></h1>
                        </div>
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
                        className="flex gap-10 mx-4">
                        {
                            details.production_companies?.slice(0, 10).map((item, index) =>
                                <SwiperSlide>
                                    <div key={index} className="flex items-center gap-3 transition-colors duration-300 hover:bg-blue-950/70 py-3 px-5 cursor-pointer rounded-3xl select-none">
                                        <img src={item?.logo_path ? `https://image.tmdb.org/t/p/original${item?.logo_path}` : `https://img.freepik.com/premium-photo/minimal-light-color-gradient-background_558873-54605.jpg?w=1380`} loading="lazy" alt={item.name} className="aspect-video w-1/2 object-center object-contain rounded-lg bg-white px-0.5" />
                                        <div>
                                            <h1 className="">{item.name}</h1>
                                            {item.origin_country &&
                                                <p className="text-sm text-gray-500"><span className={`fi fi-${item.origin_country.toLowerCase()}`}></span></p>
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        }
                    </Swiper>
                </div >
            }
        </>
    )
}

export default ProductionCompanies