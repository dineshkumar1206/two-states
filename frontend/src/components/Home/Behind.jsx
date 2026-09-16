import React from 'react';

// ==========================================
// CONFIGURATION: UPDATE YOUR IMAGES HERE
// ==========================================
const PROFILE_IMAGE = "/images/sankar.webp";

const BRANDS_DATA = [
  { 
    id: 1, 
    name: "IDlish", 
    tagline: "SOUTH INDIAN | EVERYDAY", 
    logo: "/images/idlish-logo.png", 
    link: "https://idlish.shop/",
    aosDelay: "300",
    imgClass: "h-20 sm:h-24 w-auto"
  },
  { 
    id: 2, 
    name: "Chettinad Bites", 
    tagline: "TRADITIONAL | TIMELESS", 
    logo: "/images/chettinad-logo.png", 
    link: "https://chettinad.co.in/",
    aosDelay: "450",
    imgClass: "h-32 sm:h-40 w-auto"
  },
  { 
    id: 3, 
    name: "iDaily", 
    tagline: "SIMPLE | NUTRITIOUS | DELICIOUS", 
    logo: "/images/idaily-logo.webp", 
    link: "#",
    aosDelay: "600",
    imgClass: "h-28 sm:h-36 w-auto"
  },
  { 
    id: 4, 
    name: "Naanstop Kitchen", 
    tagline: "BOLD FLAVOURS | ON THE GO", 
    logo: "/images/naanstop-logo.png", 
    link: "#",
    aosDelay: "750",
    imgClass: "h-20 sm:h-24 w-auto scale-[1.5] sm:scale-[1.7]"
  }
];

const Behind = () => {
  return (
    <div id="behind" className="relative w-full pt-16 pb-4 sm:pb-0 mb-0 sm:mb-0 lg:pt-24 lg:pb-8 font-poppins z-10 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative lg:pr-8" data-aos="fade-right" data-aos-duration="1200" data-aos-once="false">
            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>

            {/* Overline */}
            {/* <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 w-full">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
                <span className="mr-2">09</span> BEHIND THE BRANDS
              </span>
              <div className="w-12 h-[1px] bg-[#2c4755]"></div>
            </div> */}

            {/* Heading */}
            <h2 className="font-caveat-brush font-black text-4xl sm:text-5xl lg:text-[60px] xl:text-[70px] leading-[1.05] text-[#134954] tracking-normal w-full transform -rotate-1 origin-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] mt-2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="150" data-aos-once="false">
              <span className="whitespace-normal sm:whitespace-nowrap">GOOD FOOD</span> <br className="hidden sm:block" />
              <span className="whitespace-normal sm:whitespace-nowrap">ALWAYS STARTS</span> <br className="hidden sm:block" />
              <span className="text-[#06b6d4] whitespace-normal sm:whitespace-nowrap block mt-1 lg:mt-2">WITH PEOPLE.</span>
            </h2>

            {/* Simulated Brush Underline */}
            <div className="h-[4px] w-4/5 max-w-[350px] bg-[#fbce3a] mt-4 mx-auto lg:mx-0 rounded-full transform -rotate-2 opacity-90" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300" data-aos-once="false"></div>

            {/* Paragraphs */}
            <div className="mt-8 text-[14px] md:text-[15px] font-medium text-[#134954] leading-relaxed max-w-md mx-auto lg:mx-0 space-y-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="450" data-aos-once="false">
              <p>
                2 States is part of 4S Hospitality LLP, a food company built around creating brands, food experiences and dining businesses that people love.
              </p>
              <p>
                From neighbourhood cafés to enterprise dining, our journey has always been about the same thing — better food, more people, brighter days.
              </p>
            </div>

            {/* Profile Block */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 text-left w-full max-w-lg mx-auto lg:mx-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="false">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 shrink-0 overflow-hidden rounded-md bg-gray-100 shadow-md">
                {/* Profile Image */}
                <img src={PROFILE_IMAGE} alt="Sankar Kasirajan" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h4 className="font-bold text-[#134954] text-sm uppercase tracking-wide">SANKAR KASIRAJAN</h4>
                <p className="text-[12px] text-[#134954] font-medium mb-3">Founder, 4S Hospitality LLP</p>
                <p className="text-[12px] italic text-[#134954] font-medium leading-[1.6] mb-3">
                  "Good food has the power to bring people together. That belief continues to inspire everything we do."
                </p>
                <a href="https://www.linkedin.com/in/sankar-kasirajan/" className="inline-flex items-center space-x-2 text-[#0a66c2] hover:text-[#004182] transition-colors text-[12px] font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span>View my LinkedIn profile</span>
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-4 lg:pt-0" data-aos="fade-left" data-aos-duration="1200" data-aos-once="false">
            {/* Overline */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4 w-full">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2c4755] uppercase">
                MORE FROM 4S HOSPITALITY
              </span>
              <div className="w-12 h-[1px] bg-[#2c4755]"></div>
            </div>

            {/* Paragraph */}
            <div className="text-[14px] md:text-[15px] font-medium text-[#134954] leading-relaxed max-w-sm mb-10 mx-auto lg:mx-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="false">
              <p>A growing family of food brands, each with its own personality, cuisine and point of view.</p>
            </div>

            {/* Brands Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-8 lg:gap-x-12 relative">
              {/* Horizontal & Vertical Dividers for Desktop Grid lines */}
              <div className="hidden sm:block absolute left-0 right-0 top-[45%] h-[1px] bg-gray-200"></div>
              <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-200 -translate-x-1/2"></div>

              {BRANDS_DATA.map((brand) => (
                <a href={brand.link} key={brand.id} className="flex flex-col items-center justify-center relative p-4 group cursor-pointer" data-aos="zoom-in" data-aos-duration="800" data-aos-delay={brand.aosDelay} data-aos-once="false">
                  <div className="h-24 md:h-28 flex items-center justify-center w-full transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Brand Logo */}
                    <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-full h-full">
                      <img src={brand.logo} alt={brand.name} className={`${brand.imgClass} object-contain`} />
                    </div>
                  </div>
                  {/* Brand Logo only (tagline removed) */}                </a>
              ))}

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Behind;
