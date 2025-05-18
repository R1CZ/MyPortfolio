import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaEnvelope, FaUsers } from 'react-icons/fa';

const Navbar = ({
  onHomeClick,
  onAboutClick,
  onOthersClick,
  onProjectsClick,
  onContactClick,
  onCollaborationClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const handleMenuClick = (callback) => {
    callback();
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/30 shadow-lg' : 'backdrop-blur-lg bg-white/10'
      }`}
    >
      <div className="container mx-auto py-2 flex justify-between items-center px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="text-2xl font-bold text-white hidden md:inline">R1CZ PORTFOLIO</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button 
            className="text-white p-2 rounded-full hover:bg-white/20 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <button onClick={onHomeClick} className="text-white hover:text-gray-200 transition-colors">
            Home
          </button>
          <button onClick={onAboutClick} className="text-white hover:text-gray-200 transition-colors">
            About Me
          </button>
          <button onClick={onOthersClick} className="text-white hover:text-gray-200 transition-colors">
            Others
          </button>
          <button onClick={onProjectsClick} className="text-white hover:text-gray-200 transition-colors">
            Projects
          </button>
          <button onClick={onContactClick} className="text-white hover:text-gray-200 transition-colors">
            Contact
          </button>
        </div>

        {/* Collaborators Button */}
        <button
          onClick={onCollaborationClick}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline text-sm md:text-base lg:text-lg xl:text-xl transform transition-all duration-300 hover:scale-110 px-4 py-2 rounded-full shadow-lg hover:shadow-xl"
        >
          Collaborators
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 h-screen w-full transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-8">
            {/* Close Button */}
         

            {/* Mobile Menu Links with Labels */}
            <button 
              onClick={() => handleMenuClick(onHomeClick)}
              className="flex items-center w-full text-white py-4 hover:bg-white/20 rounded-lg px-6 transition-all"
            >
              <FaHome className="text-2xl mr-4" />
              <span className="text-xl">Home</span>
            </button>
            
            <button 
              onClick={() => handleMenuClick(onAboutClick)}
              className="flex items-center w-full text-white py-4 hover:bg-white/20 rounded-lg px-6 transition-all"
            >
              <FaUserAlt className="text-2xl mr-4" />
              <span className="text-xl">About Me</span>
            </button>
            
            <button 
              onClick={() => handleMenuClick(onOthersClick)}
              className="flex items-center w-full text-white py-4 hover:bg-white/20 rounded-lg px-6 transition-all"
            >
              <FaTools className="text-2xl mr-4" />
              <span className="text-xl">Others</span>
            </button>
            
            <button 
              onClick={() => handleMenuClick(onProjectsClick)}
              className="flex items-center w-full text-white py-4 hover:bg-white/20 rounded-lg px-6 transition-all"
            >
              <FaProjectDiagram className="text-2xl mr-4" />
              <span className="text-xl">Projects</span>
            </button>
            
            <button 
              onClick={() => handleMenuClick(onContactClick)}
              className="flex items-center w-full text-white py-4 hover:bg-white/20 rounded-lg px-6 transition-all"
            >
              <FaEnvelope className="text-2xl mr-4" />
              <span className="text-xl">Contact</span>
            </button>

            {/* Collaborators Button for mobile */}
            <button
              onClick={() => handleMenuClick(onCollaborationClick)}
              className="mt-8 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <FaUsers className="mr-3" />
              <span>Collaborators</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;