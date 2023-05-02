import { PopularListing, PopularSection } from '@components/molecules'
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react'

export const PopularList: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null)

  useEffect(() => {
    const el = swiperRef.current as unknown as HTMLElement
    const wrapper = el.querySelector('.swiper-wrapper')
    wrapper?.classList.add('popular-list-wrapper')

    const resizeHandler = () => {
      const w = window.innerWidth
      if (w >= 1024) {
        swiperRef.current?.swiper.slideTo(0)
        swiperRef.current?.swiper.disable()
      } else {
        swiperRef.current?.swiper.enable()
      }
    }

    resizeHandler()

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <div className="container m-auto mt-8">
      <PopularSection />

      {/* <div className="grid grid-cols-7 pt-6 gap-4">
        <PopularListing thumb="assets/thumbs/PUBGM-icon.jpg" />
        <PopularListing thumb="assets/thumbs/PB-icon.jpg" />
        <PopularListing thumb="assets/thumbs/RagnarokM-icon.jpg" />
        <PopularListing thumb="assets/thumbs/SaintSeiya-icon.jpg" />
        <PopularListing thumb="assets/thumbs/Roblox-icon.jpg" />
        <PopularListing thumb="assets/thumbs/SausageMan-icon.jpg" />
        <PopularListing thumb="assets/thumbs/SpeedDrifters-icon.jpg" />

        <PopularListing thumb="assets/thumbs/MobileLegend-icon.jpg" />
        <PopularListing thumb="assets/thumbs/LifeAfter-icon.jpg" />
        <PopularListing thumb="assets/thumbs/FreeFire-icon.jpg" />
        <PopularListing thumb="assets/thumbs/COD-icon.jpg" />
      </div> */}

      <div id="popular-list" className="mt-6">
        <Swiper
          ref={swiperRef}
          loopedSlides={3}
          spaceBetween={16}
          slidesPerView={'auto'}
        >
          <SwiperSlide className="ml-4 lg:ml-0">
            <PopularListing thumb="assets/thumbs/PUBGM-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/PB-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/RagnarokM-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/SaintSeiya-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/Roblox-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/SausageMan-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/SpeedDrifters-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/MobileLegend-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/LifeAfter-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/FreeFire-icon.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <PopularListing thumb="assets/thumbs/COD-icon.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
