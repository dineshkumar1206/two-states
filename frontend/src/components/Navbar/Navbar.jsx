import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 mx-auto w-full max-w-[1440px] z-50 py-6 px-8 lg:px-12 flex items-center justify-between font-montserrat">
      {/* Logo */}
      <div className="flex-1 flex items-center" data-aos="fade-down" data-aos-duration="1000">
        <img 
          src="/images/2-states-Logo.png" 
          alt="2 States Logo" 
          className="h-32 md:h-[130px] w-auto drop-shadow-sm" 
        />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 hidden md:flex items-center justify-center space-x-8 text-xs font-bold tracking-widest text-[#2c4755]" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
        <a href="#" className="border-b-2 border-[#167d8f] pb-1 text-[#167d8f]">HOME</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1">OUR STORY</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1">FOOD</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1">ENTERPRISE</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1">OUR BRANDS</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1">CAREERS</a>
        <a href="#" className="hover:text-[#167d8f] transition-colors pb-1">CONTACT</a>
      </div>

      {/* CTA Button */}
      <div className="flex-1 flex justify-end" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
        <button className="bg-[#fbce3a] hover:bg-[#eab308] text-[#1a1a1a] font-bold text-xs px-6 py-3 rounded-full flex items-center space-x-2 transition-all shadow-md">
          <span>PARTNER WITH US</span>
          <span>&rarr;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
