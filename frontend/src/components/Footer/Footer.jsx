import React from 'react';
import Scroll from '../Scroll';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 lg:py-6 font-poppins relative z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        
        {/* Left: Logo */}
        <div className="shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
          {/* Using the exact logo from Navbar, increased size */}
          <img src="/images/2-states-Logo.png" alt="2 States Logo" className="h-24 sm:h-28 md:h-[100px] object-contain drop-shadow-sm" />
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-[11px] md:text-[12px] font-bold text-[#2c4755] uppercase tracking-wider w-full lg:w-auto lg:border-l lg:border-r lg:border-gray-300 lg:px-12">
          <Scroll to="/" className="hover:text-[#06b6d4] transition-colors duration-300">HOME</Scroll>
          <Scroll to="#our-story" className="hover:text-[#06b6d4] transition-colors duration-300">OUR STORY</Scroll>
          <Scroll to="#build" className="hover:text-[#06b6d4] transition-colors duration-300">ENTERPRISE</Scroll>
          <Scroll to="#behind" className="hover:text-[#06b6d4] transition-colors duration-300">OUR BRANDS</Scroll>
          <Scroll to="#contact" className="hover:text-[#06b6d4] transition-colors duration-300">CONTACT</Scroll>
        </div>

        {/* Right: Address / Info */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start shrink-0 w-full lg:w-auto">
          <h4 className="font-bold text-[#1f3f4a] text-sm mb-1.5">4S Hospitality LLP</h4>
          <p className="text-[#64748b] text-[11.5px] font-medium leading-relaxed max-w-[280px] lg:max-w-none">
            Our operating partners: WeTreat Inc & Bombay Bytes Co.
          </p>
          <p className="text-[#84a3b3] text-[10.5px] mt-2.5 font-medium">
            Designed and developed by <a href="https://amigowebster.com/" target="_blank" rel="noopener noreferrer" className="text-[#06b6d4] hover:text-[#134954] hover:underline transition-colors duration-300">amigowebster</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
