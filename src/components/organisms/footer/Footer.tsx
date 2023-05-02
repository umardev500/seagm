import { FooterCopy, FooterDownload } from '@components/molecules'
import React from 'react'
import {
  AboutMenuList,
  FooterSocialList,
  LegalMenuList,
  PartnersMenuList,
  ShoppingMenuList,
} from '..'

export const Footer: React.FC = () => {
  return (
    <footer className="pt-10 pb-10">
      <div className="container justify-between px-4 lg:px-0 flex flex-wrap gap-6 items-start m-auto border-t pt-8">
        {/* left */}
        <div>
          {/* payment method */}
          <div className="flex flex-wrap gap-4">
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
            <img
              className="w-auto h-5"
              src="assets/icons/dana.webp"
              alt="dana"
            />
            <img
              className="w-auto h-5"
              src="assets/icons/atome.webp"
              alt="atome"
            />
          </div>
          {/* Menu */}
          <div className="flex flex-wrap gap-8 mt-6">
            <AboutMenuList />
            <ShoppingMenuList />
            <LegalMenuList />
            <PartnersMenuList />
          </div>
        </div>

        {/* Right */}
        <a href="#" className="flex flex-col-reverse lg:flex-col gap-5">
          <FooterSocialList />
          <FooterDownload />
        </a>
      </div>
      <FooterCopy />
    </footer>
  )
}
