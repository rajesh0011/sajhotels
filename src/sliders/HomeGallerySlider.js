'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function HomeGallerySlider() {

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          enabled: true
        }}
        speed={5000}
        allowTouchMove={false}
        navigation={true}
        pagination={false}
        breakpoints={{
          600: { slidesPerView: 1 },
          1000: { slidesPerView: 4 },
        }}
        className="n-hotel-slider"
      >
        {[
          {
            imgtop: '/img/back-view-girl-umbrella-walk-forest-near-lake-rainy-weather.jpg',
            imgbot:'/img/breakfast-wooden-table-with-natural-view.jpg',
          },
           {
            imgtop: '/img/4f165a8b55.jpg',
            imgbot:'/img/2151914738.jpg',
          },
           {
            imgtop: '/img/banner-image.jpg',
            imgbot:'/img/Drone-Photos-0545-scaled-1.jpg',
          },
           {
            imgtop: '/img/hotel-male-maldives-outdoor-blue.jpg',
            imgbot:'/img/Layer-7.jpg',
          },
           {
            imgtop: '/img/Layer-8.jpg',
            imgbot:'/img/morning-walk-mountain-retreat.jpg',
          },
          {
            imgtop: '/img/professional-artisan-job-workshop.jpg',
            imgbot:'/img/Saj-by-the-lake-Photos-111136-scaled-1.jpg',
          },
          
          
        ].map((hotel, index) => (
          <SwiperSlide key={index}>
            <div className="winter-box hotel-box">
              <Image src={hotel.imgtop} alt="gallery images" className="w-100 primary-radius mb-1" width={500}
                height={220}
                quality={100}
              />
              <Image src={hotel.imgbot} alt="gallery images" className="w-100 primary-radius" width={500}
                height={220}
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </>
  );
}
