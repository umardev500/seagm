import { SliderNavigation } from '@components/molecules'
import React from 'react'
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

export const HeroSLider: React.FC = () => {
  return (
    <div className="hero-container px-4 lg:px-0 container m-auto rounded-xl overflow-clip relative">
      <Swiper
        autoplay={{ delay: 5700 }}
        loop
        modules={[Keyboard, EffectFade, Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        centeredSlides
        spaceBetween={24}
        initialSlide={2}
        keyboard={{ enabled: true }}
        navigation={{
          prevEl: '#navLeft',
          nextEl: '#navRight',
        }}
        breakpoints={{
          1024: {
            slidesPerView: 1.5,
          },
        }}
      >
        <SwiperSlide>
          <img
            className="w-full object-cover slider-img rounded-xl"
            src="assets/slider/1.webp"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover slider-img rounded-xl"
            src="assets/slider/2.webp"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              srcSet="assets/slider/small/3.webp"
              media="(max-width: 640px)"
            />
            <img
              className="w-full object-cover slider-img rounded-xl"
              src="assets/slider/3.webp"
              alt="slider"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover slider-img rounded-xl"
            src="assets/slider/4.webp"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover slider-img rounded-xl"
            src="assets/slider/4.webp"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover slider-img rounded-xl"
            src="assets/slider/4.webp"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover slider-img rounded-xl"
            src="assets/slider/4.webp"
            alt="slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-cover slider-img rounded-xl"
            src="assets/slider/4.webp"
            alt="slider"
          />
        </SwiperSlide>

        <SliderNavigation />
      </Swiper>
    </div>
  )
}
