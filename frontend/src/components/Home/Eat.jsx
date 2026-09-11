import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Eat = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Walk-through effect: scale up and pan down as user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <div className="w-full font-poppins pt-20 pb-0">
      
      {/* Top Section - Heading Only (No Image Behind It) */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center text-center mb-10 relative z-20">
        {/* Overline */}
        <div className="flex items-center space-x-4 mb-8" data-aos="fade-down" data-aos-duration="1000" data-aos-once="false">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
            <span className="mr-2">10</span> LET'S EAT TOGETHER
          </span>
          <div className="w-12 h-[1px] bg-[#2c4755]"></div>
        </div>

        {/* Heading */}
        <div className="relative w-full flex flex-col items-center" data-aos="fade-up" data-aos-duration="1200" data-aos-once="false">
          <h2 className="font-caveat-brush font-black text-5xl sm:text-6xl lg:text-[70px] xl:text-[80px] leading-[1.05] text-[#134954] tracking-normal transform -rotate-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            <span className="whitespace-normal sm:whitespace-nowrap">LET'S BUILD SOMETHING</span><br className="hidden sm:block" />
            <span className="text-[#06b6d4] whitespace-normal sm:whitespace-nowrap block mt-1 lg:mt-2">PEOPLE WANT TO COME BACK TO.</span>
          </h2>
          <div className="absolute -bottom-5 lg:-bottom-6 h-[5px] w-[85%] max-w-[700px] bg-[#fbce3a] rounded-full transform -rotate-1 opacity-95" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="false"></div>
        </div>
      </div>

      {/* Bottom Section - Image Background + Text Overlay */}
      <div ref={containerRef} className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden flex flex-col items-center justify-start pt-16 mt-8">
        
        {/* Background Image with Zoom Animation */}
        <motion.img 
          src="/images/cafeteria-bg.webp" 
          alt="Cafeteria"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
          style={{ scale }}
        />
        
        {/* Top Fade Gradient to seamlessly blend image into the white section above */}
        <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-[#fefaf6] to-transparent z-10 pointer-events-none"></div>
        
        {/* Radial Glow for Text Readability over the image */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[80%] bg-[radial-gradient(ellipse_at_top,rgba(254,250,246,0.95)_0%,rgba(254,250,246,0.7)_50%,transparent_100%)] z-10 pointer-events-none"></div>

        {/* Text Content overlaying the image */}
        <div className="relative z-20 max-w-3xl px-4 md:px-8 text-center flex flex-col items-center">
          {/* Paragraphs */}
          <div className="text-[#134954] font-medium text-[15px] md:text-[17px] leading-relaxed space-y-6 mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" data-aos-once="false">
            <p>
              Whether you're building a new dining destination, rethinking an existing cafeteria or looking for a food partner for your campus or workplace, we'd love to hear what you're working on.
            </p>
            <p>
              Tell us about your people, your space and what you want dining to become.
            </p>
          </div>

          {/* Button */}
          <button className="bg-[#fbce3a] hover:bg-[#e6b92d] text-[#1f3f4a] font-bold text-sm md:text-base px-8 py-3.5 rounded-full flex items-center space-x-3 transition-colors duration-300 shadow-md" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" data-aos-once="false">
            <span className="tracking-wide">LET'S TALK</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>

      </div>

    </div>
  );
};

export default Eat;
