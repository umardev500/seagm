import React from 'react'
import { MenuList } from '..'
import { HeaderRight, HeaderRightMini } from '@components/molecules'
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'

export const Header: React.FC = () => {
  return (
    <header className="bg-white px-4 flex items-center header shadow-md shadow-gray-100">
      <div className="container m-auto flex justify-between items-center">
        <div className="lg:hidden text-gray-600 cursor-pointer">
          <Icon path={mdiMenu} size={'24px'} />
        </div>

        <nav className="px-6 hidden lg:flex">
          <MenuList />
        </nav>

        <HeaderRight />
        <HeaderRightMini />
      </div>
    </header>
  )
}
