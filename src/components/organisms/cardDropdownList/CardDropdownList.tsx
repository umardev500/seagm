import { DropdownListing } from '@components/molecules'
import { useDetectClickOutside } from '@hooks/useDetectClickOutside'
import React, { useRef } from 'react'

interface Props {
  shown: boolean
  setShown: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardDropdownList: React.FC<Props> = ({ shown, setShown }) => {
  const elemRef = useRef<HTMLDivElement>(null)
  useDetectClickOutside({ elem: elemRef, setShown })

  return (
    <div
      ref={elemRef}
      className={`dropdown-menu ${
        shown ? 'shown' : ''
      } bg-white grid grid-cols-2 absolute gap-4 rounded-xl p-6`}
    >
      <DropdownListing title="Game Cards" icon="assets/icons/icon-1.png" />
      <DropdownListing title="Mobile Game Cards" />
      <DropdownListing
        title="Payment Cards"
        icon="assets/icons/icon-wallet.png"
      />
      <DropdownListing title="Gift Cards" icon="assets/icons/gift-icon.png" />
      <DropdownListing
        title="Game Console"
        icon="assets/icons/console-icon.png"
      />
      <DropdownListing
        title="Game CD Key"
        icon="assets/icons/card-icon-2.png"
      />
      <DropdownListing title="Shopping" icon="assets/icons/shop-bag-icon.png" />
    </div>
  )
}
