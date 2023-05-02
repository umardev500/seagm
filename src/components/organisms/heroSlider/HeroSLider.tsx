import { SliderNavigation } from '@components/molecules'
import React from 'react'
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

export const HeroSLider: React.FC = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="hero-container lg:px-0 container m-auto rounded-xl overflow-clip relative">
        <Swiper
          autoplay={{ delay: 5700 }}
          loop
          modules={[Keyboard, EffectFade, Autoplay, Navigation, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          centeredSlides
          spaceBetween={24}
          initialSlide={6}
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
            <picture>
              <source
                srcSet="assets/slider/small/1.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="assets/slider/medium/1.webp"
                media="(max-width: 1280px)"
              />
              <img
                className="w-full object-cover slider-img rounded-xl"
                src="assets/slider/1.webp"
                alt="slider"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                srcSet="assets/slider/small/2.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="assets/slider/medium/2.webp"
                media="(max-width: 1280px)"
              />
              <img
                className="w-full object-cover slider-img rounded-xl"
                src="assets/slider/2.webp"
                alt="slider"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                srcSet="assets/slider/small/3.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="assets/slider/medium/3.webp"
                media="(max-width: 1280px)"
              />
              <img
                className="w-full object-cover slider-img rounded-xl"
                src="assets/slider/3.webp"
                alt="slider"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                srcSet="assets/slider/small/4.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="assets/slider/medium/4.webp"
                media="(max-width: 1280px)"
              />
              <img
                className="w-full object-cover slider-img rounded-xl"
                src="assets/slider/4.webp"
                alt="slider"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                srcSet="assets/slider/small/5.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="assets/slider/medium/5.webp"
                media="(max-width: 1280px)"
              />
              <img
                className="w-full object-cover slider-img rounded-xl"
                src="assets/slider/5.webp"
                alt="slider"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                srcSet="assets/slider/small/6.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="assets/slider/medium/6.webp"
                media="(max-width: 1280px)"
              />
              <img
                className="w-full object-cover slider-img rounded-xl"
                src="assets/slider/6.webp"
                alt="slider"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source
                srcSet="assets/slider/small/7.webp"
                media="(max-width: 640px)"
              />
              <source
                srcSet="assets/slider/medium/7.webp"
                media="(max-width: 1280px)"
              />
              <img
                className="w-full object-cover slider-img rounded-xl"
                src="assets/slider/7.webp"
                alt="slider"
              />
            </picture>
          </SwiperSlide>

          <SliderNavigation />
        </Swiper>
      </div>
    </div>
  )
}
