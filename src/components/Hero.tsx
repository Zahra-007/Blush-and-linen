"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col-reverse md:flex-row min-h-[calc(100vh-80px)] bg-[#FDF6F0] overflow-hidden">
      
      {/* LEFT SIDE (50% width on desktop, text below image on mobile) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-16 sm:px-12 md:px-16 lg:px-24 z-10">
        
        {/* Subtle decorative element - Delicate leaf branch SVG */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <svg className="w-8 h-8 text-[#C89D96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 22C2 22 8 20 12 14C16 8 22 2 22 2" strokeLinecap="round"/>
            <path d="M12 14C10.5 12 7 11 5 12C6.5 13.5 8 16 8 18C9.5 16.5 11 15 12 14Z" fill="#C89D96" fillOpacity="0.15"/>
            <path d="M17 9C15.5 7 12 6 10 7C11.5 8.5 13 11 13 13C14.5 11.5 16 10 17 9Z" fill="#C89D96" fillOpacity="0.15"/>
          </svg>
        </motion.div>

        {/* Brand tagline */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#AFA69B] font-semibold">
            LOOK YOU ALWAYS WANTED
          </span>
        </motion.div>

        {/* Large elegant serif heading (2 lines max) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D2A26] leading-[1.15] mb-6 tracking-wide font-medium"
        >
          Your Path to <br />
          <span className="text-[#C89D96] italic">Wellness &amp; Rejuvenation</span>
        </motion.h1>

        {/* Short subtext paragraph (1-2 lines) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-[#6B6560] text-sm sm:text-base max-w-[480px] mb-8 leading-relaxed"
        >
          Discover premium aesthetic treatments, medical weight loss programs, and facial therapies customized for you.
        </motion.p>

        {/* Two CTA buttons side by side */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row gap-4 items-center w-full sm:w-auto"
        >
          {/* Primary filled button (dusty rose tone) */}
          <Link
            href="#contact"
            className="flex-1 sm:flex-none text-center bg-[#C89D96] hover:bg-[#B38E88] text-white px-6 sm:px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            Book Now
          </Link>
          
          {/* Secondary outline/ghost button */}
          <Link
            href="#services"
            className="flex-1 sm:flex-none text-center border border-[#2D2A26] text-[#2D2A26] hover:bg-[#2D2A26]/5 px-6 sm:px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300 whitespace-nowrap"
          >
            Services
          </Link>
        </motion.div>

        {/* Decorative thin line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-[1px] bg-[#E5DDD7] mt-12 origin-left"
        />
      </div>

      {/* RIGHT SIDE (50% width on desktop, image on top on mobile) */}
      <div className="w-full md:w-1/2 relative min-h-[45vh] md:min-h-full">
        {/* Curved left edge on desktop */}
        <div className="absolute inset-0 md:rounded-l-[4rem] overflow-hidden bg-[#FAF2EC]">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
            alt="Blush & Linen Spa Wellness"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

    </section>
  );
}
