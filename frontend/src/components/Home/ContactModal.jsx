import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission
    console.log("Form submitted:", formData);
    // Reset form and close
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:px-4 font-poppins overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-lg bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#103b44] to-[#1a5b68] p-8 text-center relative border-b border-[#06b6d4]/20">
              <button 
                onClick={onClose}
                className="absolute top-5 right-5 text-white/70 hover:text-white cursor-pointer hover:rotate-90 hover:scale-110 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <h3 className="text-[28px] font-black text-white tracking-wider font-poppins drop-shadow-md">CONTACT US</h3>
              <p className="text-white/80 text-[15px] mt-2 font-medium tracking-wide">We'd love to hear from you. Send us a message!</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#2c4755] mb-2 uppercase tracking-[0.1em] opacity-80">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 shadow-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#2c4755] mb-2 uppercase tracking-[0.1em] opacity-80">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#2c4755] mb-2 uppercase tracking-[0.1em] opacity-80">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 shadow-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2c4755] mb-2 uppercase tracking-[0.1em] opacity-80">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-5 py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 resize-none shadow-sm"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#fbce3a] to-[#e6b92d] hover:from-[#f5c21f] hover:to-[#dca91c] text-[#1f3f4a] font-bold text-base px-8 py-4 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-md hover:shadow-lg mt-4 transform hover:-translate-y-0.5"
              >
                <span className="tracking-wide">SEND MESSAGE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ContactModal;
