import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, FaUser, FaCode, FaBriefcase, 
  FaGraduationCap, FaProjectDiagram, 
  FaCertificate, FaEnvelope, FaBars, FaTimes 
} from 'react-icons/fa';
import './Sidebar.css';
import profileImg from '../../Image/Profile.jpeg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome />, color: '#f97316' },
    { id: 'about', label: 'About', icon: <FaUser />, color: '#3b82f6' },
    { id: 'techstack', label: 'Tech Stack', icon: <FaCode />, color: '#8b5cf6' },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase />, color: '#10b981' },
    { id: 'education', label: 'Education', icon: <FaGraduationCap />, color: '#f59e0b' },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram />, color: '#ec4899' },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate />, color: '#06b6d4' },
    { id: 'contactsection', label: 'Contact', icon: <FaEnvelope />, color: '#ef4444' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <motion.button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.aside
              className="modern-sidebar"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Profile Section */}
              <div className="sidebar-profile">
                <div className="profile-img-wrapper">
                  <img src={profileImg} alt="Harsh Agarwal" />
                  <div className="status-indicator"></div>
                </div>
                <h3 className="profile-name">Harsh Agarwal</h3>
                <p className="profile-title">Full Stack Developer</p>
              </div>

              {/* Navigation */}
              <nav className="sidebar-nav">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 10 }}
                    style={{ '--item-color': item.color }}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="active-indicator"
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <div className="sidebar-footer">
                <p>© 2025 Harsh Agarwal</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
