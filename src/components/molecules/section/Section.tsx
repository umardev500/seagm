import React from 'react'

interface Props {
  title: string
  subTitle?: string
}

export const Section: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className="container gap-2 px-4 lg:px-0 m-auto mt-6 flex items-center justify-between">
      <div>
        <h3 className="uppercase whitespace-nowrap manrope font-bold text-lg lg:text-2xl text-white">
          {title}
        </h3>
        <p className="mt-0.5 font-2xs lg:text-xs text-white manrope font-medium">
          {subTitle}
        </p>
      </div>

      <a
        href="#"
        className="bg-gray-900 whitespace-nowrap text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full manrope text-xs font-extrabold hover:shadow-lg"
      >
        View more
      </a>
    </div>
  )
}
