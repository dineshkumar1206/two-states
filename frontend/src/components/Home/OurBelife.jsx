import React from 'react';

const OurBelife = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center py-16 lg:py-0 font-montserrat z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[45%] flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
            {/* Overline */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
                OUR BELIEF
              </span>
              <div className="w-12 h-[1px] bg-[#2c4755]"></div>
            </div>

            {/* Marker Heading */}
            <h2 className="font-marker text-4xl md:text-5xl lg:text-5xl leading-[1.2] text-[#134954] mt-6 tracking-wide drop-shadow-sm">
              FOOD IS BETTER<br />
              WHEN PEOPLE<br />
              <span className="text-[#06b6d4] whitespace-nowrap">COME TOGETHER.</span>
            </h2>

            {/* Simulated Brush Underline */}
            <div className="h-[4px] w-2/3 max-w-[300px] bg-[#fbce3a] mt-4 rounded-full transform -rotate-2 opacity-90"></div>

            {/* Paragraphs */}
            <div className="mt-8 text-[14px] md:text-[15px] font-semibold text-[#134954] leading-relaxed max-w-md space-y-4">
              <p>From a table for two to a table for thousands, food has always been about bringing people together.</p>
              <p>It creates conversations, breaks routines, brings people closer and turns everyday moments into something worth remembering.</p>
              <p>At 2 States, we bring that same spirit to every place people eat, meet and connect.</p>
            </div>

            {/* Cursive Sign-off */}
            <p className="font-caveat text-4xl md:text-5xl text-[#06b6d4] mt-8 leading-tight drop-shadow-sm">
              And that's where 2 States<br />
              goes beyond a Resto-Café.
            </p>
          </div>

          {/* Right Column: Faded Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end items-center relative mt-12 lg:mt-0" data-aos="fade-up" data-aos-duration="1200" data-aos-once="false">
            <div 
              className="relative w-full max-w-[700px] aspect-[4/3] rounded-3xl overflow-hidden drop-shadow-xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%)'
              }}
            >
              <img 
                src="/images/our-belife.png" 
                alt="Group of friends eating together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>



      </div>
    </div>
  );
};

export default OurBelife;
