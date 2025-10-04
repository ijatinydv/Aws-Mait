import React from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About AWS', id: 'about' },
    { name: 'About MAIT', id: 'mait' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/80 backdrop-blur-md border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            <div className="flex items-center gap-4">
              <img 
                src="https://ik.imagekit.io/raosahab/aws-logo.svg?updatedAt=1759542812160" 
                alt="AWS Logo" 
                className="h-10"
              />
              <span className="text-gray-500 text-xl">|</span>
              <img 
                src="https://ik.imagekit.io/raosahab/mait-logo.png?updatedAt=1759542732932" 
                alt="MAIT Logo" 
                className="h-16"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="text-[#F5F5F5] hover:text-[#FF9900] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                className="bg-[#FF9900] hover:bg-[#e6890a] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Join Now
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              className="text-[#F5F5F5] hover:text-[#FF9900] p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1a1a2e]/90 backdrop-blur-md border-t border-gray-800">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className="text-[#F5F5F5] hover:text-[#FF9900] block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                className="bg-[#FF9900] hover:bg-[#e6890a] text-white px-6 py-2 rounded-lg font-medium w-full mt-4 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;