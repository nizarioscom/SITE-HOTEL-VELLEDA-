import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeaturesGrid'
import RoomsSection from './components/RoomsSection'
import LocationSection from './components/LocationSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarTransparent(false)
      } else {
        setIsNavbarTransparent(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-hotel-white overflow-x-hidden">
      <Navbar isTransparent={isNavbarTransparent} />
      <Hero />
      <FeaturesGrid />
      <RoomsSection />
      <LocationSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
