import React from 'react'
import { SearchForm } from './SearchForm'

export const HeaderRight: React.FC = () => {
  return (
    <div className="flex items-center gap-5 text-xs font-extrabold">
      <SearchForm />
      <a href="#" className="whitespace-nowrap hidden lg:flex text-white">
        Sign In / Sign up
      </a>
    </div>
  )
}
