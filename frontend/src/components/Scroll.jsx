import React from 'react';

const Scroll = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    let targetY = 0;
    
    if (to !== '/' && to !== '') {
      const targetId = to.startsWith('#') ? to.substring(1) : to;
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80; // Navbar height offset
        targetY = element.getBoundingClientRect().top + window.scrollY + yOffset;
      } else {
        window.location.href = to;
        return;
      }
    }

    // Ultra smooth custom scroll animation
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1200; // 1.2 seconds for ultra smooth feel
    let start = null;

    // Easing function: easeInOutQuart
    const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      
      window.scrollTo(0, startY + distance * easeInOutQuart(percent));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default Scroll;
