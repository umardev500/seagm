import { mdiChevronDown } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'

interface Props {
  title: string
  hasDropdown?: boolean
  dropdownMenu?: React.ReactElement
  onDropdownToggle?: () => void
}

export const MenuListing: React.FC<Props> = ({
  title,
  hasDropdown = false,
  dropdownMenu,
  onDropdownToggle,
}) => {
  return (
    <li className="relative menu-item rounded-full px-2 cursor-pointer flex items-center gap-3">
      <a
        href="#"
        className={`py-2.5 ${
          !hasDropdown ? 'px-4' : 'pl-4'
        } flex whitespace-nowrap text-white uppercase manrope text-xs font-extrabold`}
      >
        {title}
      </a>
      {hasDropdown ? (
        <>
          <span
            data-toggle="dropdown"
            onClick={onDropdownToggle}
            className="dropdown-icon hover:bg-sky-500 text-white hover:text-white flex items-center justify-center transition duration-200 rounded-full"
          >
            <Icon path={mdiChevronDown} />
          </span>
          {dropdownMenu}
        </>
      ) : null}
    </li>
  )
}
