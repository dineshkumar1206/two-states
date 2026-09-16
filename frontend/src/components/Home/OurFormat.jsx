import React from 'react';

const OurFormat = () => {
  return (
    <div className="relative w-full min-h-screen font-poppins z-10 pt-8 lg:pt-0 pb-16 lg:pb-0 overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-center">
      
      {/* Background Image with Fade */}
      <div 
        className="w-full lg:w-[60%] lg:absolute lg:right-0 lg:top-0 h-[350px] sm:h-[450px] lg:h-[65%] z-0 pointer-events-none mt-8 lg:mt-0" 
        data-aos="zoom-in-left" 
        data-aos-duration="1500" 
        data-aos-once="false"
      >
        <img 
          src="/images/dosa.png" 
          alt="Dosa Preparation" 
          className="w-full h-full object-cover object-[right_center]"
          style={{
            /* Smooth vignette opacity: fades top ceiling, bottom foreground, and left edge */
            WebkitMaskImage: `
              linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 35%),
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 5%, black 15%, black 85%, rgba(0,0,0,0.6) 95%, transparent 100%)
            `,
            WebkitMaskComposite: 'destination-in',
            maskImage: `
              linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 35%),
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 5%, black 15%, black 85%, rgba(0,0,0,0.6) 95%, transparent 100%)
            `,
            maskComposite: 'intersect'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-20 flex-1 flex flex-col justify-center">
        
        {/* Top Text Section */}
        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-right" data-aos-duration="1200" data-aos-once="false">
          {/* Overline */}
          {/* <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 w-full">
            <span className="text-[11px] md:text-xs font-black tracking-[0.22em] text-[#1f3f4a] uppercase">
              OUR FORMATS
            </span>
            <div className="w-10 h-[1.5px] bg-[#1f3f4a]"></div>
          </div> */}

          {/* Heading */}
          <h2 className="font-caveat-brush text-4xl sm:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.05] font-black text-[#134954] tracking-normal w-full transform -rotate-1 origin-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] mt-2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150" data-aos-once="false">
            <span className="whitespace-normal sm:whitespace-nowrap">ONE EXPERIENCE.</span><br className="hidden sm:block" />
            <span className="text-[#06b6d4] whitespace-normal sm:whitespace-nowrap block mt-1 lg:mt-2">MANY WAYS TO DINE.</span>
          </h2>

          {/* Simulated Brush Underline */}
          <div className="h-[5px] w-4/5 max-w-[400px] bg-[#fbce3a] mt-4 lg:mt-5 mx-auto lg:mx-0 rounded-full transform -rotate-2 opacity-95" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="false"></div>

          {/* Paragraphs */}
          <div className="mt-8 text-[14px] sm:text-base lg:text-[17px] font-medium text-[#134954] leading-[1.7] max-w-md mx-auto lg:mx-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" data-aos-once="false">
            <p className="mb-4 font-bold">
              Different spaces. Different people.<br />
              The same love for great food.
            </p>
            <p>
              From a full-service café to a live food counter, a food court or a compact kiosk, we create formats that fit the space, the people and the way they eat.
            </p>
          </div>
        </div>

        {/* Bottom Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-8 lg:mt-12 pt-8 border-t border-gray-200/50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="false">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="false">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/cafeteria.png" alt="Cafeteria" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">01</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">CAFETERIA</h4>
            </div>
            <p className="text-[12px] md:text-[13px] font-medium text-[#134954] leading-[1.6] lg:border-r lg:border-gray-300 lg:pr-4 min-h-[40px]">
              A complete dining experience for workplaces, campuses and larger communities.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-once="false">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/live.png" alt="Live Counters" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">02</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">LIVE COUNTERS</h4>
            </div>
            <p className="text-[12px] md:text-[13px] font-medium text-[#134954] leading-[1.6] lg:border-r lg:border-gray-300 lg:pr-4 min-h-[40px]">
              Fresh. Visible. Made in the moment.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" data-aos-once="false">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/food-court.png" alt="Food Court" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">03</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">FOOD COURT</h4>
            </div>
            <p className="text-[12px] md:text-[13px] font-medium text-[#134954] leading-[1.6] lg:border-r lg:border-gray-300 lg:pr-4 min-h-[40px]">
              More choice. More reasons to come back.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900" data-aos-once="false">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/kiosk.png" alt="Kiosk" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">04</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">KIOSK / CAFÉ</h4>
            </div>
            <p className="text-[12px] md:text-[13px] font-medium text-[#134954] leading-[1.6] min-h-[40px]">
              Smaller footprint. Same 2 States spirit.
            </p>
          </div>

        </div>


      </div>

    </div>
  );
};

export default OurFormat;
