import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingButtons.css';
import MyCv from '../Home/cv.pdf';



const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ Changed from 400 to 150px
      setShowScrollTop(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check immediately on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-buttons-container">
      {/* Contact Button */}
      <motion.a
        href="#contactsection"
        className="float-btn contact-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaEnvelope />
        <span className="btn-label">Contact</span>
      </motion.a>

      {/* Resume Button */}
      <motion.a
        href={MyCv}
        download="Harsh_Agarwal_Resume.pdf"
        className="float-btn resume-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaFileDownload />
        <span className="btn-label">Resume</span>
      </motion.a>

      {/* Scroll to Top - SHOWS AFTER 150PX SCROLL */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="float-btn scroll-top-btn"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.15, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
            <span className="btn-label">Top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};



export default FloatingButtons;
