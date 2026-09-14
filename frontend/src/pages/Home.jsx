import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsLetterBox'

const home = () => {
  return (
    <>
    <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox/>
      </>

  )
}

export default home