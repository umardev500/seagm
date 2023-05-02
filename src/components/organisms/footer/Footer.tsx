import React from 'react'
import {
  AboutMenuList,
  LegalMenuList,
  PartnersMenuList,
  ShoppingMenuList,
} from '..'

export const Footer: React.FC = () => {
  return (
    <footer className="pt-10 pb-10">
      <div className="container m-auto border-t pt-8">
        {/* payment method */}
        <div className="flex gap-4">
          <img className="w-auto h-5" src="assets/icons/ovo.webp" alt="ovo" />
          <img
            className="w-auto h-5"
            src="assets/icons/linkaja.webp"
            alt="linkaja"
          />
          <img
            className="w-auto h-5"
            src="assets/icons/visa-master-card.webp"
            alt="visa-mastercard"
          />
          <img className="w-auto h-5" src="assets/icons/dana.webp" alt="dana" />
          <img
            className="w-auto h-5"
            src="assets/icons/atome.webp"
            alt="atome"
          />
        </div>
        {/* Menu */}
        <div className="flex gap-11">
          <AboutMenuList />
          <ShoppingMenuList />
          <LegalMenuList />
          <PartnersMenuList />
        </div>
      </div>
    </footer>
  )
}
