import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const home = () => {
  return (
    <>
    <Hero />
      <LatestCollection />
      <BestSeller/>
      </>

  )
}

export default home