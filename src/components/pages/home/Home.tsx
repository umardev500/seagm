import { Section } from '@components/molecules'
import {
  Footer,
  Header,
  HeroSLider,
  OfferList,
  OfferListDeskctop,
  PopularList,
} from '@components/organisms'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <>
      <div className="relative pt-4">
        <Header />
        <HeroSLider />
        <Section
          title="Exlusive Offers"
          subTitle="Don't miss our limited-time offers! Discover current deals today!"
        />
        <OfferList />
        <OfferListDeskctop />
        <div className="bg-container"></div>
      </div>

      {/* Popular list */}
      <PopularList />

      <Footer />
    </>
  )
}
