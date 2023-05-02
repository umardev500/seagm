import { OfferListing } from '@components/molecules'
import React from 'react'

export const OfferListDeskctop: React.FC = () => {
  return (
    <div className="container hidden lg:grid lg:grid-cols-5 m-auto mt-6 gap-4 flex-wrap">
      <OfferListing
        startColor="#475569"
        endColor="#cbd5e1"
        src="assets/thumbs/small/pubg.webp"
      />
      <OfferListing
        startColor="#0e7490"
        endColor="#38bdf8"
        src="assets/thumbs/small/ncsoft.webp"
      />
      <OfferListing
        startColor="#4338ca"
        endColor="#a78bfa"
        src="assets/thumbs/small/nimo.webp"
      />
      <OfferListing
        startColor="#374151"
        endColor="#9ca3af"
        src="assets/thumbs/small/ml.webp"
      />
      <OfferListing
        startColor="#b45309"
        endColor="#fbbf24"
        src="assets/thumbs/small/mcash.webp"
      />
      <OfferListing
        startColor="#0f766e"
        endColor="#2dd4bf"
        src="assets/thumbs/small/lord.webp"
      />
      <OfferListing
        startColor="#65a30d"
        endColor="#86efac"
        src="assets/thumbs/small/zalando.webp"
      />
      <OfferListing
        startColor="#475569"
        endColor="#cbd5e1"
        src="assets/thumbs/small/atom.webp"
      />
      <OfferListing
        startColor="#be123c"
        endColor="#fb7185"
        src="assets/thumbs/small/cherry.webp"
      />
      <OfferListing
        startColor="#9ca3af"
        endColor="#f3f4f6"
        src="assets/thumbs/small/minecraft.webp"
      />
    </div>
  )
}
