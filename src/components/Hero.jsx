import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToWhatsApp = () => {
    const phone = '+212537769531'
    const message = 'Bonjour, je souhaite faire une réservation à Hôtel Velleda'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{
          y: scrollY * 0.5,
        }}
        className="absolute inset-0 bg-gradient-to-br from-hotel-warm via-hotel-beige to-hotel-white"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-hotel-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-hotel-warm rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center z-10">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-hotel-dark mb-6 leading-tight"
          >
            Au Cœur de Rabat,
            <br />
            <span className="text-hotel-gold">L'Élégance à Prix Doux</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg md:text-xl text-gray-700 mb-4"
          >
            106 Avenue Allal Ben Abdellah, Quartier Hassan
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Une expérience urbaine authentique à 5 minutes de la gare Rabat Ville
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={scrollToWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-hotel-gold text-hotel-dark font-semibold rounded-lg hover:bg-hotel-gold/90 transition-all shadow-lg"
            >
              Réserver sur WhatsApp
            </motion.button>
            <motion.a
              href="#rooms"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-hotel-dark text-hotel-dark font-semibold rounded-lg hover:bg-hotel-dark hover:text-white transition-all"
            >
              Découvrir nos Chambres
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-hotel-dark rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-hotel-dark rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
