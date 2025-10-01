import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUser, FaEnvelope, FaGraduationCap, FaComments, FaCheckCircle } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.year.trim()) {
      newErrors.year = 'Year is required';
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us why you want to join';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          year: '',
          reason: ''
        });
      }, 3000);
    }
  };

  const inputClasses = `
    w-full px-4 py-3 bg-[#2a2a3e] border border-gray-600 rounded-lg 
    text-[#F5F5F5] placeholder-[#A9A9A9] 
    focus:outline-none focus:border-[#FF9900] focus:ring-2 focus:ring-[#FF9900]/20 
    transition-all duration-300
  `;

  const errorClasses = `
    w-full px-4 py-3 bg-[#2a2a3e] border border-red-500 rounded-lg 
    text-[#F5F5F5] placeholder-[#A9A9A9] 
    focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 
    transition-all duration-300
  `;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e] pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaRocket className="text-[#FF9900] mr-3" size={40} />
            <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F5F5]">
              Launch Your Cloud Journey
            </h2>
          </div>
          <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto leading-relaxed">
            Ready to join the AWS Academy MAIT Chapter? Fill out the form below and 
            take the first step towards mastering cloud computing.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#2a2a3e] rounded-2xl p-8 sm:p-12 border border-gray-700 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-[#F5F5F5] font-medium mb-2 flex items-center">
                  <FaUser className="text-[#FF9900] mr-2" size={16} />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.name ? errorClasses : inputClasses}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span> {errors.name}
                  </p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-[#F5F5F5] font-medium mb-2 flex items-center">
                  <FaEnvelope className="text-[#FF9900] mr-2" size={16} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={errors.email ? errorClasses : inputClasses}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span> {errors.email}
                  </p>
                )}
              </motion.div>

              {/* Year Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label className="block text-[#F5F5F5] font-medium mb-2 flex items-center">
                  <FaGraduationCap className="text-[#FF9900] mr-2" size={16} />
                  Academic Year
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={errors.year ? errorClasses : inputClasses}
                >
                  <option value="">Select your year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
                {errors.year && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span> {errors.year}
                  </p>
                )}
              </motion.div>

              {/* Reason Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label className="block text-[#F5F5F5] font-medium mb-2 flex items-center">
                  <FaComments className="text-[#FF9900] mr-2" size={16} />
                  Why do you want to join?
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in cloud computing and what you hope to achieve..."
                  rows="4"
                  className={errors.reason ? errorClasses : inputClasses}
                />
                {errors.reason && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <span className="mr-1">⚠</span> {errors.reason}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF9900] to-[#ffb84d] hover:from-[#e6890a] hover:to-[#FF9900] text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/25 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaRocket />
                  Join the Chapter
                </motion.button>
              </motion.div>
            </form>
          ) : (
            // Success Message
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <FaCheckCircle className="text-green-400 mx-auto mb-6" size={80} />
              </motion.div>
              <h3 className="text-3xl font-bold text-[#F5F5F5] mb-4">
                Welcome to the Chapter!
              </h3>
              <p className="text-lg text-[#A9A9A9] mb-6">
                Thank you for your interest! We've received your application and 
                will get back to you soon with next steps.
              </p>
              <div className="bg-[#1a1a2e] rounded-lg p-4 border border-[#FF9900]/20">
                <p className="text-[#FF9900] font-medium">
                  Keep an eye on your inbox for updates and welcome materials!
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center p-6 bg-[#2a2a3e]/50 rounded-xl border border-gray-700">
            <div className="text-[#FF9900] text-2xl font-bold mb-2">No Prerequisites</div>
            <p className="text-[#A9A9A9]">Open to students from all branches and years</p>
          </div>
          <div className="text-center p-6 bg-[#2a2a3e]/50 rounded-xl border border-gray-700">
            <div className="text-[#B3282D] text-2xl font-bold mb-2">Free Membership</div>
            <p className="text-[#A9A9A9]">No membership fees or hidden charges</p>
          </div>
          <div className="text-center p-6 bg-[#2a2a3e]/50 rounded-xl border border-gray-700">
            <div className="text-[#FF9900] text-2xl font-bold mb-2">Industry Ready</div>
            <p className="text-[#A9A9A9]">Learn skills that employers are looking for</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;