import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatWeDeliver from '../components/WhatWeDeliver'
import IntegrationSection from '../components/IntegrationSection'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <WhatWeDeliver/>
      <IntegrationSection/>
      <Footer/>
    </div>
  )
}

export default LandingPage
