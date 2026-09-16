import React from 'react';

const OurStory = () => {
  return (
    <div id="our-story" className="relative w-full pt-20 pb-4 md:py-20 lg:py-32 font-poppins z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center lg:items-start">
          
          {/* Left Column: Our Story */}
          <div className="flex flex-col" data-aos="fade-right" data-aos-duration="1200" data-aos-once="false">
            {/* Overline */}
            {/* <div className="flex items-center space-x-4">
              <span className="text-[11px] md:text-xs font-black tracking-[0.22em] text-[#1f3f4a] uppercase">
                OUR STORY
              </span>
              <div className="w-10 h-[1.5px] bg-[#1f3f4a]"></div>
            </div> */}

            {/* Heading */}
            <h2 
              className="font-caveat-brush text-5xl sm:text-6xl lg:text-[54px] xl:text-[62px] font-bold text-[#103b44] leading-[1.05]"
              style={{ WebkitTextStroke: '1.5px #103b44' }}
            >
              What happens<br />when two states meet?
            </h2>

            {/* Subheading */}
            <h3 className="font-poppins font-bold text-sm sm:text-base lg:text-lg tracking-[0.15em] text-[#1a444e] mt-6 uppercase">
              A lot of good food.
            </h3>
            {/* Simulated Brush Underline */}
            <div className="h-[4px] w-4/5 max-w-[280px] bg-[#f5b82e] mt-2 rounded-full transform -rotate-1 opacity-95"></div>

            {/* Multi-colored text */}
            <div className="mt-8 text-[15px] sm:text-base lg:text-[17px] font-medium text-[#444] leading-relaxed space-y-1.5">
              <p><span className="text-[#d97706] font-bold text-lg sm:text-xl drop-shadow-sm">Punjab</span> brings the richness.</p>
              <p><span className="text-[#167d8f] font-bold text-base sm:text-lg">Tamil Nadu</span> brings the soul.</p>
              <p><span className="text-[#134954] font-bold text-base sm:text-lg">Delhi</span> brings the attitude.</p>
              <p className="pt-3 text-[#222] font-bold text-base sm:text-lg">And 2 States brings them all to the same table.</p>
            </div>

            {/* Paragraph */}
            <p className="mt-6 text-sm sm:text-base lg:text-[16px] text-[#555] leading-[1.7] pr-0 md:pr-4 font-medium">
              2 States was born from a simple idea — that food can bring very different worlds together. 
              Different cultures. Different food. Different stories. Yet somehow, around a table, it all makes sense.
            </p>
          </div>

          {/* Center Column: Image */}
          <div className="flex justify-center items-center py-8 lg:py-0 lg:self-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" data-aos-once="false">
            <img 
              src="/images/our-story.webp" 
              alt="Two States Drinks and Spices" 
              className="w-full max-w-[320px] md:max-w-[420px] object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Column: Our Food */}
          <div className="flex flex-col" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="400" data-aos-once="false">
            {/* Overline */}
            {/* <div className="flex items-center space-x-4 mb-4 lg:mb-6">
              <span className="text-[11px] md:text-xs font-black tracking-[0.22em] text-[#1f3f4a] uppercase">
                OUR FOOD
              </span>
              <div className="w-10 h-[1.5px] bg-[#1f3f4a]"></div>
            </div> */}

            {/* Headings */}
            <h2 
              className="font-caveat-brush text-5xl sm:text-6xl lg:text-[54px] xl:text-[62px] font-bold text-[#103b44] leading-[1.05]"
              style={{ WebkitTextStroke: '1.5px #103b44' }}
            >
              We respect<br className="hidden md:block" /> the recipe.
            </h2>
            <h2 
              className="font-caveat-brush text-5xl sm:text-6xl lg:text-[54px] xl:text-[62px] font-bold text-[#05a6c2] leading-[1.05] mt-1 lg:mt-2"
              style={{ WebkitTextStroke: '1.5px #05a6c2' }}
            >
              We rethink<br className="hidden md:block" /> the experience.
            </h2>
            {/* Simulated Brush Underline */}
            <div className="h-[4px] w-full max-w-[85%] bg-[#f5b82e] mt-4 lg:mt-5 rounded-full transform -rotate-1 opacity-95"></div>

            {/* Paragraphs */}
            <p className="mt-8 text-sm sm:text-base lg:text-[16px] text-[#555] leading-[1.7] font-medium">
              From the richness of Punjab to the grounded flavours of Tamil Nadu and the energy of Delhi, 
              we stay true to the traditions that inspire us — while presenting them for today's diner.
            </p>

            <p className="mt-6 text-sm sm:text-base lg:text-[17px] font-bold text-[#222] leading-[1.6]">
              Traditional recipes. Familiar flavours.<br />
              <span className="text-[#05a6c2]">A fresh way of experiencing them.</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OurStory;
