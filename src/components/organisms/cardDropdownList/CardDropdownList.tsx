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
    <div ref={elemRef} className={`dropdown-menu ${shown ? 'shown' : ''} bg-white grid grid-cols-2 absolute gap-2 rounded-xl p-6`}>
      <DropdownListing title="Mobile Game Cards" />
    </div>
  )
}
