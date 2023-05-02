import { FooterMenuListing } from '@components/molecules'
import React from 'react'

export const LegalMenuList: React.FC = () => {
  return (
    <div>
      <div className="text-xs font-extrabold text-gray-700">Legal</div>
      <div className="flex-col flex gap-2 pt-3">
        <FooterMenuListing title="Terms of use" />
        <FooterMenuListing title="Terms of sale" />
        <FooterMenuListing title="Privacy Policy" />
        <FooterMenuListing title="特定商取引法に基づく表示" />
      </div>
    </div>
  )
}
