import React from 'react'

interface Props {
  title: string
  icon?: string
}

export const DropdownListing: React.FC<Props> = ({
  title,
  icon = 'assets/icons/card-icon.png',
}) => {
  return (
    <a
      href="#"
      className="whitespace-nowrap dropdown-item flex items-center gap-4 manrope font-semibold text-gray-600 text-xs"
    >
      <div className="icon-container">
        <img src={icon} className="icon" alt="" />
      </div>
      <span>{title}</span>
    </a>
  )
}
