'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary" id="footer">
      {/* Main Footer Section */}
      <div className="container-custom py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <div className="flex items-center mb-4">
            {/* Replace with your actual logo if available */}
            <svg className="w-8 h-8 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2-2m2 2l-2 2M17 5l2-2m2 2l-2 2m-5 14l2-2m2 2l-2-2m-5-2a5 5 0 110-10 5 5 0 010 10z"></path></svg>
            <span className="text-2xl font-bold font-serif">AuraSync</span>
          </div>
          <p className="text-sm text-secondary/80 mb-4">Style In Harmony</p>
          <p className="text-sm text-secondary/80">Mumbai</p>
          <p className="text-sm text-secondary/80">Maharashtra, India</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
          <ul className="space-y-3 text-sm text-secondary/80">
            <li><Link href="/" className="hover:text-accent transition-colors">&gt; Home</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">&gt; About Us</Link></li>
            <li><Link href="/analysis" className="hover:text-accent transition-colors">&gt; Analysis</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">&gt; Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Analysis */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Analysis</h3>
          <ul className="space-y-3 text-sm text-secondary/80">
            <li><span className="mr-2 text-accent">&gt;</span>Body Type Analysis</li>
            <li><span className="mr-2 text-accent">&gt;</span>Skin Tone Analysis</li>
            <li><span className="mr-2 text-accent">&gt;</span>Personality Analysis</li>
          </ul>
        </div>

        {/* Any Questions? */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Any Questions?</h3>
          <div className="space-y-3 text-sm text-secondary/80">
            <p className="flex items-center"><span className="mr-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span> +91 91517 91983</p>
            <p className="flex items-center"><span className="mr-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-16 4v7a2 2 0 002 2h10a2 2 0 002-2v-7m-4 4h.01M17 12h.01"></path></svg></span> singhhriya318@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Legal Links and Social Media */}
      <div className="container-custom flex flex-col md:flex-row items-center justify-between">
         {/* Legal Links */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-xs mb-4 md:mb-0">
          <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
          <li><Link href="#" className="hover:underline">Terms of Use</Link></li>
          <li><Link href="#" className="hover:underline">Sales and Refunds</Link></li>
          <li><Link href="#" className="hover:underline">Legal</Link></li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-primary hover:text-accent transition-colors"><FaFacebookF className="w-5 h-5" /></a>
          <a href="#" className="text-primary hover:text-accent transition-colors"><FaInstagram className="w-5 h-5" /></a>
          <a href="#" className="text-primary hover:text-accent transition-colors"><FaTelegramPlane className="w-5 h-5" /></a>
          <a href="#" className="text-primary hover:text-accent transition-colors"><FaLinkedinIn className="w-5 h-5" /></a>
          <a href="#" className="text-primary hover:text-accent transition-colors"><FaTwitter className="w-5 h-5" /></a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container-custom text-xs text-center py-4 text-secondary/60">
        &copy; {currentYear} AuraSync Fashion. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer; 