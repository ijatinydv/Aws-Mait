import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope,
  FaAws,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/aws-academy-mait',
      label: 'GitHub',
      color: 'hover:text-[#F5F5F5]'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/aws-academy-mait',
      label: 'LinkedIn',
      color: 'hover:text-[#0077B5]'
    },
    {
      icon: FaTwitter,
      href: 'https://twitter.com/aws_academy_mait',
      label: 'Twitter',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/aws.academy.mait',
      label: 'Instagram',
      color: 'hover:text-[#E4405F]'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:aws.academy@mait.ac.in',
      label: 'Email',
      color: 'hover:text-[#FF9900]'
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Join Chapter', href: '#contact' },
    { name: 'AWS Academy', href: 'https://aws.amazon.com/training/awsacademy/' },
    { name: 'MAIT Official', href: 'https://mait.ac.in' }
  ];

  const resources = [
    { name: 'AWS Documentation', href: 'https://docs.aws.amazon.com' },
    { name: 'Free Tier', href: 'https://aws.amazon.com/free' },
    { name: 'Certification', href: 'https://aws.amazon.com/certification' },
    { name: 'Learning Path', href: 'https://aws.amazon.com/training' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(sectionId, '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-t from-[#0f0f1a] to-[#1a1a2e] border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <FaAws className="text-[#FF9900] mr-2" size={32} />
              <h3 className="text-2xl font-bold text-[#F5F5F5]">
                AWS × MAIT
              </h3>
            </div>
            <p className="text-[#A9A9A9] mb-6 leading-relaxed">
              Empowering the next generation of cloud professionals through 
              hands-on learning and real-world experience.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#A9A9A9] ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-[#2a2a3e]`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-[#F5F5F5] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#A9A9A9] hover:text-[#FF9900] transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold text-[#F5F5F5] mb-4">AWS Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <motion.li
                  key={resource.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A9A9A9] hover:text-[#FF9900] transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {resource.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-[#F5F5F5] mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <FaEnvelope className="text-[#FF9900] mt-1 mr-3 flex-shrink-0" size={16} />
                <div>
                  <p className="text-[#A9A9A9] text-sm">Email</p>
                  <a href="mailto:aws.academy@mait.ac.in" className="text-[#F5F5F5] hover:text-[#FF9900] transition-colors duration-300">
                    aws.academy@mait.ac.in
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-[#B3282D] mt-1 mr-3 flex-shrink-0">📍</div>
                <div>
                  <p className="text-[#A9A9A9] text-sm">Address</p>
                  <p className="text-[#F5F5F5] text-sm">
                    Maharaja Agrasen Institute of Technology<br />
                    PSP Area, Sector 22, Rohini<br />
                    Delhi - 110086
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-gray-800 bg-[#0f0f1a]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center text-[#A9A9A9] text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <span>© 2025 AWS Academy MAIT Chapter. All Rights Reserved.</span>
            </motion.div>
            
            <motion.div
              className="flex items-center text-[#A9A9A9] text-sm mt-2 md:mt-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#FF9900', '#B3282D', '#FF9900']
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                className="mx-1"
              >
                <FaHeart size={14} />
              </motion.div>
              <span>by AWS Academy MAIT Students</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;