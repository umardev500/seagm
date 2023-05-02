import React from 'react'

interface Props {
  src: string
  startColor: string
  endColor: string
}

export const OfferListing: React.FC<Props> = ({
  src,
  startColor,
  endColor,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-clip">
      <div
        style={{
          ['--startColor' as string]: startColor,
          ['--endColor' as string]: endColor,
        }}
        className={`flex offer-top whitespace-nowrap rounded-2xl items-center gap-4 p-3`}
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

      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="manrope text-xs font-extrabold text-gray-white bg-green-700 text-white uppercase px-1.5 py-0.5 rounded-full">
          Promo
        </div>
        <div className="manrope text-xs font-extrabold text-gray-700">-15%</div>
      </div>
    </div>
  )
}
