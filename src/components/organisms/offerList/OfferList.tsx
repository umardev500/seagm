import { OfferListing } from '@components/molecules'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const OfferList: React.FC = () => {
  return (
    <div id="offer-list" className="container lg:hidden m-auto mt-6 gap-4">
      <Swiper slidesPerView={'auto'}>
        <SwiperSlide>
          <OfferListing
            startColor="#475569"
            endColor="#cbd5e1"
            src="assets/thumbs/small/pubg.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#0e7490"
            endColor="#38bdf8"
            src="assets/thumbs/small/ncsoft.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#65a30d"
            endColor="#86efac"
            src="assets/thumbs/small/xbox.webp"
          />
        </SwiperSlide>

        <SwiperSlide>
          <OfferListing
            startColor="#4338ca"
            endColor="#a78bfa"
            src="assets/thumbs/small/nimo.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#374151"
            endColor="#9ca3af"
            src="assets/thumbs/small/ml.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#b45309"
            endColor="#fbbf24"
            src="assets/thumbs/small/mcash.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#0f766e"
            endColor="#2dd4bf"
            src="assets/thumbs/small/lord.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#65a30d"
            endColor="#86efac"
            src="assets/thumbs/small/zalando.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#475569"
            endColor="#cbd5e1"
            src="assets/thumbs/small/atom.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#be123c"
            endColor="#fb7185"
            src="assets/thumbs/small/cherry.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <OfferListing
            startColor="#9ca3af"
            endColor="#f3f4f6"
            src="assets/thumbs/small/minecraft.webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
