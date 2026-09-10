import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F6] to-[#e8e6df] flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-lg w-full flex flex-col items-center text-center p-10 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative"
      >
        <motion.div variants={itemVariants} className="mb-8 relative z-10">
          <motion.img 
            src="/images/2-states-Logo.png" 
            alt="Logo" 
            className="max-w-[360px] w-full h-auto drop-shadow-lg mx-auto cursor-pointer"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onError={(e) => {
                e.target.style.display = 'none';
            }}
          />
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="relative z-10"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1, backgroundColor: '#2ba3a7' }}
            className="bg-[#37B6BA] text-white font-bold uppercase tracking-wider py-2.5 px-8 rounded-full mb-6 inline-block shadow-md cursor-pointer transition-colors"
          >
            Coming Soon
          </motion.div>
        </motion.div>
        
        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-2xl font-medium text-stone-600 relative z-10"
        >
          Something delicious is cooking. Stay tuned!
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default ComingSoon;

