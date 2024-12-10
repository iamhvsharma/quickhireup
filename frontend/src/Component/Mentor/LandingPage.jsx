import React from 'react'

import { HeroSection } from "./components/hero-section"
// import { FeaturesSection } from "./components/features-section"
import Categories from './components/categories-section'
import { ProcessSection } from "./components/process-section"
import { SpecialistsSection } from "./components/specialists-section"
import { FAQSection } from "./components/faq-section"
import { Footer } from "./components/footer"
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <FeaturesSection /> */}
        <Categories />
        <ProcessSection />
        <SpecialistsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )

}
