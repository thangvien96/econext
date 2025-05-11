'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/slider-image/slider-1-1.jpg',
  '/images/slider-image/slider-2-2.jpg',
  '/images/slider-image/slider-2-2.jpg',
];

export default function BlogSlider() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <>
            <Swiper
            ref={sliderRef}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
            }
            }}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            loop
            className="w-full h-[650px]"
            >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div className="single-blog swiper-slide">
                        <div className="blog-image">
                            <a href="blog-single-left-sidebar.html">
                                <img src="/images/blog-image/1.jpg" className="img-responsive w-100" alt="" />
                            </a>
                        </div>
                        <div className="blog-text">
                            <div className="blog-athor-date">
                                <a className="blog-date" href="#">14 November</a>
                            </div>
                            <h5 className="blog-heading"><a className="blog-heading-link" href="blog-single-left-sidebar.html">Interior design is the art.</a></h5>
                            <p className="blog-detail-text">Lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididu ut labore et dolore magna aliqua.</p>

                            <a href="#" className="btn btn-lg btn-hover-color-primary btn-color-dark mt-25px">Read More</a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>

            {/* Custom Prev Button */}
            <button
                ref={prevRef}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                onClick={handlePrev}
            >
                <ChevronLeft />
            </button>

            {/* Custom Next Button */}
            <button
                ref={nextRef}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
                onClick={handleNext}
            >
                <ChevronRight />
            </button>
        </>
    );
}
