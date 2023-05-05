import { FooterMenuListing } from '@components/molecules'
import React from 'react'

export const ShoppingMenuList: React.FC = () => {
  return (
    <div>
      <div className="text-xs font-extrabold text-white">Shopping</div>
      <div className="flex-col flex gap-2 pt-3">
        <FooterMenuListing title="SEAGM STAR Rewards" />
        <FooterMenuListing title="KALEOZ" />
      </div>
    </div>
  )
}
