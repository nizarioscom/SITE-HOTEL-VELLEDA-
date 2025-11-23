import React from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ isTransparent }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Chambres', href: '#rooms' },
    { label: 'Localisation', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToWhatsApp = (e) => {
    e.preventDefault()
    const phone = '+212537769531'
    const message = 'Bonjour, je souhaite faire une réservation à Hôtel Velleda'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.nav
      initial={{ backgroundColor: 'transparent' }}
      animate={{
        backgroundColor: isTransparent ? 'transparent' : 'rgba(26, 26, 26, 0.95)',
        backdropFilter: isTransparent ? 'none' : 'blur(10px)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 px-4 lg:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-2xl lg:text-3xl font-bold text-hotel-dark"
        >
          <span className="text-hotel-gold">Velleda</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="text-hotel-dark font-medium hover:text-hotel-gold transition-colors duration-200"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToWhatsApp}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:inline-block px-6 py-2 bg-hotel-gold text-hotel-dark font-semibold rounded-lg hover:bg-hotel-gold/90 transition-all duration-200"
        >
          Réserver
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col space-y-1.5"
        >
          <div className={`w-6 h-0.5 bg-hotel-dark transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-hotel-dark transition-all ${mobileOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-hotel-dark transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden mt-4 flex flex-col space-y-3 pb-4"
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-hotel-dark font-medium hover:text-hotel-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              scrollToWhatsApp(e)
              setMobileOpen(false)
            }}
            className="w-full px-6 py-2 bg-hotel-gold text-hotel-dark font-semibold rounded-lg"
          >
            Réserver
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
