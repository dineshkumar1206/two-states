import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 lg:py-6 font-poppins relative z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        
        {/* Left: Logo */}
        <div className="shrink-0 flex justify-center lg:justify-start w-full lg:w-auto" data-aos="fade-right" data-aos-duration="1000" data-aos-once="false">
          {/* Using your standard logo, rename if it differs */}
          <img src="/images/logo.png" alt="2 States Logo" className="h-14 sm:h-16 object-contain" />
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-[11px] md:text-[12px] font-bold text-[#2c4755] uppercase tracking-wider w-full lg:w-auto lg:border-l lg:border-r lg:border-gray-300 lg:px-12" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
          <a href="#" className="hover:text-[#06b6d4] transition-colors duration-300">HOME</a>
          <a href="#" className="hover:text-[#06b6d4] transition-colors duration-300">OUR STORY</a>
          <a href="#" className="hover:text-[#06b6d4] transition-colors duration-300">OUR BRANDS</a>
          <a href="#" className="hover:text-[#06b6d4] transition-colors duration-300">ENTERPRISE</a>
          <a href="#" className="hover:text-[#06b6d4] transition-colors duration-300">CONTACT</a>
        </div>

        {/* Right: Address / Info */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start shrink-0 w-full lg:w-auto" data-aos="fade-left" data-aos-duration="1000" data-aos-once="false">
          <h4 className="font-bold text-[#1f3f4a] text-sm mb-1.5">4S Hospitality LLP</h4>
          <p className="text-[#64748b] text-[11.5px] font-medium leading-relaxed max-w-[280px] lg:max-w-none">
            Our operating partners: WeTreat Inc & Bombay Bytes Co.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
