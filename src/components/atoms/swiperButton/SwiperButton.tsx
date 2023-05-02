import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

interface Props {
  isNext?: boolean
  swiperId: string
}

export const SwiperButton: React.FC<Props> = ({ isNext = false, swiperId }) => {
  return (
    <div
      id={swiperId}
      className="swiper-button cursor-pointer pointer-events-auto flex items-center justify-center"
    >
      {!isNext ? (
        <Icon path={mdiChevronLeft} size={'24px'} className="cursor-pointer" />
      ) : (
        <Icon path={mdiChevronRight} size={'24px'} className="cursor-pointer" />
      )}
    </div>
  )
}
