import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'

const home = () => {
  return (
    <>
    <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy/>
      </>

  )
}

export default home