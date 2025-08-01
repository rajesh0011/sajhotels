import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const VerticleSlider = () => {
  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      image: 'https://picsum.photos/400/300?random=1',
      description: 'This is the first slide description'
    },
    {
      id: 2,
      title: 'Slide 2',
      image: 'https://picsum.photos/400/300?random=2',
      description: 'This is the second slide description'
    },
    {
      id: 3,
      title: 'Slide 3',
      image: 'https://picsum.photos/400/300?random=3',
      description: 'This is the third slide description'
    },
    {
      id: 4,
      title: 'Slide 4',
      image: 'https://picsum.photos/400/300?random=4',
      description: 'This is the fourth slide description'
    }
  ]

  return (
    <div style={{ height: '500px' }}>
      <h2>Vertical Slider</h2>
      <Swiper
        direction={'vertical'}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        style={{ height: '100%' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={{ textAlign: 'center' }}>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default VerticleSlider
