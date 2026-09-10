import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative w-full min-h-screen bg-[#fcfbf7] bg-contain bg-no-repeat bg-center overflow-hidden flex items-center pt-40 lg:pt-48 pb-12 font-montserrat"
      style={{ backgroundImage: "url('/images/Websitebackground2_States.png')" }}
    >

      <div className="container mx-auto px-12 md:px-24 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-12 md:mt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#134954] leading-tight" data-aos="fade-up" data-aos-duration="1000">
            TWO STATES.
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#167d8f] leading-tight mt-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            ONE LOVE.
          </h1>
          <h1 className="text-7xl md:text-8xl lg:text-[9rem] font-caveat font-bold text-[#fbce3a] leading-none -mt-2 drop-shadow-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            FOOD.
          </h1>
          
          <h3 className="text-lg md:text-xl font-bold text-[#333] mt-6 tracking-wide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Different cultures. Different flavours. One table.
          </h3>
          
          <p className="text-[#555] text-sm md:text-base max-w-md mt-4 leading-relaxed font-medium" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            2 States brings together the richness of Punjab, the soul of Tamil Nadu and the energy of Delhi — rooted in traditional recipes, reimagined for the way we eat today.
          </p>

          <div className="mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <button className="bg-[#fbce3a] hover:bg-[#eab308] text-[#1a1a1a] font-bold text-sm px-8 py-4 rounded-full flex items-center space-x-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>DISCOVER OUR STORY</span>
              <span>&darr;</span>
            </button>
          </div>
        </div>

        {/* Right Main Image Area */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
          <img 
            src="/images/heromain.png" 
            alt="Delicious Indian Food Platter" 
            className="w-full max-w-[750px] object-contain drop-shadow-xl mt-8 lg:mt-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
