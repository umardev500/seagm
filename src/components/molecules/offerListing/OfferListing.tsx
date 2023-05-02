import React from 'react'

interface Props {
  src: string
}

export const OfferListing: React.FC<Props> = ({ src }) => {
  return (
    <div>
      <div
        data-item-theme="756"
        className="flex offer-top whitespace-nowrap rounded-2xl items-center gap-4 p-3"
      >
        <img className="w-14 h-14 rounded-lg" src={src} alt="" />
        <div className="flex flex-col gap-0.5">
          <div className="manrope font-extrabold text-white text-xs">
            1500 + 300 UC
          </div>
          <div className="manrope font-2xs font-semibold text-white">
            PUBG Mobile UC (MY)
          </div>
        </div>
      </div>
    </div>
  )
}
