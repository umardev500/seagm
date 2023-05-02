import { OfferListing } from '@components/molecules'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Offers } from 'types/offers'
import data from './offers.json'

export const OfferList: React.FC = () => {
  const [offers] = useState<Offers[]>(data)

  return (
    <div id="offer-list" className="container lg:hidden m-auto mt-6 gap-4">
      <Swiper slidesPerView={'auto'}>
        {offers.map((val, i) => (
          <SwiperSlide key={i}>
            <OfferListing
              startColor={val.startColor}
              endColor={val.endColor}
              src={val.icon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
