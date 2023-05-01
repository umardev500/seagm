import type React from 'react'
import { useCallback } from 'react'

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const useToggler = ({ setToggle }: Props) => {
  const clickHandler = useCallback(() => {
    setToggle((prev) => !prev)
  }, [])

  return clickHandler
}
