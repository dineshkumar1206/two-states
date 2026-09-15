import React from 'react';

const OurBelife = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center overflow-hidden py-16 lg:py-0 font-poppins">
      
      {/* Right-Center Image with feathered opacity on Top, Left, and Bottom */}
      <div 
        className="w-full lg:w-[66%] xl:w-[63%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 h-[350px] sm:h-[450px] lg:h-full flex items-center justify-end pointer-events-none z-0 mt-8 lg:mt-0"
        data-aos="zoom-in-left" 
        data-aos-duration="1500" 
        data-aos-delay="300"
        data-aos-once="false"
      >
        <div 
          className="w-full h-full relative flex items-center justify-end overflow-hidden"
          style={{
            /* Smooth vignette opacity: fades top ceiling, bottom foreground, and left edge */
            WebkitMaskImage: `
              linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 6%, rgba(0,0,0,0.95) 16%, black 25%),
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 8%, black 18%, black 82%, rgba(0,0,0,0.6) 92%, transparent 100%)
            `,
            WebkitMaskComposite: 'destination-in',
            maskImage: `
              linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 6%, rgba(0,0,0,0.95) 16%, black 25%),
              linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 8%, black 18%, black 82%, rgba(0,0,0,0.6) 92%, transparent 100%)
            `,
            maskComposite: 'intersect'
          }}
        >
          <img 
            src="/images/our-belife.png" 
            alt="Group of friends eating together" 
            className="w-full h-full object-cover object-[right_center] scale-90 lg:scale-[1.03]"
          />
        </div>
      </div>

      {/* Left Column: Shifted toward center with bolder, premium typography */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:pl-20 xl:pl-24 relative z-10 flex-1 flex items-center">
        <div className="w-full lg:w-[45%] xl:w-[42%] flex flex-col justify-center select-none text-center lg:text-left mt-8 lg:mt-0">
          
          {/* Overline */}
          <div className="flex items-center justify-center lg:justify-start space-x-3 mb-2" data-aos="fade-right" data-aos-duration="1000" data-aos-once="false">
            <span className="text-[11px] md:text-xs font-black tracking-[0.22em] text-[#1f3f4a] uppercase">
              OUR BELIEF
            </span>
            <div className="w-9 h-[1.5px] bg-[#1f3f4a]"></div>
          </div>

          {/* Marker Heading - Increased weight & subtle text-shadow for punch */}
          <h2 className="font-caveat-brush text-[2.5rem] sm:text-5xl lg:text-[56px] xl:text-[58px] leading-[1.1] font-black text-[#103b44] mt-4 tracking-normal drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150" data-aos-once="false">
            FOOD IS BETTER <br className="hidden sm:block" />
            WHEN PEOPLE<br className="hidden sm:block" />
            <span className="text-[#05a6c2] whitespace-normal sm:whitespace-nowrap"> COME TOGETHER.</span>
          </h2>

          {/* Simulated Brush Underline */}
          <div className="h-[4.5px] w-2/3 max-w-[280px] bg-[#f5b82e] mt-3.5 mx-auto lg:mx-0 rounded-full transform -rotate-2 opacity-95" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-once="false"></div>

          {/* Paragraphs - Bolder & darker for clear contrast */}
          <div className="mt-8 text-[14px] md:text-[15px] font-bold text-[#1a444e] leading-[1.65] max-w-[420px] mx-auto lg:mx-0 space-y-3.5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" data-aos-once="false">
            <p>From a table for two to a table for thousands, food has always been about bringing people together.</p>
            <p>It creates conversations, breaks routines, brings people closer and turns everyday moments into something worth remembering.</p>
            <p>At 2 States, we bring that same spirit to every place people eat, meet and connect.</p>
          </div>

          {/* Cursive Sign-off */}
          <p className="font-caveat text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#05a6c2] mt-8 leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="false">
            And that's where 2 States<br />
            goes beyond a Resto-Café.
          </p>
        </div>
      </div>

    </section>
  );
};

export default OurBelife;