import React from 'react'

interface Props {
  image: string
}

export const PopularListingV2: React.FC<Props> = ({ image }) => {
  return (
    <div className="card relative" style={{ backgroundImage: `url(${image})` }}>
      {/* <img src={image} alt="" /> */}
    </div>
  )
}
