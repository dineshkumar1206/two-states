import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../../config';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${config.API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Auto close after 4.5 seconds on success to allow animation to play
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 4500);
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ type: 'error', message: 'Failed to connect to the server.' });
    } finally {
      setIsSubmitting(false);
    }
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
            className="relative w-full max-w-lg max-h-[95vh] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#103b44] to-[#1a5b68] p-6 sm:p-8 text-center relative border-b border-[#06b6d4]/20 shrink-0">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-white/70 hover:text-white cursor-pointer hover:rotate-90 hover:scale-110 transition-all duration-300 z-10 p-1"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <h3 className="text-2xl sm:text-[28px] font-black text-white tracking-wider font-poppins drop-shadow-md">CONTACT US</h3>
              <p className="text-white/80 text-sm sm:text-[15px] mt-1 sm:mt-2 font-medium tracking-wide">We'd love to hear from you. Send us a message!</p>
            </div>

            {/* Form */}
            {submitStatus?.type === 'success' ? (
              <div className="flex flex-col items-center justify-center p-12 sm:p-16 space-y-6 h-full min-h-[350px]">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  <motion.svg 
                    width="50" 
                    height="50" 
                    viewBox="0 0 50 50"
                  >
                    <motion.path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 26 l8 8 l16 -16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    />
                  </motion.svg>
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-2xl sm:text-3xl font-black text-[#134954] text-center drop-shadow-sm"
                >
                  Message Sent!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-[#2c4755] text-center text-sm sm:text-base font-medium max-w-xs"
                >
                  Thank you for reaching out. We will get back to you shortly.
                </motion.p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 overflow-y-auto custom-scrollbar">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-[#2c4755] mb-1.5 sm:mb-2 uppercase tracking-[0.1em] opacity-80">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 shadow-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#2c4755] mb-1.5 sm:mb-2 uppercase tracking-[0.1em] opacity-80">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#2c4755] mb-1.5 sm:mb-2 uppercase tracking-[0.1em] opacity-80">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 shadow-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-[#2c4755] mb-1.5 sm:mb-2 uppercase tracking-[0.1em] opacity-80">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-[#f8fafc] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/40 focus:border-[#06b6d4] hover:border-gray-300 transition-all duration-300 text-[#134954] font-medium placeholder-gray-400 resize-none shadow-sm sm:rows-4"
                  placeholder="TELL US HOW WE CAN WORK TOGETHER AND CREATE BETTER DINING EXPERIENCES..."
                ></textarea>
              </div>

              {submitStatus && submitStatus.type === 'error' && (
                <div className="p-3 sm:p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200">
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#fbce3a] to-[#e6b92d] hover:from-[#f5c21f] hover:to-[#dca91c] disabled:opacity-70 disabled:cursor-not-allowed text-[#1f3f4a] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 shadow-md hover:shadow-lg mt-2 sm:mt-4 transform hover:-translate-y-0.5 shrink-0"
              >
                <span className="tracking-wide">{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                {!isSubmitting && <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ContactModal;
