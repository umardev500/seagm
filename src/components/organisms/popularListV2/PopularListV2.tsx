import { PopularListingV2, PopularSection } from '@components/molecules'
import React from 'react'

export const PopularListV2: React.FC = () => {
  return (
    <div className="container px-4 lg:px-0 m-auto mt-6 popular-list-v2">
      <PopularSection />
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9 gap-4 z-50 relative">
        <PopularListingV2 image="assets/thumbs/PUBGM-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/Genshin-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/LifeAfter-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/MobileLegend-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/LordsM-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/FreeFire-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/COD-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/AOV-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/DragonRaja-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/LightOfThei-icon.jpg" />
        <PopularListingV2 image="assets/thumbs/BeTheKing-icon.jpg" />
      </div>
    </div>
  )
}
