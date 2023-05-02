import { SwiperButton } from '@components/atoms'
import React from 'react'

export const SliderNavigation: React.FC = () => {
  return (
    <div className="flex justify-between z-10 pointer-events-none gap-6 absolute top-0 right-0 bottom-0 left-0">
      <SwiperButton swiperId="navLeft" />
      <SwiperButton swiperId="navRight" isNext />
    </div>
  )
}
