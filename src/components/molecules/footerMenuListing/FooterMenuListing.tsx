import React from 'react'

interface Props {
  title: string
}

export const FooterMenuListing: React.FC<Props> = ({ title }) => {
  return (
    <a
      href="#"
      className="manrope whitespace-nowrap hover:underline text-xs font-semibold text-gray-500"
    >
      {title}
    </a>
  )
}
