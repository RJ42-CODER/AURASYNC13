'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion'
import InteractiveCards from "../components/InteractiveCards";
import FAQ from "../components/FAQ";
import SellerSection from "../components/SellerBanner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with full background image */}
      <section className="relative w-full min-h-[600px] h-[100vh] flex flex-col justify-start items-stretch overflow-hidden">
        {/* Full-size background image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/hero-image.jpg"
            alt="Fashion Model"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
        {/* Content on top of image */}
        <div className="flex flex-col h-full justify-start">
          {/* The Navbar is already rendered above by layout, so just add spacing */}
          <div className="h-24" />
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-16 pt-8 md:pt-16">
            {/* Left: Text */}
            <div className="z-10 max-w-xl w-full md:w-1/2 text-black">
              <div className="mb-6">
                <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight text-black text-left uppercase">
                  {/* LET'S with gray background and tilt */}
                  <span className="relative inline-block mb-2">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[80%] bg-gray-200 rounded-sm -z-10 rotate-[-3deg]" />
                    LET'S
                  </span>
                  <br />
                  {/* EXPLORE */}
                  <span className="block">
                    EXPLORE
                  </span>
                  {/* UNIQUE with yellow highlight and star above I */}
                  <span className="relative inline-block">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[80%] bg-yellow-300 rounded-sm -z-10 -skew-x-[8deg]" />
                    <span className="relative">
                      UN
                      <span className="relative inline-block">
                        {/* Star above I */}
                        <svg className="absolute left-1/2 -translate-x-1/2 -top-6 w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 15.77L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z" fill="#FDE68A"/>
                        </svg>
                        I
                      </span>
                      QUE
                    </span>
                  </span>
                  <br />
                  {/* CLOTHES. */}
                  <span className="block">CLOTHES.</span>
                </h1>
                <p className="mt-6 text-sm md:text-lg text-black font-medium text-left">
                  According To Your Style And Preference<br />With AuraSync
                </p>
              </div>
            </div>
            {/* Right: Empty, since image is background */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        </div>
      </section>

      <InteractiveCards />

      {/* Desktop: Always visible, Mobile: Hidden */}
      <SellerSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Override the Navbar from layout */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
    </main>
  );
}
