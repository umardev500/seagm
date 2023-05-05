import { FooterMenuListing } from '@components/molecules'
import React from 'react'

export const PartnersMenuList: React.FC = () => {
  return (
    <div>
      <div className="text-xs font-extrabold text-white">Parners</div>
      <div className="flex-col flex gap-2 pt-3">
        <FooterMenuListing title="Partnership" />
        <FooterMenuListing title="SEM9" />
      </div>
    </div>
  )
}
