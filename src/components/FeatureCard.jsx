import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  accentColor = 'primary' // 'primary' for orange, 'secondary' for maroon
}) => {
  const borderColor = accentColor === 'primary' ? 'hover:border-[#FF9900]' : 'hover:border-[#B3282D]';
  const iconColor = accentColor === 'primary' ? 'text-[#FF9900]' : 'text-[#B3282D]';

  return (
    <motion.div
      className={`bg-[#2a2a3e] border border-gray-700 ${borderColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:scale-105 group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      <motion.div
        className={`${iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: 'spring', stiffness: 200 }}
      >
        <Icon size={48} />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl font-semibold text-[#F5F5F5] mb-3 group-hover:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-[#A9A9A9] leading-relaxed group-hover:text-[#F5F5F5] transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>

      {/* Hover Effect Accent Line */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${
          accentColor === 'primary' 
            ? 'from-[#FF9900] to-[#ffb84d]' 
            : 'from-[#B3282D] to-[#d63238]'
        } mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.5 }}
      />
    </motion.div>
  );
};

export default FeatureCard;