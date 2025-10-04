import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAws, 
  FaServer, 
  FaDatabase, 
  FaCode, 
  FaUsers, 
  FaGraduationCap,
  FaBuilding,
  FaGlobe
} from 'react-icons/fa';
import { SiAmazonec2, SiAwslambda, SiAmazons3 } from 'react-icons/si';
import FeatureCard from './FeatureCard';

const AboutSection = () => {
  // AWS Services data
  const awsServices = [
    {
      icon: SiAmazons3,
      title: 'Amazon S3',
      description: 'Scalable object storage for any amount of data from anywhere.',
      accentColor: 'primary'
    },
    {
      icon: SiAmazonec2,
      title: 'Amazon EC2',
      description: 'Secure and resizable compute capacity in the cloud.',
      accentColor: 'primary'
    },
    {
      icon: SiAwslambda,
      title: 'AWS Lambda',
      description: 'Run code without thinking about servers or clusters.',
      accentColor: 'primary'
    },
    {
      icon: FaDatabase,
      title: 'Amazon RDS',
      description: 'Managed relational database service in the cloud.',
      accentColor: 'primary'
    }
  ];

  // Chapter Benefits data
  const chapterBenefits = [
    {
      icon: FaGraduationCap,
      title: 'Learning Opportunities',
      description: 'Access to AWS Academy courses, workshops, and hands-on labs.',
      accentColor: 'secondary'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'Connect with like-minded peers and industry professionals.',
      accentColor: 'secondary'
    },
    {
      icon: FaCode,
      title: 'Real Projects',
      description: 'Work on industry-relevant cloud computing projects.',
      accentColor: 'secondary'
    },
    {
      icon: FaGlobe,
      title: 'Global Network',
      description: 'Be part of the worldwide AWS Academy community.',
      accentColor: 'secondary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#2a2a3e] pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-[#F5F5F5]">About </span>
            <span className="text-[#FF9900]">Our Chapter</span>
          </h2>
          <p className="text-lg text-[#A9A9A9] max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between academic learning and industry requirements through 
            comprehensive cloud computing education and practical experience.
          </p>
        </motion.div>

        {/* AWS Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="flex items-center justify-center mb-4">
              <FaAws className="text-[#FF9900] mr-3" size={48} />
              <h3 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5]">
                Amazon Web Services
              </h3>
            </div>
            <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
              Learn the most comprehensive and broadly adopted cloud platform, 
              offering over 200 fully featured services from data centers globally.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {awsServices.map((service, index) => (
              <FeatureCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
                accentColor={service.accentColor}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Chapter Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-[#F5F5F5]">Why Join </span>
              <span className="text-[#B3282D]">Our Chapter?</span>
            </h3>
            <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
              Unlock your potential with exclusive benefits and opportunities 
              that our chapter provides to its members.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {chapterBenefits.map((benefit, index) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.1}
                accentColor={benefit.accentColor}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;