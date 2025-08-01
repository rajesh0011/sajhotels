'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function ExploreSaj() {
  

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        pagination={false}
        breakpoints={{
          600: { slidesPerView: 1 },
          1000: { slidesPerView: 3 },
        }}
        className="n-hotel-slider"
      >
        {[
          {
            img: '/img/morning-walk-mountain-retreat.jpg',
            title: 'saj in the forest pench',
            text: 'Welcome New Year 2025 with exclusive offers, delightful experiences, and',
          },
          {
            img: '/img/vertical-shot-lake-trees-cloudy-day.jpg',
            title: 'saj by the lake malshej',
            text: 'Book your stay at The Clarks and get an impressive discount of 25% on the best available rates!',
          },
          {
            img: '/img/Layer-7.jpg',
            title: 'saj by the mountain mahabaleshwar',
            text: 'Experience the bliss of your romantic getaway with our exclusive package.',
          },
          // {
          //   img: '/img/hotel-male-maldives-outdoor-blue.jpg',
          //   title: 'hills, lakes, forests, beaches',
          //   text: 'Stay productive and comfortable with our Exclusive Business & Traveller',
          // },
          
          
        ].map((hotel, index) => (
          <SwiperSlide key={index}>
            <div className="winter-box shadow hotel-box">
              <Image src={hotel.img} alt={hotel.title} className="w-100 primary-radius" width={264}
                height={220}
                quality={75}
              />
              <div className="winter-box-content curated-packages">
                <div className="hotel-box-content">
                  <h3 className="winter-box-heading">{hotel.title}</h3>
                </div>
                <p className='display-block'>{hotel.text}</p>

                <div className="winter-box-btn">
                  <button href="#" className="box-btn know-more">Explore Now</button>
                  <button className="box-btn book-now">Book Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
