import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 mx-auto w-full max-w-7xl z-50 py-6 px-4 md:px-8 flex items-center justify-between font-poppins">
      {/* Logo */}
      <div className="flex-1 flex items-center" data-aos="fade-down" data-aos-duration="1000">
        <img 
          src="/images/2-states-Logo.png" 
          alt="2 States Logo" 
          className="h-20 sm:h-24 md:h-[110px] w-auto drop-shadow-sm" 
        />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 hidden lg:flex items-center justify-center space-x-6 text-[10px] md:text-[11px] font-bold tracking-widest text-[#2c4755]" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
        <a href="#" className="border-b-2 border-[#167d8f] pb-1 text-[#167d8f] whitespace-nowrap">HOME</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">OUR STORY</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">FOOD</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">ENTERPRISE</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">OUR BRANDS</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">CAREERS</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">CONTACT</a>
      </div>

      {/* CTA Button and Mobile Menu Toggle */}
      <div className="flex-1 flex justify-end items-center space-x-3 sm:space-x-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
        <button className="hidden sm:flex bg-[#fbce3a] hover:bg-[#eab308] text-[#1a1a1a] font-bold text-[10px] sm:text-xs px-5 sm:px-6 py-2.5 sm:py-3 rounded-full items-center space-x-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-[1px]">
          <span>PARTNER WITH US</span>
          <span>&rarr;</span>
        </button>
        {/* Mobile menu icon (hamburger) */}
        <button className="lg:hidden text-[#134954] p-2 hover:bg-[#f8f6f0] rounded-full transition-colors focus:outline-none">
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
