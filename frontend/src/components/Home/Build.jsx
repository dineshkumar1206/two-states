import React from 'react';

const Build = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col font-montserrat z-10 pb-16 lg:pb-0">
      
      {/* Top Image Section with Bottom Fade */}
      <div className="relative w-full max-w-[1600px] mx-auto" data-aos="fade-in" data-aos-duration="1200" data-aos-once="false">
        {/* The Image */}
        <div 
          className="w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 30%)',
            maskImage: 'linear-gradient(to top, transparent 0%, black 30%)'
          }}
        >
          <img 
            src="/images/build.png" 
            alt="Enterprise Dining Experience" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-12 lg:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading */}
          <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
            {/* Overline */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
                FOR ENTERPRISES
              </span>
              <div className="w-12 h-[1px] bg-[#2c4755]"></div>
            </div>

            {/* Marker Heading */}
            <h2 className="font-caveat-brush font-bold text-3xl md:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.15] text-[#134954] mt-2 tracking-wider drop-shadow-md">
              <span className="whitespace-nowrap">BUILT FOR ENTERPRISES.</span><br />
              <span className="text-[#fbce3a] whitespace-nowrap">LOVED BY PEOPLE.</span>
            </h2>

            {/* Simulated Brush Underline */}
            <div className="h-[4px] w-3/4 max-w-[350px] bg-[#fbce3a] mt-4 rounded-full transform -rotate-1 opacity-90"></div>
          </div>

          {/* Right Column: Text & Button */}
          <div className="flex flex-col justify-center lg:pt-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="false">
            
            <p className="text-[14px] md:text-[15px] font-medium text-[#134954] leading-relaxed max-w-lg">
              We bring the 2 States experience to workplaces, institutions and large communities — with the same focus on great food, warm service and meaningful dining experiences.
            </p>

            {/* Pipe Separated List */}
            <p className="mt-6 text-[12px] md:text-[13px] font-semibold text-[#134954] leading-relaxed flex flex-wrap items-center gap-y-2">
              <span>Thoughtful menus</span>
              <span className="text-[#a0b0b9] mx-2 font-normal">|</span>
              <span>Consistent quality</span>
              <span className="text-[#a0b0b9] mx-2 font-normal">|</span>
              <span>Scalable operations</span>
              <span className="text-[#a0b0b9] mx-2 font-normal">|</span>
              <span>Happier people</span>
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-[#fbce3a] hover:bg-[#eab308] text-[#134954] font-bold text-[11px] md:text-[12px] tracking-[0.1em] px-8 py-3.5 rounded-full flex items-center space-x-3 transition-colors duration-300 drop-shadow-md">
                <span>EXPLORE ENTERPRISE DINING</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Build;
