import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Features from '../components/Features'
import SystemFlow from '../components/SystemFlow'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Features/>
      <SystemFlow/>
      <Footer/>
    </div>
  )
}

export default LandingPage
