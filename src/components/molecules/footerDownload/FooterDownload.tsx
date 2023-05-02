import React from 'react'

export const FooterDownload: React.FC = () => {
  return (
    <div className="p-4 download-card rounded-xl flex items-center gap-4">
      <img
        className="w-12 w-12 lg:w-14 lg:h-14"
        src="assets/icons/mascot.webp"
        alt=""
      />
      <div>
        <div className="text-white manrope text-xs lg:text-sm font-extrabold">
          SEAGM in your pocket
        </div>
        <div className="text-red-200 text-xs manrope mt-1">
          Get tha App Today!
        </div>
      </div>
    </div>
  )
}
