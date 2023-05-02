import React from 'react'

interface Props {
  thumb: string
}

export const PopularListing: React.FC<Props> = ({ thumb }) => {
  return (
    <div className="popular-item overflow-clip flex items-end justify-center">
      <img src={thumb} alt="thumbs" />
    </div>
  )
}
