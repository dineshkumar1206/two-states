import React from 'react';

const OurFormat = () => {
  return (
    <div className="relative w-full min-h-screen font-montserrat z-10 pt-20 pb-16 overflow-hidden flex flex-col justify-center bg-[#fcfbf7]">
      
      {/* Background Image with Fade */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-[40%] lg:h-[60%] z-0" data-aos="fade-in" data-aos-duration="1200" data-aos-once="false">
        <img 
          src="/images/dosa.png" 
          alt="Dosa Preparation" 
          className="w-full h-full object-cover object-right"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 20%)'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-20 flex-1 flex flex-col justify-between">
        
        {/* Top Text Section */}
        <div className="w-full lg:w-[50%] mt-8 lg:mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
          {/* Overline */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
              OUR FORMATS
            </span>
            <div className="w-12 h-[1px] bg-[#2c4755]"></div>
          </div>

          {/* Heading */}
          <h2 className="font-caveat-brush font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-[#134954] tracking-wider drop-shadow-md transform -rotate-2 origin-left">
            <span className="whitespace-nowrap">ONE EXPERIENCE.</span><br />
            <span className="text-[#06b6d4] whitespace-nowrap">MANY WAYS TO DINE.</span>
          </h2>

          {/* Simulated Brush Underline */}
          <div className="h-[4px] w-4/5 max-w-[400px] bg-[#fbce3a] mt-4 rounded-full transform -rotate-2 opacity-90"></div>

          {/* Paragraphs */}
          <div className="mt-8 text-[15px] md:text-[17px] font-semibold text-[#134954] leading-relaxed max-w-md">
            <p className="mb-4">
              Different spaces. Different people.<br />
              The same love for great food.
            </p>
            <p className="font-medium text-[13px] md:text-[14px]">
              From a full-service café to a live food counter, a food court or a compact kiosk, we create formats that fit the space, the people and the way they eat.
            </p>
          </div>
        </div>

        {/* Bottom Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-8 lg:mt-12 pt-8 border-t border-gray-200/50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="false">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/cafeteria.png" alt="Cafeteria" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">01</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">CAFETERIA</h4>
            </div>
            <p className="text-[11px] md:text-xs font-medium text-[#134954] leading-relaxed lg:border-r lg:border-gray-300 lg:pr-4 min-h-[40px]">
              A complete dining experience for workplaces, campuses and larger communities.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/live.png" alt="Live Counters" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">02</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">LIVE COUNTERS</h4>
            </div>
            <p className="text-[11px] md:text-xs font-medium text-[#134954] leading-relaxed lg:border-r lg:border-gray-300 lg:pr-4 min-h-[40px]">
              Fresh. Visible. Made in the moment.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/food-court.png" alt="Food Court" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">03</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">FOOD COURT</h4>
            </div>
            <p className="text-[11px] md:text-xs font-medium text-[#134954] leading-relaxed lg:border-r lg:border-gray-300 lg:pr-4 min-h-[40px]">
              More choice. More reasons to come back.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative px-4">
            <div className="h-16 mb-4 flex items-center justify-center lg:justify-start w-full">
              <img src="/images/kiosk.png" alt="Kiosk" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex items-center space-x-3 mb-2 w-full justify-center lg:justify-start">
              <span className="text-[#fbce3a] font-bold text-xl md:text-2xl">04</span>
              <h4 className="font-bold text-[#134954] text-sm tracking-wide">KIOSK / CAFÉ</h4>
            </div>
            <p className="text-[11px] md:text-xs font-medium text-[#134954] leading-relaxed min-h-[40px]">
              Smaller footprint. Same 2 States spirit.
            </p>
          </div>

        </div>


      </div>

    </div>
  );
};

export default OurFormat;
