import AboutHeroSection from '@/components/about/AboutHeroSection'
import AboutInfo from '@/components/about/AboutInfo'
import Leadership from '@/components/about/Leadership'
import GallerySection from '@/components/home/GallerySection'
import Sustainability from '@/components/home/Sustainability'
import React from 'react'

const About = () => {
  return (
    <>
    <AboutHeroSection/>
    <AboutInfo/>
    <Sustainability/>
    <Leadership/>
    <GallerySection/>
    </>
  )
}

export default About