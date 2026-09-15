import React, { useState } from 'react';
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 font-poppins">
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
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#134954] p-6 text-center relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <h3 className="text-2xl font-black text-white tracking-wide">CONTACT US</h3>
              <p className="text-white/80 text-sm mt-2 font-medium">We'd love to hear from you. Send us a message!</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div>
                <label className="block text-sm font-bold text-[#2c4755] mb-1.5 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all text-[#134954] font-medium placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#2c4755] mb-1.5 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all text-[#134954] font-medium placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#2c4755] mb-1.5 uppercase tracking-wide">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all text-[#134954] font-medium placeholder-gray-400"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#2c4755] mb-1.5 uppercase tracking-wide">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all text-[#134954] font-medium placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#fbce3a] hover:bg-[#e6b92d] text-[#1f3f4a] font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg mt-2"
              >
                <span>SEND MESSAGE</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
