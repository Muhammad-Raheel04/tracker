import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatWeDeliver from '../components/WhatWeDeliver'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <WhatWeDeliver/>
      <Footer/>
    </div>
  )
}

export default LandingPage
