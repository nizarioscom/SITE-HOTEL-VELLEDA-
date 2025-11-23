import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const RoomsSection = () => {
  const [activeRoom, setActiveRoom] = useState(0)

  const rooms = [
    {
      id: 1,
      name: 'Chambre Simple',
      description: 'Confortable et fonctionnelle',
      details: 'Idéale pour les voyageurs en solo. Literie de qualité, salle de bain moderne, climatisation.',
      price: 'À partir de 250 MAD/nuit',
      amenities: ['Wi-Fi Gratuit', 'Climatisation', 'Salle de bain privée', 'TV Satellite'],
      color: 'from-blue-100 to-blue-50',
    },
    {
      id: 2,
      name: 'Chambre Double',
      description: 'Spacieuse et accueillante',
      details: 'Parfaite pour les couples ou petites familles. Vue ville, salle de bain complète, mobilier haut de gamme.',
      price: 'À partir de 350 MAD/nuit',
      amenities: ['Wi-Fi Gratuit', 'Mini Bar', 'Climatisation', 'Vue Ville', 'Douche & Baignoire'],
      color: 'from-purple-100 to-purple-50',
    },
    {
      id: 3,
      name: 'Suite Familiale',
      description: 'Luxueuse et spacieuse',
      details: 'Idéale pour les familles. Salon séparé, deux salles de bain, terrasse privée avec vue panoramique.',
      price: 'À partir de 500 MAD/nuit',
      amenities: ['Wi-Fi Gratuit', 'Salon Privé', 'Terrasse', 'Deux Salles de Bain', 'Service d\'étage'],
      color: 'from-amber-100 to-amber-50',
    },
  ]

  const nextRoom = () => {
    setActiveRoom((prev) => (prev + 1) % rooms.length)
  }

  const prevRoom = () => {
    setActiveRoom((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  return (
    <section id="rooms" className="py-20 px-4 bg-gradient-to-b from-hotel-beige to-hotel-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-hotel-dark mb-4">
            Nos Chambres
          </h2>
          <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
            Trouvez l'hébergement parfait pour votre séjour à Rabat
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Room Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl overflow-hidden shadow-2xl h-96 md:h-[500px] bg-gradient-to-br ${rooms[activeRoom].color} flex items-center justify-center relative`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🛏️</div>
                  <p className="text-gray-500 font-serif text-2xl">
                    {rooms[activeRoom].name}
                  </p>
                </div>
              </motion.div>

              {/* Room Details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-serif text-4xl font-bold text-hotel-dark mb-2">
                  {rooms[activeRoom].name}
                </h3>
                <p className="text-hotel-gold font-semibold mb-4">
                  {rooms[activeRoom].description}
                </p>

                <p className="font-sans text-gray-700 text-base mb-6 leading-relaxed">
                  {rooms[activeRoom].details}
                </p>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-serif font-bold text-hotel-dark mb-3">
                    Équipements:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {rooms[activeRoom].amenities.map((amenity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-hotel-gold">✓</span>
                        <span className="font-sans text-gray-700">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="bg-hotel-gold/10 border border-hotel-gold/30 rounded-lg p-4 mb-6">
                  <p className="font-serif text-2xl font-bold text-hotel-dark">
                    {rooms[activeRoom].price}
                  </p>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const phone = '+212537769531'
                    const message = `Bonjour, je suis intéressé par la ${rooms[activeRoom].name}`
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank')
                  }}
                  className="w-full px-6 py-3 bg-hotel-gold text-hotel-dark font-semibold rounded-lg hover:bg-hotel-gold/90 transition-all"
                >
                  Réserver cette Chambre
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevRoom}
              className="p-3 bg-hotel-gold text-hotel-dark rounded-full hover:bg-hotel-gold/90 transition-all shadow-lg"
            >
              <FaChevronLeft size={24} />
            </motion.button>

            <div className="flex gap-2 items-center">
              {rooms.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveRoom(idx)}
                  animate={{
                    width: activeRoom === idx ? 32 : 12,
                    backgroundColor: activeRoom === idx ? '#D4AF37' : '#E8DCC8',
                  }}
                  className="h-2 rounded-full transition-all"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextRoom}
              className="p-3 bg-hotel-gold text-hotel-dark rounded-full hover:bg-hotel-gold/90 transition-all shadow-lg"
            >
              <FaChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomsSection
