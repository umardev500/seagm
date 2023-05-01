import type React from 'react'
import { useCallback } from 'react'

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  setToggleOther?: Array<React.Dispatch<React.SetStateAction<boolean>>>
}

export const useToggler = ({ setToggle, setToggleOther }: Props) => {
  const clickHandler = useCallback(() => {
    setToggle((prev) => !prev)
    setToggleOther?.forEach((val) => {
      val(false)
    })
  }, [])

  return clickHandler
}
