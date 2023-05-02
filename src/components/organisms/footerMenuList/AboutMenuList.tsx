import { FooterMenuListing } from '@components/molecules'
import React from 'react'

export const AboutMenuList: React.FC = () => {
  return (
    <div>
      <div className="text-xs font-extrabold text-gray-700">About SEAGM</div>
      <div className="flex-col flex gap-2 pt-3">
        <FooterMenuListing title="About us" />
        <FooterMenuListing title="SEAGM News" />
        <FooterMenuListing title="Support" />
        <FooterMenuListing title="Contact Us" />
      </div>
    </div>
  )
}
