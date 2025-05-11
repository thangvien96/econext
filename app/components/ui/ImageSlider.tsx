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
];

export default function ImageSlider() {
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
            slidesPerView={1}
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
                    <div className="hero-slide-item slider-height-2 swiper-slide d-flex">
                        <div className="hero-bg-image">
                            <img src={src} alt="" />
                        </div>
                        <div className="container align-self-center">
                            <div className="row justify-content-center">
                                <div className="col-md-8 offset-2 align-self-center m-auto">
                                    <div className="hero-slide-content hero-slide-content-2 slider-animated-1 text-center">
                                        <span className="category">New Products</span>
                                        <h2 className="title-1">Flexible Sofa Set</h2>
                                        <p className="w-100">Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna</p>
                                        <a href="#" className="btn btn-lg btn-primary btn-hover-dark mt-5">Mua ngay</a>
                                    </div>
                                </div>
                            </div>
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
