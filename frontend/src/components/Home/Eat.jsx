import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Eat = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Walk-through effect: scale up as user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={containerRef} className="relative w-full h-screen min-h-[700px] max-h-[1000px] font-poppins z-10 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image Container with Walk-through Animation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.img 
          src="/images/cafeteria-bg.webp" 
          alt="Cafeteria"
          className="w-full h-full object-cover object-bottom"
          style={{ 
            scale, 
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(0,0,0,0.8) 60%, black 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(0,0,0,0.8) 60%, black 100%)'
          }}
        />
        {/* Center radial glow for text readability over the image */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(254,250,246,1)_0%,rgba(254,250,246,0.6)_45%,transparent_70%)]"></div>
      </div>

      {/* Unified Text Container - Everything strictly centered vertically */}
      <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center text-center z-20 mt-[-5%]">
        
        {/* Overline */}
        <div className="flex items-center space-x-4 mb-6" data-aos="fade-down" data-aos-duration="1000" data-aos-once="false">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
            <span className="mr-2">10</span> LET'S EAT TOGETHER
          </span>
          <div className="w-12 h-[1px] bg-[#2c4755]"></div>
        </div>

        {/* Heading */}
        <div className="relative mb-10 w-full flex flex-col items-center" data-aos="fade-up" data-aos-duration="1200" data-aos-once="false">
          <h2 className="font-caveat-brush font-black text-5xl sm:text-6xl lg:text-[70px] xl:text-[80px] leading-[1.05] text-[#134954] tracking-normal transform -rotate-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
            <span className="whitespace-normal sm:whitespace-nowrap">LET'S BUILD SOMETHING</span><br className="hidden sm:block" />
            <span className="text-[#06b6d4] whitespace-normal sm:whitespace-nowrap block mt-1 lg:mt-2">PEOPLE WANT TO COME BACK TO.</span>
          </h2>
          <div className="absolute -bottom-4 lg:-bottom-5 h-[5px] w-[85%] max-w-[700px] bg-[#fbce3a] rounded-full transform -rotate-1 opacity-95" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="false"></div>
        </div>

        {/* Paragraphs */}
        <div className="max-w-3xl mx-auto text-[#134954] font-medium text-[15px] md:text-[17px] leading-relaxed space-y-6 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" data-aos-once="false">
          <p>
            Whether you're building a new dining destination, rethinking an existing cafeteria or looking for a food partner for your campus or workplace, we'd love to hear what you're working on.
          </p>
          <p>
            Tell us about your people, your space and what you want dining to become.
          </p>
        </div>

          {/* Buttons for Call and WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" data-aos-once="false">
            {/* Call Button */}
            <a href="tel:+919833381022" className="bg-[#fbce3a] hover:bg-[#e6b92d] text-[#1f3f4a] font-bold text-sm md:text-base px-8 py-3.5 rounded-full flex items-center space-x-3 transition-colors duration-300 shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span className="tracking-wide">CALL NOW</span>
            </a>
            
            {/* WhatsApp Button */}
            <a href="https://wa.me/919833381022" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full flex items-center space-x-3 transition-colors duration-300 shadow-md">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span className="tracking-wide">WHATSAPP</span>
            </a>
          </div>

      </div>

    </div>
  );
};

export default Eat;
