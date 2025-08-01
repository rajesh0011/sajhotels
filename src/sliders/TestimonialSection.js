'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
export default function TestimonialSection() {
  const testimonials = [
    {
      image:'/img/back-view-girl-umbrella-walk-forest-near-lake-rainy-weather.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      rating: 4
    },
    {
      image:'/img/back-view-girl-umbrella-walk-forest-near-lake-rainy-weather.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      rating: 3
    },
    {
      image:'/img/back-view-girl-umbrella-walk-forest-near-lake-rainy-weather.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      rating: 5
    },
    {
      image:'/img/back-view-girl-umbrella-walk-forest-near-lake-rainy-weather.jpg',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      rating: 4
    },
  ];
  return (
    <section
      className="testimonial-section text-white" id="testimonials"
    >
      <div className="container">
        <h2 className="heading text-uppercase mb-3 text-center">Testimonials</h2>
        <div className='row'>
          <div className="col-md-6">
            <div className='testimonial-left-content'>
              <Image src="/img/Drone-Photos-0545-scaled-1.jpg" height={400} width={600} alt="Testimonial" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          direction={'vertical'}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="testimonial-swiper"
          style={{ height: '300px' }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="testimonial-item-box">
                  <Image
                    src={item.image}
                    alt="Quote Icon"
                    width={50}
                    height={50}
                  />
                  <p className="lead mb-2">{item.message}
                    <span className="rating d-block mt-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={10} fill="#FFD700" color="#FFD700" />
                      ))}
                    </span>
                  </p>
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
