import ApplicationSection from '@/components/home/ApplicationSection'
import GallerySection from '@/components/home/GallerySection'
import HeroSection from '@/components/home/HeroSection'
import Integrated from '@/components/home/Integrated'
import LatestNews from '@/components/home/LatestNews'
import LogoSection from '@/components/home/LogoSection'
import ProductFinder from '@/components/home/ProductFinder'
import ProductSection from '@/components/home/ProductSection'
import Sustainability from '@/components/home/Sustainability'
import React from 'react'

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProductFinder />
      <LogoSection />
      <Integrated />
      <ProductSection title={"Our Product"} des={"Comprehensive range of Phthalocyanine Pigments Blue and Green engineered for your specific applications."} btn={"Explore more Products"} />
      <ApplicationSection />
      <Sustainability/>
      <LatestNews />
      <GallerySection />
    </main>
  )
}

export default Home