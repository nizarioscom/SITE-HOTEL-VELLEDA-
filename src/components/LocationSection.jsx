import React from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-4 bg-hotel-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-hotel-dark mb-4">
            Notre Localisation
          </h2>
          <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
            Au cœur du Quartier Hassan, à proximité des principaux sites touristiques de Rabat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl h-96 lg:h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8769920266047!2d-6.816389!3d34.020735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c477c27f6f7%3A0x5f7c7f7c7f7c7f7c!2s106%20Avenue%20Allal%20Ben%20Abdellah%20Rabat!5e0!3m2!1sfr!2sma!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            {/* Address */}
            <motion.div
              whileHover={{ x: 10 }}
              className="p-6 bg-hotel-beige rounded-lg mb-6 border-l-4 border-hotel-gold"
            >
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-hotel-gold text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-hotel-dark text-lg mb-2">
                    Adresse
                  </h3>
                  <p className="font-sans text-gray-700">
                    106 Avenue Allal Ben Abdellah<br />
                    Quartier Hassan<br />
                    Rabat 10000, Maroc
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ x: 10 }}
              className="p-6 bg-hotel-beige rounded-lg mb-6 border-l-4 border-hotel-gold"
            >
              <div className="flex items-start gap-4">
                <FaPhone className="text-hotel-gold text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-hotel-dark text-lg mb-2">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+212537769531"
                    className="font-sans text-hotel-gold hover:underline font-semibold text-lg"
                  >
                    +212 (537) 769-531
                  </a>
                  <p className="font-sans text-gray-600 text-sm mt-1">
                    Disponible 24/7
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-hotel-warm to-hotel-beige rounded-lg p-6"
            >
              <h3 className="font-serif font-bold text-hotel-dark text-lg mb-3">
                Pourquoi nous choisir ?
              </h3>
              <ul className="font-sans text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-hotel-gold">✓</span>
                  À 5 minutes à pied de la gare Rabat Ville
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hotel-gold">✓</span>
                  Proche de la Médina historique
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hotel-gold">✓</span>
                  Accès facile aux transports en commun
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hotel-gold">✓</span>
                  Restaurants et cafés à proximité
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
