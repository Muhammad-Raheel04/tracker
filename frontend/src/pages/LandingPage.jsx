import React from 'react'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Features from '../components/Features'
import SystemFlow from '../components/SystemFlow'
import TrackingScript from '../components/TrackingScript'

const LandingPage = () => {
  return (
    <div className='bg-[#003F3A]'>
      <Header/>
      <HeroSection/>
      <Features/>
      <SystemFlow/>
      <TrackingScript/>
      <Footer/>
    </div>
  )
}

export default LandingPage
