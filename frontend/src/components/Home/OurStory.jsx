import React from 'react';

const OurStory = () => {
  return (
    <div className="relative w-full py-20 lg:py-32 font-montserrat z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Our Story */}
          <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
            {/* Overline */}
            <div className="flex items-center space-x-4">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
                OUR STORY
              </span>
              <div className="w-12 h-[1px] bg-[#2c4755]"></div>
            </div>

            {/* Heading */}
            <h2 className="font-playfair text-4xl md:text-[2.75rem] font-bold text-[#134954] leading-[1.1] mt-6">
              What happens<br />when two states meet?
            </h2>

            {/* Subheading */}
            <h3 className="font-montserrat font-bold text-sm tracking-[0.15em] text-[#2c4755] mt-6 uppercase">
              A lot of good food.
            </h3>
            {/* Simulated Brush Underline */}
            <div className="h-[3px] w-3/4 bg-[#fbce3a] mt-2 rounded-full transform -rotate-1 opacity-90"></div>

            {/* Multi-colored text */}
            <div className="mt-8 text-[15px] text-[#444] leading-relaxed space-y-1">
              <p><span className="text-[#d97706] font-bold text-lg drop-shadow-sm">Punjab</span> brings the richness.</p>
              <p><span className="text-[#167d8f] font-bold text-base">Tamil Nadu</span> brings the soul.</p>
              <p><span className="text-[#134954] font-bold text-base">Delhi</span> brings the attitude.</p>
              <p className="pt-3 text-[#333] font-bold">And 2 States brings them all to the same table.</p>
            </div>

            {/* Paragraph */}
            <p className="mt-6 text-[13px] md:text-sm text-[#555] leading-relaxed pr-0 md:pr-4">
              2 States was born from a simple idea — that food can bring very different worlds together. 
              Different cultures. Different food. Different stories. Yet somehow, around a table, it all makes sense.
            </p>
          </div>

          {/* Center Column: Image */}
          <div className="flex justify-center items-center py-8 lg:py-0" data-aos="fade-up" data-aos-duration="1200" data-aos-once="false">
            <img 
              src="/images/our-story.png" 
              alt="Two States Drinks and Spices" 
              className="w-full max-w-[320px] md:max-w-[400px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Right Column: Our Food */}
          <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
            {/* Overline */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
                OUR FOOD
              </span>
              <div className="w-12 h-[1px] bg-[#2c4755]"></div>
            </div>

            {/* Headings */}
            <h2 className="font-playfair text-4xl md:text-[3rem] font-bold text-[#134954] leading-[1.1]">
              We respect<br />the recipe.
            </h2>
            <h2 className="font-playfair text-4xl md:text-[3rem] font-bold text-[#167d8f] leading-[1.1] mt-1">
              We rethink<br />the experience.
            </h2>
            {/* Simulated Brush Underline */}
            <div className="h-[3px] w-full max-w-[90%] bg-[#fbce3a] mt-4 rounded-full transform -rotate-1 opacity-90"></div>

            {/* Paragraphs */}
            <p className="mt-8 text-[13px] md:text-sm text-[#555] leading-relaxed">
              From the richness of Punjab to the grounded flavours of Tamil Nadu and the energy of Delhi, 
              we stay true to the traditions that inspire us — while presenting them for today's diner.
            </p>

            <p className="mt-6 text-[13px] md:text-sm font-bold text-[#333] leading-relaxed">
              Traditional recipes. Familiar flavours.<br />
              A fresh way of experiencing them.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OurStory;
