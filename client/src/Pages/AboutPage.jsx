import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { HeroSection } from '../Components/AboutHeroSection/HeroSection'
import { Footer } from '../Components/Footer/Footer'
import { Info } from '../Components/AboutInfo/Info';

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className='mt-[96px]'>
        <HeroSection />
        <Info/>
        <Footer />
      </div>
    </div>
  );
}

export { AboutPage }
