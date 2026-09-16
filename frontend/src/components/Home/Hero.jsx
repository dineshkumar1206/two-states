import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center pt-32 lg:pt-36 pb-12 font-poppins">

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 px-2 sm:px-0 text-center md:text-left">
          <h1 
            className="text-5xl sm:text-6xl lg:text-[70px] xl:text-[80px] font-caveat-brush font-bold text-[#134954] leading-[1.05]" 
            style={{ WebkitTextStroke: '2px #134954' }}
            data-aos="fade-right" data-aos-duration="1200"
          >
            TWO STATES.
          </h1>
          <h1 
            className="text-5xl sm:text-6xl lg:text-[70px] xl:text-[80px] font-caveat-brush font-bold text-[#167d8f] leading-[1.05] mt-1" 
            style={{ WebkitTextStroke: '2px #167d8f' }}
            data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150"
          >
            ONE LOVE.
          </h1>
          <h1 className="text-[5.5rem] sm:text-[7rem] lg:text-[130px] xl:text-[150px] font-caveat font-bold text-[#fbce3a] leading-[0.8] mt-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.15)]" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
            FOOD.
          </h1>
          
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#333] mt-6 sm:mt-8 tracking-wide" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="450">
            Different cultures. Different flavours.<br/> One table.
          </h3>
          
          <p className="text-[#555] text-sm sm:text-base lg:text-[17px] max-w-md mx-auto md:mx-0 mt-4 sm:mt-5 leading-relaxed font-medium" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="600">
            2 States brings together the richness of Punjab, the soul of Tamil Nadu and the energy of Delhi — rooted in traditional recipes, reimagined for the way<br/> we eat today.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center md:justify-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" data-aos-offset="0">
            <button 
              onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#fbce3a] hover:bg-[#eab308] text-[#1a1a1a] font-bold text-sm px-8 py-4 rounded-full flex items-center space-x-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span>DISCOVER OUR STORY</span>
              <span>&darr;</span>
            </button>
          </div>
        </div>

        {/* Right Main Image Area */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative" data-aos="zoom-in-left" data-aos-duration="1600" data-aos-delay="400">
          <img 
            src="/images/heromain.webp" 
            alt="Delicious Indian Food Platter" 
            className="w-full max-w-[750px] object-contain drop-shadow-2xl mt-8 lg:mt-16 transition-transform duration-1000 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
