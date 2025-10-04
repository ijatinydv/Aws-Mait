import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const StudentJourneySection = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const milestones = gsap.utils.toArray('.milestone');

      if (path) {
        // Get the total length of the SVG path
        const pathLength = path.getTotalLength();
        
        // Set initial state - hide the line
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        // Create the main timeline for the drawing animation
        const drawingTL = gsap.timeline({
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1, // Smooth animation tied to scroll progress
            pin: false,
            markers: false // Set to true for debugging
          }
        });

        // Animate the line drawing
        drawingTL.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none"
        });

        // Animate milestones appearing as the line reaches them
        milestones.forEach((milestone, index) => {
          gsap.fromTo(milestone, 
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50, // Alternate sides
              scale: 0.8
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: milestone,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none none reverse",
                markers: false
              }
            }
          );
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const journeySteps = [
    {
      step: "1",
      title: "Join the Chapter",
      description: "Become part of our vibrant community of cloud enthusiasts and start your AWS journey.",
      side: "left"
    },
    {
      step: "2", 
      title: "First Workshop",
      description: "Attend hands-on workshops covering AWS fundamentals and core services.",
      side: "right"
    },
    {
      step: "3",
      title: "Build Projects",
      description: "Apply your knowledge by building real-world projects using AWS services.",
      side: "left"
    },
    {
      step: "4",
      title: "Collaborate & Learn",
      description: "Work with peers on group projects and learn from industry experts.",
      side: "right"
    },
    {
      step: "5",
      title: "Get Certified",
      description: "Prepare for and achieve AWS certifications with our guided support.",
      side: "left"
    },
    {
      step: "6",
      title: "Launch Career",
      description: "Land your dream job in cloud computing with the skills you've mastered.",
      side: "right"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#1a1a2e] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Your Journey
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}with Us
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            From beginner to cloud expert - follow the path that thousands of students 
            have taken to transform their careers.
          </p>
        </div>

        {/* Timeline Container */}
        <div 
          ref={timelineRef}
          className="relative"
        >
          {/* SVG Timeline Path */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 20 800"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <path
                ref={pathRef}
                d="M10 0 Q10 50 10 100 Q15 150 10 200 Q5 250 10 300 Q15 350 10 400 Q5 450 10 500 Q10 550 10 600 Q15 650 10 700 Q10 750 10 800"
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 sm:space-y-24 relative z-10">
            {journeySteps.map((item, index) => (
              <div
                key={index}
                className="milestone relative"
              >
                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center ${
                  item.side === 'left' 
                    ? 'justify-start text-left' 
                    : 'justify-end text-right'
                } relative`}>
                  {/* Step Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white z-20">
                    {item.step}
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${item.side === 'left' ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group">
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className={`w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4 ${
                        item.side === 'right' ? 'ml-auto' : ''
                      }`}></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center">
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white mb-6 z-20">
                    {item.step}
                  </div>

                  {/* Content Card */}
                  <div className="w-full px-4">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/15 transition-all duration-300 text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-4 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 px-2">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Start Your Journey?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Join our community today and take the first step towards mastering cloud technologies.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentJourneySection;