import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'Chambres', href: '#rooms' },
    { label: 'Localisation', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-hotel-dark-footer text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-2xl font-bold mb-4">
              <span className="text-hotel-gold">Velleda</span>
            </h3>
            <p className="font-sans text-gray-300 text-sm leading-relaxed">
              Au cœur de Rabat, l'élégance à prix doux. Expérience urbaine authentique depuis 1998.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3 font-sans text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-hotel-gold mt-1 flex-shrink-0" />
                <span>106 Avenue Allal Ben Abdellah<br />Quartier Hassan, Rabat 10000</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-hotel-gold flex-shrink-0" />
                <a href="tel:+212537769531" className="hover:text-hotel-gold transition-colors">
                  +212 (537) 769-531
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-hotel-gold flex-shrink-0" />
                <span>Réception 24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif font-bold text-lg mb-4">Liens Rapides</h4>
            <div className="space-y-2">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="font-sans text-gray-300 hover:text-hotel-gold transition-colors block text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <p className="font-sans text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Hôtel Velleda. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 hover:text-hotel-gold transition-colors"
            >
              <FaFacebook size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 hover:text-hotel-gold transition-colors"
            >
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
