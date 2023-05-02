import { Section } from '@components/molecules'
import { Header, HeroSLider, OfferList } from '@components/organisms'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <div className="relative pt-4">
      <Header />
      <HeroSLider />
      <Section
        title="Exlusive Offers"
        subTitle="Don't miss our limited-time offers! Discover current deals today!"
      />
      <OfferList />
      <div className="bg-container"></div>
    </div>
  )
}
