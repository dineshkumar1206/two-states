import React, { useState } from 'react';
import Scroll from '../Scroll';
import ContactModal from '../Home/ContactModal';

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  return (
    <>
    <footer className="w-full bg-white border-t border-gray-200 py-12 lg:py-8 font-poppins relative z-20 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        
        {/* Left: Logo */}
        <div className="shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
          {/* Using the exact logo from Navbar, increased size */}
          <img src="/images/2-states-Logo.png" alt="2 States Logo" className="h-24 sm:h-28 md:h-[100px] object-contain drop-shadow-sm" />
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 text-[11.5px] md:text-[12px] font-bold text-[#2c4755] uppercase tracking-wider w-full lg:w-auto lg:border-l lg:border-r lg:border-gray-300 lg:px-12 px-2">
          <Scroll to="/" className="hover:text-[#06b6d4] transition-colors duration-300">HOME</Scroll>
          <Scroll to="#our-story" className="hover:text-[#06b6d4] transition-colors duration-300">OUR STORY</Scroll>
          <Scroll to="#build" className="hover:text-[#06b6d4] transition-colors duration-300">ENTERPRISE</Scroll>
          <Scroll to="#case-study" className="hover:text-[#06b6d4] transition-colors duration-300">CASE STUDY</Scroll>
          <Scroll to="#behind" className="hover:text-[#06b6d4] transition-colors duration-300">OUR BRANDS</Scroll>
          <button onClick={() => setIsContactModalOpen(true)} className="hover:text-[#06b6d4] cursor-pointer transition-colors duration-300 outline-none uppercase">CONTACT</button>
        </div>

        {/* Right: Address / Info */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
          <h4 className="font-bold text-[#1f3f4a] text-[15px] mb-2">4S Hospitality LLP</h4>
          <p className="text-[#64748b] text-[12px] font-medium leading-relaxed max-w-[300px] lg:max-w-none">
            Our operating partners: WeTreat Inc & Bombay Bytes Co.
          </p>
          <p className="text-[#84a3b3] text-[11px] mt-4 font-medium">
            Designed and developed by <a href="https://amigowebster.com/" target="_blank" rel="noopener noreferrer" className="text-[#06b6d4] hover:text-[#134954] hover:underline transition-colors duration-300">amigowebster</a>
          </p>
        </div>

      </div>
    </footer>
    <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default Footer;
