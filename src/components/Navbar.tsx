'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FiHome, 
  FiSearch, 
  FiCalendar, 
  FiClipboard, 
  FiMail, 
  FiSettings, 
  FiInfo, 
  FiLogOut, 
  FiLogIn,
  FiUser,
  FiBook,
  FiPhone
} from 'react-icons/fi';
// import { motion } from 'framer-motion';

interface NavbarProps {
  // Remove the onSellWithUsClick prop
}

const Navbar = () => {
  const [analysesOpen, setAnalysesOpen] = useState(false);
  const [mobileAnalysisOpen, setMobileAnalysisOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenuItem, setActiveMobileMenuItem] = useState<string>('Home'); // State for active mobile menu item

  const handleMobileMenuItemClick = (item: string) => {
    setActiveMobileMenuItem(item);
    setIsOpen(false); // Close the main mobile menu
    if (item !== 'Explore') { // If not analytics, close dropdowns
      setMobileAnalysisOpen(false);
      setAnalysesOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center pt-4 pb-2 bg-transparent z-50">
      <div className="w-[97%] rounded-full bg-white/80 shadow flex items-center justify-between px-4 md:px-6 py-3">
        <div>
          <Link href="/" className="text-xl md:text-2xl font-bold text-black font-sans flex items-center">
            AuraSync
            <span className="block h-6 w-px bg-black ml-4" />
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-4 md:space-x-8 text-sm md:text-base font-medium">
          <Link href="/" className="relative group text-black transition-colors duration-300">
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#footer" className="relative group text-black transition-colors duration-300">
            ABOUT US
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {/* Analytics Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAnalysesOpen(true)}
            onMouseLeave={() => setAnalysesOpen(false)}
          >
            <button
              onClick={() => setAnalysesOpen(prev => !prev)}
              className="relative group text-black transition-colors duration-300 focus:outline-none"
            >
              ANALYSIS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            {analysesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50">
                <Link href="/analysis/body" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={() => setAnalysesOpen(false)}>Body Analysis</Link>
                <Link href="/analysis/face" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={() => setAnalysesOpen(false)}>Face Analysis</Link>
                <Link href="/analysis/personality" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={() => setAnalysesOpen(false)}>Personality Analysis</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="relative group text-black transition-colors duration-300">
            CONTACT US
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/sell-with-us" className="relative group text-black transition-colors duration-300">
            SELL WITH US
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-2 text-sm md:text-base">
          <Link href="/login" className="px-4 md:px-6 py-2 text-black font-medium rounded-full bg-yellow-200 hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center">LOGIN</Link>
          <Link href="/signup" className="bg-black text-white px-4 md:px-6 py-2 font-medium rounded-full hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center">SIGN UP</Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" className="text-xl font-bold text-black" onClick={() => setIsOpen(false)}>AuraSync</Link>
          <button onClick={() => setIsOpen(false)} className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link href="/" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('Home')}>
            <FiHome className="w-5 h-5" />
            <span>Home</span>
          </Link>
          {/* Explore/Analytics Dropdown for Mobile */}
          <div className="relative w-full">
            <button
              onClick={() => setMobileAnalysisOpen(!mobileAnalysisOpen)}
              className="flex items-center space-x-3 p-2 rounded-md w-full text-left text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
            >
              <FiSearch className="w-5 h-5" />
              <span>Explore</span>
            </button>
            {mobileAnalysisOpen && (
              <div className="pl-8 pt-1 pb-2 flex flex-col space-y-1 bg-gray-50 rounded-b-md">
                <Link href="/analysis/body" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('Explore')}>Body Analysis</Link>
                <Link href="/analysis/face" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('Explore')}>Face Analysis</Link>
                <Link href="/analysis/personality" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('Explore')}>Personality Analysis</Link>
              </div>
            )}
          </div>
          <Link href="/my-events" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('My Events')}>
            <FiCalendar className="w-5 h-5" />
            <span>My Events</span>
          </Link>
          <Link href="/blog" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('Blog')}>
            <FiBook className="w-5 h-5" />
            <span>Blog</span>
          </Link>
          <Link href="/about-us" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('About Us')}>
            <FiSettings className="w-5 h-5" />
            <span>About Us</span>
          </Link>
          <Link href="/contact-us" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('Contact Us')}>
            <FiPhone className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
        </nav>
        <div className="mt-auto p-4 border-t">
          <Link href="/guest-login" className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-yellow-50 hover:text-yellow-600" onClick={() => handleMobileMenuItemClick('Sign in as a Guest')}>
            <FiUser className="w-5 h-5" />
            <span>Sign in as a Guest</span>
          </Link>
          <Link href="/login" className="flex items-center space-x-3 p-2 rounded-md text-red-600 hover:bg-red-50 hover:text-red-700" onClick={() => handleMobileMenuItemClick('Log In')}>
            <FiLogIn className="w-5 h-5" />
            <span>Log In</span>
          </Link>
        </div>
      </div>

      {/* Overlay for when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
        />
      )}
    </nav>
  );
};

export default Navbar;

// Add animation to globals
<style jsx global>{`
@keyframes slideFadeIn {
  0% { opacity: 0; transform: translateY(-30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-slide-fade-in {
  animation: slideFadeIn 0.4s cubic-bezier(0.4,0,0.2,1) both;
}
`}</style> 