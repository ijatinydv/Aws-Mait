import React from 'react';
import './index.css';

// GSAP imports and registration
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import all components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AboutAWSSection from './components/AboutAWSSection';
import StudentJourneySection from './components/StudentJourneySection';
import AboutMAITSection from './components/AboutMAITSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#F5F5F5] overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>
        
        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>
        
        {/* AWS Services Animation Section */}
        <div id="aws-services">
          <AboutAWSSection />
        </div>
        
        {/* Student Journey Timeline Section */}
        <div id="student-journey">
          <StudentJourneySection />
        </div>
        
        {/* MAIT Campus Parallax Section */}
        <div id="mait">
          <AboutMAITSection />
        </div>
        
        {/* Contact Form */}
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;