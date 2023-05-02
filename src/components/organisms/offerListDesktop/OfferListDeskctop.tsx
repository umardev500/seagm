import { OfferListing } from '@components/molecules'
import React, { useState } from 'react'
import { type Offers } from 'types/offers'
import data from './offers.json'

export const OfferListDeskctop: React.FC = () => {
  const [offers] = useState<Offers[]>(data)

  return (
    <div className="container hidden lg:grid lg:grid-cols-5 m-auto mt-6 gap-4 flex-wrap">
      {offers.map((val, i) => (
        <OfferListing
          key={i}
          title={val.title}
          subTitle={val.subTitle}
          startColor={val.startColor}
          endColor={val.endColor}
          src={val.icon}
        />
      ))}
    </div>
  )
}
