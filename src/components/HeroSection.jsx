import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaCloud, FaRocket } from 'react-icons/fa';

const HeroSection = () => {
  // Particle component for background animation
  const Particle = ({ delay = 0, size = 4 }) => (
    <motion.div
      className={`absolute bg-[#FF9900] rounded-full opacity-20`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
    />
  );

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <Particle key={i} delay={i * 0.2} size={2 + Math.random() * 4} />
  ));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e]/90 to-[#1a1a2e]/80"></div>
        
        {/* Large AWS and Cloud Icons as Background Elements */}
        <motion.div
          className="absolute top-20 right-10 text-[#FF9900]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <FaAws size={120} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 text-[#B3282D]/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaCloud size={100} />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-[#F5F5F5]">Build the </span>
            <span className="text-[#FF9900]">Future.</span>
            <br />
            <span className="text-[#F5F5F5]">In the </span>
            <span className="text-[#B3282D]">Cloud.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-[#A9A9A9] mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to the <span className="text-[#FF9900] font-semibold">AWS Academy</span> × <span className="text-[#B3282D] font-semibold">MAIT</span> Student Chapter
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-[#A9A9A9] mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Empowering students to master cloud computing, develop innovative solutions, 
            and shape the future of technology through hands-on learning and real-world projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.button
              className="bg-[#FF9900] hover:bg-[#e6890a] text-white px-8 py-3 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <FaRocket />
              Join the Chapter
            </motion.button>
            
            <motion.button
              className="border-2 border-[#B3282D] text-[#B3282D] hover:bg-[#B3282D] hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats or Quick Info */}
          <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto relative z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF9900] mb-2 relative z-30 text-content">500+</div>
              <div className="text-[#A9A9A9] relative z-30 text-content">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B3282D] mb-2 relative z-30 text-content">50+</div>
              <div className="text-[#A9A9A9] relative z-30 text-content">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF9900] mb-2 relative z-30 text-content">15+</div>
              <div className="text-[#A9A9A9] relative z-30 text-content">AWS Certifications</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-[#FF9900] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#FF9900] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;