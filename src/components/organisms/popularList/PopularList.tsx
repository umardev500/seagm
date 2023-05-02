import { PopularListing, PopularSection } from '@components/molecules'
import React from 'react'

export const PopularList: React.FC = () => {
  return (
    <div className="container m-auto mt-8">
      <PopularSection />

      <div className="grid grid-cols-7 pt-6 gap-4">
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
      </div>
    </div>
  )
}
