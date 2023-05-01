import React from 'react'
import { MenuList } from '..'

export const Header: React.FC = () => {
  return (
    <header className="bg-white flex items-center header shadow-md shadow-gray-100">
      <nav className="container m-auto px-6 flex">
        <MenuList />
      </nav>
    </header>
  )
}
