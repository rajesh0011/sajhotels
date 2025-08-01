  import React from 'react';
  import Link from 'next/link';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Autoplay, Navigation, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import Image from 'next/image';
  export default function StorySlider() {
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
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
            600: { slidesPerView: 1 },
            800: { slidesPerView: 1 },
            1000: { slidesPerView: 1 },
          }}
          className="n-hotel-slider"
        >
          {[

            {
              img: '/img/breakfast-wooden-table-with-natural-view.jpg',
              title: 'Why Saj Resort Is Unique',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
            },

            {
              img: '/img/breakfast-wooden-table-with-natural-view.jpg',
              title: 'Why Saj Resort Is Unique',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
            },
          

          ].map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className='row' key={`row-${index}`}>
                <div className='col-md-8'>
                  <div className="hotel-slider-image">
                    <Image
                      src={hotel.img}
                      alt={hotel.title}
                      className="w-100"
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
                <div className='col-md-4 align-self-center'>
                    <div className="story-right-content">
                      <div className="hotel-box-content">
                        <h3 className="winter-box-heading">{hotel.title}</h3>
                      </div>
                      <p className="display-block">{hotel.text}</p>
                      <div className="winter-box-btn">
                        <Link href="#" target="_blank" className="box-btn book-now">Read More</Link>
                      </div>
                    </div>
                  </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </>
    );
  }
