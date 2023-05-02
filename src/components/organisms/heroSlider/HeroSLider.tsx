import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import { Keyboard, EffectFade } from 'swiper'

export const HeroSLider: React.FC = () => {
  return (
    <div className="hero-container container bg-red-100 m-auto px-5">
      <Swiper modules={[Keyboard, EffectFade]} slidesPerView={1.5} centeredSlides spaceBetween={24} initialSlide={1} keyboard={{ enabled: true }}>
        <SwiperSlide className="bg-green-100">
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/1.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/2.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/3.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/4.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/4.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/4.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/4.webp" alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover slider-img rounded-xl" src="assets/slider/4.webp" alt="slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
