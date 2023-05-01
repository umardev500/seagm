import { MenuListing } from '@components/molecules'
import { useToggler } from '@hooks/useToggler'
import React, { useState } from 'react'
import { CardDropdownList, DirectTopUpDropdownList, GameDropdownList } from '..'

export const MenuList: React.FC = () => {
  const [gameShown, setGameShown] = useState(false)
  const [cardShown, setCardShown] = useState(false)
  const [directShown, setDirectShown] = useState(false)
  const gameToggler = useToggler({ setToggle: setGameShown, setToggleOther: [setCardShown, setDirectShown] })
  const cardToggler = useToggler({ setToggle: setCardShown, setToggleOther: [setGameShown, setDirectShown] })
  const directToggler = useToggler({ setToggle: setDirectShown, setToggleOther: [setGameShown, setCardShown] })

  return (
    <ul className="flex items-center">
      <MenuListing onDropdownToggle={gameToggler} title="Game" hasDropdown dropdownMenu={<GameDropdownList setShown={setGameShown} shown={gameShown} />} />
      <MenuListing onDropdownToggle={cardToggler} title="Card" hasDropdown dropdownMenu={<CardDropdownList setShown={setCardShown} shown={cardShown} />} />
      <MenuListing onDropdownToggle={directToggler} title="Direct Top-Up" hasDropdown dropdownMenu={<DirectTopUpDropdownList setShown={setDirectShown} shown={directShown} />} />
      <MenuListing title="Mobile Recharge" />
    </ul>
  )
}
