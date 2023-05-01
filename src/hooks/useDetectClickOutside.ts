import { useEffect } from 'react'

interface Props {
  elem: React.RefObject<HTMLElement>
  setShown: React.Dispatch<React.SetStateAction<boolean>>
}

export const useDetectClickOutside = ({ elem, setShown }: Props) => {
  useEffect(() => {
    const elemEl = elem.current
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isToggler = target.dataset.toggle === 'dropdown'

      const hasElem = elemEl?.contains(target) ?? false
      if (!hasElem && !isToggler) setShown(false)
    }

    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [])
}
