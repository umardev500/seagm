import { MenuListing } from '@components/molecules'
import { useToggler } from '@hooks/useToggler'
import React, { useState } from 'react'
import { CardDropdownList } from '..'

export const MenuList: React.FC = () => {
  const [cardShown, setCardShown] = useState(false)
  const cardToggler = useToggler({ setToggle: setCardShown })

  return (
    <ul className="flex items-center">
      {/* <MenuListing ref={gameToggleRef} title="Game" hasDropdown dropdownMenu={<CardDropdownList />} /> */}
      <MenuListing onDropdownToggle={cardToggler} title="Card" hasDropdown dropdownMenu={<CardDropdownList setShown={setCardShown} shown={cardShown} />} />
      {/* <MenuListing title="Direct Top-Up" hasDropdown dropdownMenu={<CardDropdownList setShown={setCardShown} />} /> */}
      <MenuListing title="Mobile Recharge" />
    </ul>
  )
}
