import { MenuListing } from '@components/molecules'
import { useToggler } from '@hooks/useToggler'
import React, { useState } from 'react'
import { CardDropdownList, GameDropdownList } from '..'

export const MenuList: React.FC = () => {
  const [gameShown, setGameShown] = useState(false)
  const [cardShown, setCardShown] = useState(false)
  const gameToggler = useToggler({ setToggle: setGameShown })
  const cardToggler = useToggler({ setToggle: setCardShown })

  return (
    <ul className="flex items-center">
      <MenuListing onDropdownToggle={gameToggler} title="Game" hasDropdown dropdownMenu={<GameDropdownList setShown={setGameShown} shown={gameShown} />} />
      <MenuListing onDropdownToggle={cardToggler} title="Card" hasDropdown dropdownMenu={<CardDropdownList setShown={setCardShown} shown={cardShown} />} />
      {/* <MenuListing title="Direct Top-Up" hasDropdown dropdownMenu={<CardDropdownList setShown={setCardShown} />} /> */}
      <MenuListing title="Mobile Recharge" />
    </ul>
  )
}
