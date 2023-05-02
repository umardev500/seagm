import { FooterMenuListing } from '@components/molecules'
import React from 'react'

export const PartnersMenuList: React.FC = () => {
  return (
    <div>
      <div className="text-xs font-extrabold text-gray-700 mt-6">
        About SEAGM
      </div>
      <div className="flex-col flex gap-2 pt-3">
        <FooterMenuListing title="Partnership" />
        <FooterMenuListing title="SEM9" />
      </div>
    </div>
  )
}
