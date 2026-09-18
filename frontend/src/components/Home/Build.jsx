import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Build = () => {
  const containerRef = useRef(null);
  const [animConfig, setAnimConfig] = useState({ duration: 8, xStart: "-8%" });

  useEffect(() => {
    const handleResize = () => setAnimConfig({
      duration: window.innerWidth < 768 ? 4 : 8,
      xStart: window.innerWidth < 768 ? "-12%" : "-8%"
    });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div id="build" ref={containerRef} className="relative w-full min-h-0 lg:min-h-screen flex flex-col font-poppins z-10 pb-12 lg:pb-32 pt-10 overflow-hidden">

      {/* Top Image Section with Bottom Fade */}
      <div className="relative w-full max-w-[1600px] mx-auto" data-aos="fade-in" data-aos-duration="1500" data-aos-once="false">
        {/* The Image */}
        <div
          className="w-full h-[200px] md:h-[300px] lg:h-[450px] xl:h-[550px] overflow-hidden flex items-center justify-start"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)',
            WebkitMaskComposite: 'destination-in',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)',
            maskComposite: 'intersect'
          }}
        >
          <motion.img
            src="/images/build-1.webp"
            alt="Enterprise Dining Experience"
            className="w-[130%] md:w-[120%] max-w-none h-full object-cover object-center origin-center"
            animate={{ x: [animConfig.xStart, "0%"] }}
            transition={{
              duration: animConfig.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading */}
          {/* Left Column: Heading */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-right" data-aos-duration="1200" data-aos-once="false">
            {/* Overline */}
            {/* <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 w-full">
              <span className="text-[11px] md:text-xs font-black tracking-[0.22em] text-[#1f3f4a] uppercase">
                FOR ENTERPRISES
              </span>
              <div className="w-10 h-[1.5px] bg-[#1f3f4a]"></div>
            </div> */}

            {/* Marker Heading */}
            <h2 className="font-caveat-brush font-bold text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.05] text-[#134954] mt-2 tracking-wide w-full" style={{ WebkitTextStroke: '1.5px #134954' }} data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150" data-aos-once="false">
              <span className="whitespace-normal sm:whitespace-nowrap">BUILT FOR ENTERPRISES.</span><br className="hidden sm:block" />
              <span className="text-[#fbce3a] whitespace-normal sm:whitespace-nowrap block mt-1 lg:mt-2" style={{ WebkitTextStroke: '1.5px #fbce3a' }}>LOVED BY PEOPLE.</span>
            </h2>

            {/* Simulated Brush Underline */}
            <div className="h-[5px] w-4/5 max-w-[320px] bg-[#fbce3a] mt-4 lg:mt-5 mx-auto lg:mx-0 rounded-full transform -rotate-2 opacity-95" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="false"></div>
          </div>

          {/* Right Column: Text & Button */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pt-8" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300" data-aos-once="false">

            <p className="text-sm sm:text-base lg:text-[17px] font-medium text-[#134954] leading-[1.7] max-w-lg mx-auto lg:mx-0">
              We bring the 2 States experience to workplaces, institutions and large communities — with the same focus on great food, warm service and meaningful dining experiences.
            </p>

            {/* Pipe Separated List */}
            <p className="mt-6 text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#103b44] leading-relaxed flex flex-wrap justify-center lg:justify-start items-center gap-y-2 w-full" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="450" data-aos-once="false">
              <span>Thoughtful menus</span>
              <span className="text-[#84a3b3] mx-2.5 font-normal">|</span>
              <span>Consistent quality</span>
              <span className="text-[#84a3b3] mx-2.5 font-normal">|</span>
              <span>Scalable operations</span>
              <span className="text-[#84a3b3] mx-2.5 font-normal">|</span>
              <span>Happier people</span>
            </p>

            {/* CTA Button */}
            {/* <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="false">
              <button className="bg-[#fbce3a] hover:bg-[#eab308] text-[#134954] font-black text-[11px] sm:text-xs lg:text-[13px] tracking-[0.12em] px-8 py-4 rounded-full flex items-center space-x-3 transition-transform duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                <span>EXPLORE ENTERPRISE DINING</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div> */}

          </div>

        </div>
      </div>

    </div>
  );
};

export default Build;
