'use client';
import React from 'react';
import Link from 'next/link'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function SajBrandSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        loop={true}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          800: { slidesPerView: 2 },
          1000: { slidesPerView: 2 },
        }}
        className="brand-hotel-slider"
      >
        {[

          {
            img: '/img/professional-artisan-job-workshop.jpg',
            title: 'Saj by the Mountain Mahabaleshwar',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          },

          {
            img: '/img/4f165a8b55.jpg',
            title: 'Saj in the Forest Pench',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          },
          // {
          //   img: '/img/view-elephant-river.jpg',
          //   title: 'saj by the river',
          //   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          // },
          {
            img: '/img/morning-walk-mountain-retreat.jpg',
            title: 'Saj by the Lake Malshej',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          },

        ].map((hotel, index) => (
          <SwiperSlide key={index}>
            <div className="brand-box">
              <h6 className="brand-box-heading text-uppercase mb-3">{hotel.title}</h6>
              <Image
                src={hotel.img}
                alt={hotel.title}
                className="w-100"
                width={800}
                height={200}
              />
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
