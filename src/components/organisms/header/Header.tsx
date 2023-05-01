import React from 'react'
import { MenuList } from '..'
import { HeaderRight } from '@components/molecules'

export const Header: React.FC = () => {
  return (
    <header className="bg-white flex items-center header shadow-md shadow-gray-100">
      <div className="container m-auto flex justify-between items-center">
        <nav className="px-6">
          <MenuList />
        </nav>

        <HeaderRight />
      </div>
    </header>
  )
}
