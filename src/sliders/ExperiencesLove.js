'use client';
import React from 'react';
import Link from 'next/link'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function ExperiencesLove() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          800: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="n-hotel-slider main-expericence-slider"
      >
        {[

          {
            img: '/img/professional-artisan-job-workshop.jpg',
            title: 'Golf Tour',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          },

          {
            img: '/img/4f165a8b55.jpg',
            title: 'Experience',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          },
          {
            img: '/img/view-elephant-river.jpg',
            title: 'Experience',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          },
          {
            img: '/img/morning-walk-mountain-retreat.jpg',
            title: 'Experience',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
          },

        ].map((hotel, index) => (
          <SwiperSlide key={index}>
            <div className="winter-box2 shadow hotel-box experience-slider-box">
              <Image
                src={hotel.img}
                alt={hotel.title}
                className="w-100"
                width={800}
                height={500}
              />
              {/* <div className="winter-box-content2">
                <div className="hotel-box-content">
                  <h3 className="winter-box-heading">{hotel.title}</h3>
                </div>
                <p className="display-block">{hotel.text}</p>
                <div className="winter-box-btn">
                  <Link href="#" target="_blank" className="box-btn book-now">Read More</Link>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
