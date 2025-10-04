import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AboutMAITSection = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const content = contentRef.current;

      // Animate the content with a subtle fade and slide effect
      if (content) {
        gsap.fromTo(content.children,
          {
            opacity: 0,
            y: 60,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Add floating animation to stats
      const stats = gsap.utils.toArray('.stat-item');
      stats.forEach((stat, index) => {
        gsap.to(stat, {
          y: -10,
          duration: 2 + (index * 0.3),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.5
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "20,000+", label: "Students", icon: "👥" },
    { number: "50+", label: "Departments", icon: "🏢" },
    { number: "30+", label: "Years Legacy", icon: "⭐" },
    { number: "100+", label: "Industry Partners", icon: "🤝" }
  ];

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#1a1a2e] py-20 px-6"
    >
      {/* Content */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={contentRef}
            className="text-center space-y-8"
          >
            {/* Main Title */}
            <div>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-6 px-2">
                <img 
                  src="https://ik.imagekit.io/raosahab/mait-logo.png?updatedAt=1759542732932" 
                  alt="MAIT Logo" 
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-0 sm:mr-4"
                />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center sm:text-left">
                  Maharaja Agrasen
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500">
                    Institute of Technology
                  </span>
                </h2>
              </div>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto px-2">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
                A premier institution fostering innovation, excellence, and technological advancement. 
                MAIT stands as a beacon of quality education, shaping the future leaders of tomorrow 
                through cutting-edge curriculum and industry collaboration.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Our AWS Academy Chapter represents the bridge between academic excellence and 
                industry demands, empowering students with cloud computing skills that define 
                the modern technological landscape.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 px-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-orange-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Campus Image */}
            <div className="mt-12 sm:mt-16 max-w-4xl mx-auto px-2">
              <img 
                src="https://ik.imagekit.io/raosahab/mait-campus.jpg?updatedAt=1759542750435" 
                alt="MAIT Campus" 
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Vision Statement */}
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 mt-12 sm:mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                "To be a globally recognized center of excellence in technical education, 
                research, and innovation, nurturing competent professionals who contribute 
                to society's technological advancement and sustainable development."
              </p>
              
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                  Explore Campus
                </button>
                <button className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMAITSection;