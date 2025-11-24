import React from 'react'
import { motion } from 'framer-motion'
import { FaTrain, FaWifi, FaSun, FaClock } from 'react-icons/fa'

const FeaturesGrid = () => {
  const features = [
    {
      icon: FaTrain,
      title: '5 min Gare Rabat Ville',
      description: 'À proximité immédiate de la gare principale',
    },
    {
      icon: FaWifi,
      title: 'Connexion Haut Débit',
      description: 'Wi-Fi gratuit et fiable dans tout l\'hôtel',
    },
    {
      icon: FaSun,
      title: 'Terrasse Ensoleillée',
      description: 'Profitez de la vue sur la ville depuis notre terrasse',
    },
    {
      icon: FaClock,
      title: 'Réception 24/7',
      description: 'Notre équipe toujours disponible pour vous servir',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 bg-hotel-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-hotel-dark mb-4">
            Nos Atouts
          </h2>
          <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez ce qui rend Hôtel Velleda unique au cœur de Rabat
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group p-8 bg-gradient-to-br from-hotel-beige to-hotel-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-hotel-warm/50"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 bg-hotel-gold/20 rounded-full mb-4 group-hover:bg-hotel-gold/30 transition-all"
                >
                  <Icon className="text-2xl text-hotel-gold" />
                </motion.div>
                <h3 className="font-serif text-xl font-bold text-hotel-dark mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesGrid
