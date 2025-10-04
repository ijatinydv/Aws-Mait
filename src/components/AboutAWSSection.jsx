import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { 
  FaAws, 
  FaDatabase, 
  FaServer, 
  FaCloud, 
  FaShieldAlt, 
  FaNetworkWired,
  FaCog,
  FaChartLine 
} from 'react-icons/fa';

const AboutAWSSection = () => {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target all logo items for the fly-in animation
      const logoItems = gsap.utils.toArray('.logo-item');

      // Set initial state to visible (fallback)
      gsap.set(logoItems, {
        opacity: 1,
        y: 0,
        scale: 1
      });

      // Create the scroll-triggered animation
      gsap.fromTo(logoItems, 
        {
          opacity: 0,
          y: 100, // Start 100px below their final position
          scale: 0.5, // Start at half size
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)", // Bouncy easing for more dynamic feel
          stagger: 0.15, // Stagger delay between each logo animation
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%", // Animation starts when top of grid is 85% from viewport top
            end: "bottom 20%",
            toggleActions: "play none none none", // Play on enter, don't reverse
            markers: false // Set to true for debugging
          }
        }
      );

      // Optional: Add a subtle hover effect for each logo
      logoItems.forEach(item => {
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(item, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        });

        item.addEventListener('mouseenter', () => hoverTl.play());
        item.addEventListener('mouseleave', () => hoverTl.reverse());
      });

      // Fallback: Ensure logos are visible after a short delay
      setTimeout(() => {
        if (logoItems.length > 0) {
          gsap.set(logoItems, {
            opacity: 1,
            y: 0,
            scale: 1
          });
        }
      }, 1000);

    }, containerRef);

    // Cleanup function
    return () => ctx.revert();
  }, []);

  const awsServices = [
    { icon: FaAws, name: "AWS Core", color: "text-orange-400" },
    { icon: FaDatabase, name: "RDS", color: "text-blue-400" },
    { icon: FaServer, name: "EC2", color: "text-green-400" },
    { icon: FaCloud, name: "S3", color: "text-purple-400" },
    { icon: FaShieldAlt, name: "IAM", color: "text-red-400" },
    { icon: FaNetworkWired, name: "VPC", color: "text-cyan-400" },
    { icon: FaCog, name: "Lambda", color: "text-yellow-400" },
    { icon: FaChartLine, name: "CloudWatch", color: "text-pink-400" }
  ];

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#1a1a2e] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powered by the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              {" "}Cloud
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the comprehensive AWS ecosystem that powers modern applications. 
            From compute and storage to security and monitoring - master the tools that drive innovation.
          </p>
        </div>

        {/* AWS Services Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
        >
          {awsServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="logo-item flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <IconComponent 
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${service.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`} 
                />
                <span className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-center">
                  {service.name}
                </span>
                <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Content */}
        <div className="text-center mt-16 px-2">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of students already mastering cloud technologies through hands-on experience 
            with industry-standard AWS services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAWSSection;