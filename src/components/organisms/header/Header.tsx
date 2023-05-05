import React, { useEffect, useRef } from 'react'
import { MenuList } from '..'
import { HeaderRight, HeaderRightMini } from '@components/molecules'
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'

const HEADER_HEIGT = 97
const NO_MAX_CLASS = 'header-no-max-w'

export const Header: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const innerEl = innerRef.current
    const scrollHandler = () => {
      const currentScroll = window.scrollY
      if (innerEl !== undefined) {
        const hasMaxClass = innerEl?.classList.contains(NO_MAX_CLASS) ?? false
        if (currentScroll >= HEADER_HEIGT) {
          if (!hasMaxClass) innerEl?.classList.add(NO_MAX_CLASS)
        } else {
          if (hasMaxClass) innerEl?.classList.remove(NO_MAX_CLASS)
        }
      }
    }

    window.addEventListener('scroll', scrollHandler)
  }, [])

  return (
    <header className="px-4 flex items-center header">
      <div
        ref={innerRef}
        className="container header-inner m-auto flex justify-between items-center"
      >
        <div className="lg:hidden text-white cursor-pointer">
          <Icon path={mdiMenu} size={'24px'} />
        </div>

        <nav className="hidden lg:flex items-center gap-2">
          <a href="#" className="logo hidden lg:block"></a>
          <MenuList />
        </nav>

        <HeaderRight />
        <HeaderRightMini />
      </div>
    </header>
  )
}
