import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scroll from '../Scroll';
import ContactModal from '../Home/ContactModal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`absolute top-0 left-0 right-0 w-full z-[60] transition-all duration-300 font-poppins ${
        isScrolled ? 'bg-transparent backdrop-blur-md shadow-sm py-2 sm:py-3' : 'bg-transparent py-6'
      }`}>
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center" data-aos="fade-down" data-aos-duration="1000">
            <Scroll to="/">
              <img 
                src="/images/2-states-Logo.png" 
                alt="2 States Logo" 
                className={`w-auto drop-shadow-sm transition-all duration-300 ${
                  isScrolled ? 'h-14 sm:h-16 md:h-20' : 'h-20 sm:h-24 md:h-[110px]'
                }`} 
              />
            </Scroll>
          </div>

        {/* Navigation Links */}
        <div className="flex-1 hidden lg:flex items-center justify-center space-x-6 text-[10px] md:text-[11px] font-bold tracking-widest text-[#2c4755]" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
          <Scroll to="/" className="border-b-2 border-[#167d8f] pb-1 text-[#167d8f] whitespace-nowrap">HOME</Scroll>
          <Scroll to="#our-story" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">OUR STORY</Scroll>
          <Scroll to="#build" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">ENTERPRISE</Scroll>
          <Scroll to="#case-study" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">CASE STUDY</Scroll>
          <Scroll to="#behind" className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap">OUR BRANDS</Scroll>
          <button onClick={() => setIsContactModalOpen(true)} className="hover:text-[#167d8f] transition-colors pb-1 whitespace-nowrap outline-none cursor-pointer uppercase">CONTACT</button>
        </div>

        {/* CTA Button and Mobile Menu Toggle */}
        <div className="flex-1 flex justify-end items-center space-x-3 sm:space-x-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
          {/* Mobile menu icon (hamburger) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#134954] p-2 hover:bg-[#134954]/10 rounded-full transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-[#f8f6f0] pt-[120px] pb-8 px-6 flex flex-col font-poppins lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-center text-[15px] font-bold tracking-widest text-[#2c4755]">
              <Scroll to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#167d8f] pb-3 border-b border-gray-200">HOME</Scroll>
              <Scroll to="#our-story" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#167d8f] transition-colors pb-3 border-b border-gray-200">OUR STORY</Scroll>
              <Scroll to="#build" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#167d8f] transition-colors pb-3 border-b border-gray-200">ENTERPRISE</Scroll>
              <Scroll to="#behind" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#167d8f] transition-colors pb-3 border-b border-gray-200">OUR BRANDS</Scroll>
              <Scroll to="#case-study" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#167d8f] transition-colors pb-3 border-b border-gray-200">CASE STUDY</Scroll>
              <button onClick={() => { setIsMobileMenuOpen(false); setIsContactModalOpen(true); }} className="hover:text-[#167d8f] transition-colors pb-3 border-b border-gray-200 outline-none uppercase text-center w-full block">CONTACT</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default Navbar;
