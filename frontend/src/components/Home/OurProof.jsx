import React from 'react';

const OurProof = () => {
  return (
    <div className="relative w-full min-h-screen font-poppins z-10 pt-16 pb-16 overflow-hidden flex flex-col-reverse lg:block justify-center">
      
      {/* Background Image with Fade */}
      <div 
        className="w-full lg:w-[55%] xl:w-[50%] lg:absolute lg:right-0 lg:top-16 h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[480px] flex items-center justify-end pointer-events-none z-0 mt-8 lg:mt-0 overflow-hidden" 
        data-aos="fade-left" 
        data-aos-duration="1500" 
        data-aos-once="false"
      >
        <img 
          src="/images/proof.png" 
          alt="Kitchen Operations" 
          className="w-full h-full object-cover object-[right_center]"
          style={{
            /* Smooth opacity: fades smoothly on the top, bottom, and left edge */
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
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-20 flex-1 flex flex-col">
        
        {/* Top Text Section */}
        <div className="w-full lg:w-[50%] mt-8 lg:mt-12 flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-right" data-aos-duration="1200" data-aos-once="false">
          {/* Overline */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 w-full">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
              <span className="mr-2">07</span> OUR PROOF
            </span>
            <div className="w-12 h-[1px] bg-[#2c4755]"></div>
          </div>

          {/* Heading */}
          <h2 className="font-caveat-brush font-bold text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] text-[#134954] tracking-wider drop-shadow-md transform -rotate-1 origin-left w-full mt-2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150" data-aos-once="false">
            <span className="whitespace-normal sm:whitespace-nowrap">WE DON'T JUST</span> <br className="hidden sm:block" />
            <span className="whitespace-normal sm:whitespace-nowrap">TALK ABOUT DINING.</span> <br className="hidden sm:block" />
            <span className="text-[#fbce3a] whitespace-normal sm:whitespace-nowrap">WE OPERATE IT.</span>
          </h2>

          {/* Simulated Brush Underline */}
          <div className="h-[4px] w-4/5 max-w-[350px] bg-[#fbce3a] mt-4 mx-auto lg:mx-0 rounded-full transform -rotate-2 opacity-90" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="false"></div>

          {/* Paragraphs */}
          <div className="mt-8 text-[14px] md:text-[15px] font-medium text-[#134954] leading-relaxed max-w-md mx-auto lg:mx-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" data-aos-once="false">
            <p>
              From cafés and resto-cafés to corporate and institutional dining, we've built our experience by putting food, people and operations together in the real world.
            </p>
          </div>
        </div>

        {/* Middle Section: Serving */}
        <div className="mt-12 lg:mt-16 flex flex-col items-center lg:items-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="false">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#2c4755] uppercase">
              WHERE WE'RE ALREADY SERVING
            </span>
            <div className="w-8 h-[1px] bg-[#2c4755]"></div>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-4 lg:gap-x-12">
            <span className="font-bold text-[#134954] text-lg lg:text-xl">BITS</span>
            <div className="hidden sm:block w-[1px] h-6 bg-gray-300"></div>
            <span className="font-bold text-[#134954] text-lg lg:text-xl">Accenture</span>
            <div className="hidden sm:block w-[1px] h-6 bg-gray-300"></div>
            <span className="font-bold text-[#134954] text-lg lg:text-xl">SmartQ</span>
            <div className="hidden sm:block w-[1px] h-6 bg-gray-300"></div>
            <span className="font-bold text-[#134954] text-lg lg:text-xl">GoKhana</span>
            <div className="hidden sm:block w-[1px] h-6 bg-gray-300"></div>
            <span className="font-bold text-[#134954] text-lg lg:text-xl">RedBricks</span>
            <div className="hidden sm:block w-[1px] h-6 bg-gray-300"></div>
            <span className="font-bold text-[#134954] text-lg lg:text-xl">Times Square</span>
          </div>
        </div>

        {/* Bottom Section: A Real Example Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mt-12 pt-12 border-t border-gray-200/50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="false">
          
          {/* Example Heading */}
          <div className="lg:col-span-1 lg:border-r lg:border-gray-300 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" data-aos-once="false">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#2c4755] uppercase">
                A REAL EXAMPLE
              </span>
              <div className="w-6 h-[1px] bg-[#2c4755]"></div>
            </div>
            <h3 className="font-caveat-brush font-bold text-3xl md:text-4xl text-[#134954] leading-[1.1] transform -rotate-1 origin-left tracking-wider drop-shadow-sm mt-4 w-full">
              <span className="whitespace-normal sm:whitespace-nowrap">3 LIVE COUNTERS.</span> <br className="hidden sm:block" />
              <span className="whitespace-normal sm:whitespace-nowrap">A STRONGER</span> <br className="hidden sm:block" />
              <span className="whitespace-normal sm:whitespace-nowrap">DINING EXPERIENCE.</span>
            </h3>
            <div className="h-[3px] w-3/4 max-w-[200px] bg-[#fbce3a] mt-3 mx-auto lg:mx-0 rounded-full transform -rotate-2 opacity-90"></div>
          </div>

          {/* The Challenge */}
          <div className="flex flex-col lg:border-r lg:border-gray-300 lg:pr-8 items-center lg:items-start text-center lg:text-left" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-once="false">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#fceba8] flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-[#134954]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="font-bold text-[#134954] text-xs tracking-wide uppercase mb-2 lg:mb-3 mt-2 lg:mt-0">THE CHALLENGE</h4>
                <p className="text-[11px] md:text-xs font-medium text-[#134954] leading-relaxed">
                  Customer complaints, dropping footfall, sales and engagement.
                </p>
              </div>
            </div>
          </div>

          {/* The Change */}
          <div className="flex flex-col lg:border-r lg:border-gray-300 lg:pr-8 items-center lg:items-start text-center lg:text-left" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="false">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#fceba8] flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-[#134954]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="font-bold text-[#134954] text-xs tracking-wide uppercase mb-2 lg:mb-3 mt-2 lg:mt-0">THE CHANGE</h4>
                <p className="text-[11px] md:text-xs font-medium text-[#134954] leading-relaxed">
                  2 States introduced 3 live counters offering fresh, made-to-order food.
                </p>
              </div>
            </div>
          </div>

          {/* The Result */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-once="false">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#fceba8] flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-[#134954]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="font-bold text-[#134954] text-xs tracking-wide uppercase mb-2 lg:mb-3 mt-2 lg:mt-0">THE RESULT</h4>
                <p className="text-[11px] md:text-xs font-medium text-[#134954] leading-relaxed">
                  Increased footfall and sales, higher customer satisfaction, and regained customer trust.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default OurProof;
