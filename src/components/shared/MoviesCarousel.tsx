import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import MoviePost from './MoviePost';
import { useAppSelector } from '../../lib/hooks';

const MoviesCarousel = () => {
    const { popularMovies } = useAppSelector(state => state.movies.movies)


    return (
        <Swiper
            autoplay={{
                delay: 5000,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, EffectFade, Autoplay]} effect="fade" loop
            className="h-screen">
            {
                popularMovies.slice(0, 8).map((movie, index) => (
                    <SwiperSlide key={index} className="relative">
                        <MoviePost movie={{ details: movie }} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default MoviesCarousel
