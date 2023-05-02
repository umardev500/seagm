import { Section } from '@components/molecules'
import { Header, HeroSLider } from '@components/organisms'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSLider />
      <Section
        title="Exlusive Offers"
        subTitle="Lorem ipsum dolor is amet karam anta"
      />
    </>
  )
}
