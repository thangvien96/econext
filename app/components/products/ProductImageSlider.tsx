'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import Image from 'next/image';

// const images = [
//   '/images/product-image/1.jpg',
//   '/images/product-image/2.jpg',
//   '/images/product-image/3.jpg',
//   '/images/product-image/4.jpg',
//   '/images/product-image/5.jpg',
// ];

export default function ProductImageSlider({ gallery } : {
    gallery : {
        url : string,
        formats: {
          small: {
            url : string
          },
          thumbnail: {
            url : string
          }
        }
    }[]
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Ảnh chính */}
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mb-4 rounded-lg overflow-hidden"
      >
        {gallery.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_BASE_API}${src.formats.small.url}`}
              alt={`Image ${index}`}
              width={500}
              height={500}
              className="object-contain w-full h-[400px] bg-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        modules={[Thumbs]}
        className="rounded-lg"
      >
        {gallery.map((src, index) => (
          <SwiperSlide key={index} className="cursor-pointer border rounded">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_BASE_API}${src.formats.thumbnail.url}`}
              alt={`Thumb ${index}`}
              width={80}
              height={80}
              className="object-cover w-full h-[80px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
