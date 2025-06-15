'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
});

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const cards = [
  {
    title: "Face structure",
    description: "Upload a clear photo of your face to determine your face shape and get customized suggestions for hairstyles, makeup and accessories. We keep in mind of all the aspect such as eye color, hair texture, skin tone before giving personalized suggestions",
    imageUrl: "/face-structure.png",
    blobUrl: null,
    imagePosition: "right" as const,
  },
  {
    title: "Body type Analysis",
    description: "Upload your full length picture to obtain your body type category or manually enter it if you know to get personalized fashion recommendations that suits your body.",
    imageUrl: "/body-type.png",
    blobUrl: "/blob-blue.svg",
    imagePosition: "left" as const,
  },
  {
    title: "Personality Analysis",
    description: "Answer a few question to achieve clothing suggestion that aligns with and enhance your individual style and personal expression",
    imageUrl: "/personality.png",
    blobUrl: "/blob-cyan.svg",
    imagePosition: "right" as const,
  }
];

const Card = ({ title, description, imageUrl, blobUrl, imagePosition, cardBackgroundColor, cardBorderColor }: typeof cards[0] & { cardBackgroundColor: string; cardBorderColor: string }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-[85vw] sm:w-[400px] md:w-[600px] lg:w-[700px] min-h-[500px] rounded-2xl overflow-hidden shadow-2xl p-6 md:p-10 border-2"
      style={{
        backgroundColor: cardBackgroundColor,
        borderColor: cardBorderColor,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        willChange: 'transform, opacity'
      }}
    >
      {/* Responsive Layout: flex-col on mobile, flex-row on md and up */}
      <div className={`flex relative h-full flex-col md:flex-row items-center gap-y-6 md:gap-x-8 ${imagePosition === 'right' ? '' : 'md:flex-row-reverse'}`}>
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white ${quicksand.className}">{title}</h2>
          <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-full px-4 md:px-0 ${quicksand.className}">{description}</p>
        </div>

        {/* Image Content */}
        <div className="relative w-full md:w-1/2 h-64 md:h-[300px] overflow-hidden rounded-xl flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
            style={{ objectPosition: 'center center' }}
            priority
          />
          {/* Blob overlay */}
          {blobUrl && (
            <div
              className="absolute inset-0 opacity-50 mix-blend-overlay"
              style={{
                backgroundImage: `url(${blobUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const InteractiveCards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const scrollbarRef = useRef<HTMLDivElement>(null);

  // Define the height of the scrollbar in pixels
  const SCROLLBAR_HEIGHT_PX = 300; // Adjust this value to set the desired length of the grey line

  // Define the initial starting vertical position of the second card (in percentage)
  const INITIAL_SECOND_CARD_Y_PERCENT = 50; // Adjust this value

  // Define the initial starting vertical position of the third card (in percentage)
  const INITIAL_THIRD_CARD_Y_PERCENT = 100; // Adjust this value

  // Define the background color for all cards in section 2
  const CARD_BACKGROUND_COLOR = 'rgb(25, 25, 25)'; // Adjust this value to set the desired card color

  // Define the border color for all cards in section 2
  const CARD_BORDER_COLOR = 'rgb(150, 150, 150)'; // Adjust this value to set the desired border color

  // Only run GSAP/ScrollTrigger if reduced motion is not preferred
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const section = sectionRef.current;
    const scrollbar = scrollbarRef.current;
    const scrollIndicator = document.getElementById("scroll-indicator");

    if (!section || !scrollbar || !scrollIndicator) return;

    const ctx = gsap.context(() => {
      // Set initial positions
      gsap.set(cardRefs.current[0], {
        yPercent: -55,
        rotation: 0 // First card starts straight
      });
      gsap.set(cardRefs.current[1], {
        yPercent: INITIAL_SECOND_CARD_Y_PERCENT, // Second card starts at this percentage below
        opacity: 10,
        rotation: 0 // Second card starts straight
      });
      gsap.set(cardRefs.current[2], {
        yPercent: INITIAL_THIRD_CARD_Y_PERCENT, // Third card starts at this percentage below
        opacity: 10,
        rotation: 0 // Third card starts straight
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2000", // Extended scroll length to accommodate more animation
          pin: true,
          scrub: true,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        }
      });

      // Phase 1: Initial card movements
      // Animate second card with rotation
      timeline.to(cardRefs.current[1], {
        yPercent: -55,
        opacity: 1,
        rotation: -2, // Rotate second card slightly counter-clockwise
        ease: "power2.out",
      }, 0); // Starts at the beginning of the timeline

      // Animate third card with rotation
      timeline.to(cardRefs.current[2], {
        yPercent: INITIAL_SECOND_CARD_Y_PERCENT, // Third card moves to where the second card initially started
        opacity: 1,
        rotation: 2, // Rotate third card slightly clockwise
        ease: "power2.out",
      }, 0); // Starts at the beginning of the timeline

      // Optional: Add a slight rotation to the first card
      timeline.to(cardRefs.current[0], {
        scale: 0.95,
        rotation: 2, // Slight clockwise rotation for first card
        ease: "power2.out",
      }, 0); // Starts at the beginning of the timeline

      // Phase 2: Further movements after the initial stacking
      // Animate third card to the first card's final location
      timeline.to(cardRefs.current[2], {
        yPercent: -55, // Moves to the final location of the first card
        opacity: 1, // Remains opaque
        rotation: 2, // Retain rotation
        ease: "power2.out",
      }, 0.3); // Starts after Phase 1, reduced delay

      // Animate scroll indicator
      const scrollbarHeight = scrollbar.offsetHeight;
      const indicatorHeight = scrollIndicator.offsetHeight;
      const availableTravelHeight = scrollbarHeight - indicatorHeight; // Total vertical space for indicator to move

      // This percentage controls the "length" of the indicator's travel within the scrollbar track.
      // 1.0 means it travels the full available height (top to bottom).
      // 0.5 means it travels half the available height, centered.
      const INDICATOR_MOTION_PERCENTAGE = 1.0; // Adjust this value (0.0 to 1.0) to control the travel length

      const actualTravelDistance = (availableTravelHeight * INDICATOR_MOTION_PERCENTAGE) / 2;

      gsap.fromTo(scrollIndicator,
        { y: -actualTravelDistance }, // Start at the calculated top point (centered movement)
        {
          y: actualTravelDistance, // End at the calculated bottom point (centered movement)
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=2000", // Synchronize with the main timeline's end value
            scrub: true,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-16 md:py-32 relative z-10">
      {/* Cards container with fixed center point - now used for all screen sizes */}
      <div className="w-full relative z-20 min-h-[800px]">
        {/* Top marquee - positioned at the top of the section */}
        <div className="absolute -top-16 md:-top-24 left-0 w-full overflow-hidden whitespace-nowrap text-[4vw] md:text-[6vw] font-extrabold text-neutral-700">
          <p className="animate-marquee">FIND YOUR VIBE | FIND YOUR VIBE | FIND YOUR VIBE |</p>
        </div>

        {/* Cards container with fixed center point */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu origin-center"
                style={{
                  zIndex: i === 0 ? 31 : i === 1 ? 32 : 33,
                  willChange: 'transform, opacity'
                }}
              >
                <Card {...card} cardBackgroundColor={CARD_BACKGROUND_COLOR} cardBorderColor={CARD_BORDER_COLOR} />
              </div>
            ))}
          </div>
        </div>

        {/* Scrollbar */}
        <div
          ref={scrollbarRef}
          className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 w-1 bg-neutral-700 rounded-full flex items-center justify-center"
          style={{ height: SCROLLBAR_HEIGHT_PX }}
        >
          <div id="scroll-indicator" className="absolute h-6 w-6 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Bottom marquee - positioned at the bottom of the section */}
        <div className="absolute -bottom-16 md:-bottom-24 left-0 w-full overflow-hidden whitespace-nowrap text-[4vw] md:text-[6vw] font-extrabold text-neutral-700">
          <p className="animate-marquee">FIND YOUR VIBE | FIND YOUR VIBE | FIND YOUR VIBE |</p>
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar but keep functionality */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
};

export default InteractiveCards; 