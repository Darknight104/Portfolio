/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./hero.css";
import Profile from "../../assets/profile.jpg";
import Resume from "../../assets/HariharaSudhan Profile.pdf";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showResume) {
        setShowResume(false);
      }
    };

    if (showResume) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [showResume]);

  const handleModalClick = (e) => {
        if (e.target.classList.contains('resume-modal')) {
      setShowResume(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Harihara_Sudhan_Profile.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      id="home"
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.img
        src={Profile}
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span>Hi, I am Harihara Sudhan,Frontend developer</span> 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Hi, I am Harihara Sudhan, frontend developer and AR/VR developer.
      </motion.p>

      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="heroconnect">
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Connect With Me
          </Link>
        </div>
        <div className="hero-resume" onClick={() => {
          setShowResume(true);
          setIsLoading(true);
        }}>
          My Resume
        </div>
      </motion.div>

  
      <AnimatePresence>
        {showResume && (
          <motion.div
            className="resume-modal modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleModalClick}
          >
            <motion.div
              className="resume-content modal-content-animate"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.4, 
                type: "spring",
                damping: 25,
                stiffness: 300 
              }}
              onClick={(e) => e.stopPropagation()}
            >
        
              <div className="resume-header">
                <div className="resume-title">
                  Harihara Sudhan - Resume
                </div>
                <motion.button 
                  className="close-btn" 
                  onClick={() => setShowResume(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  ×
                </motion.button>
              </div>

         
              <div className="resume-viewer">
                {isLoading && (
                  <motion.div 
                    className="resume-loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="loading-spinner"></div>
                    <p>Loading Resume...</p>
                  </motion.div>
                )}
                
                <iframe 
                  src={`${Resume}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="Harihara Sudhan Resume"
                  onLoad={handleIframeLoad}
                  style={{ 
                    opacity: isLoading ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                />
              </div>

      
              <motion.button
                className="download-btn"
                onClick={handleDownload}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Hero;