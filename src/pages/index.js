import HeroSection from '@/components/home/HeroSection'
import Integrated from '@/components/home/Integrated'
import LogoSection from '@/components/home/LogoSection'
import ProductFinder from '@/components/home/ProductFinder'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductFinder />
      <LogoSection/>
      <Integrated/>
    </>
  )
}

export default Home