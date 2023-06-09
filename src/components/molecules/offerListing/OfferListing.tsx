import React from 'react'

interface Props {
  src: string
  startColor: string
  endColor: string
  className?: string
  title: string
  subTitle: string
}

export const OfferListing: React.FC<Props> = ({
  src,
  startColor,
  endColor,
  className = '',
  title,
  subTitle,
}) => {
  return (
    <div
      className={`offer-card ml-4 lg:ml-0 rounded-2xl overflow-clip ${className}`}
    >
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
            {title}
          </div>
          <div className="manrope font-2xs font-semibold text-white">
            {subTitle}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="manrope text-xs font-extrabold text-gray-white bg-lime-500 text-gray-800 uppercase px-1.5 py-0.5 rounded-full">
          Promo
        </div>
        <div className="manrope text-xs font-extrabold text-white">-15%</div>
      </div>
    </div>
  )
}
